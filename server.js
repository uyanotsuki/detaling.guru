import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import Product from './models/Product.js';
import Favorite from './models/Favorite.js';
import Referral from './models/Referral.js';

// Настройка приложения
const app = express();
const PORT = 5000;

// Подключение к MongoDB
mongoose
  .connect('mongodb://localhost:27017/detailing-guru', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Подключено к MongoDB'))
  .catch((error) => console.error('Ошибка подключения к MongoDB:', error));

// Создание схемы и модели для пользователей
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
export default User;

import cors from 'cors';
app.use(cors({
  origin: 'http://localhost:4321', 
  methods: ['GET', 'POST'], //какие методы разрешены
  allowedHeaders: ['Content-Type'], // разрешённые заголовки
}));
app.use(bodyParser.json());


// Обработка регистрации
app.post('/register', async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    // Хэшируем пароль перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ 
      name, 
      phone, 
      email, 
      password: hashedPassword // Сохраняем зашифрованный пароль
    });

    await newUser.save();
    res.status(201).json({ message: 'Пользователь зарегистрирован', user: { name: newUser.name, email: newUser.email } });
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
    if (error.code === 11000) {
      res.status(400).json({ error: 'Пользователь с таким email уже существует' });
    } else {
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  }
});

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ error: 'Пользователь не найден' });
//     }
//     // Сравнение введённого пароля с хэшем в базе данных
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Неверный пароль' });
//     }

//     res.status(200).json({ message: 'Вход выполнен успешно', user });
//   } catch (error) {
//     console.error('Ошибка при входе:', error);
//     res.status(500).json({ error: 'Ошибка сервера' });
//   }
// });

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Найти пользователя по email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Пользователь не найден' });
    }
    let isPasswordCorrect = false;
    // Проверяем, зашифрован ли пароль в базе
    if (user.password.startsWith('$2b$') || user.password.startsWith('$2a$')) {
      // Это зашифрованный пароль, используем bcrypt для проверки
      isPasswordCorrect = await bcrypt.compare(password, user.password);
    } else {
      // Это незашифрованный пароль, сравниваем напрямую
      isPasswordCorrect = user.password === password;
    }

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Неверный пароль' });
    }

    // Если авторизация успешна
    return res.status(200).json({
      message: 'Авторизация успешна',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Ошибка сервера:', error);
    return res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Добавление товара:
app.post('/products', async (req, res) => {
  const { name, description, price, manufacturer, weight, link } = req.body;

  if (!name || !description || !price || !manufacturer || !weight || !link) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
  }

  try {
    const product = new Product({
      name,
      description,
      price,
      manufacturer,
      weight,
      link,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error('Ошибка при добавлении товара:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Добавление в избранное:
app.post('/favorites', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let favorite = await Favorite.findOne({ userId });
    if (!favorite) {
      favorite = new Favorite({ userId, productIds: [productId] });
    } else {
      favorite.productIds.push(productId);
    }
    await favorite.save();
    res.status(200).json({ message: 'Товар добавлен в избранное' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка добавления в избранное' });
  }
});
// Получение всех товаров из избранного
app.get('/favorites/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const favorite = await Favorite.findOne({ userId }).populate('productIds');
    if (!favorite) {
      return res.status(404).json({ message: 'Избранное для пользователя не найдено' });
    }
    res.status(200).json(favorite.productIds);
  } catch (error) {
    console.error('Ошибка при получении избранного:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});
// Удаление товара из избранного
app.delete('/favorites', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const favorite = await Favorite.findOne({ userId });
    if (!favorite) {
      return res.status(404).json({ message: 'Избранное для пользователя не найдено' });
    }

    favorite.productIds = favorite.productIds.filter(id => id.toString() !== productId);
    await favorite.save();

    res.status(200).json({ message: 'Товар удален из избранного' });
  } catch (error) {
    console.error('Ошибка при удалении из избранного:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});


// Учёт реферальных переходов:
app.post('/referrals', async (req, res) => {
  try {
    const referral = new Referral(req.body);
    await referral.save();
    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
