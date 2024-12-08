<script setup>
import { ref } from 'vue'; // Импортируем `ref` для работы с реактивностью
import CatalogItem from './CatalogItem.vue'; // Импортируем компонент CatalogItem

// Состояние для управления видимостью каталога
const isCatalogVisible = ref(true);

// Функция для переключения видимости каталога
const toggleCatalog = () => {
  isCatalogVisible.value = !isCatalogVisible.value;
};
</script>

<template>
  <div class="catalog-wrapper">

    <!-- Контейнер каталога -->
    <!-- Используем v-if для скрытия или отображения каталога -->
    <div v-if="isCatalogVisible" class="catalog">
      <div class="catalog-navigation">
        <span class="navigation__item">Автокосметика ></span> <!-- пока так :( -->
        <span class="navigation__item"> очистители стёкол</span>
      </div>
      <a class="catalog__link" href="#">Узнайте больше о применении средств для стекольных поверхностей</a>

      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
    </div>
  </div>
</template>

<style scoped>
.catalog-wrapper {
  position: relative;
}

.catalog-toggle-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px; /* Отступ от каталога */
  position: absolute;
  top: 0; /* Размещаем кнопку сверху */
  left: 0;
  z-index: 10; /* Обеспечиваем, чтобы кнопка была поверх каталога */
}

.catalog-toggle-btn:hover {
  background-color: #0056b3;
}

.catalog {
  z-index: 1;
  position: absolute;
  overflow-y: auto;
  max-height: 80vh; /* ограничиваем высоту каталога, чтобы он не занимал весь экран */
  width: 38%; /* или задайте ширину, подходящую вашему дизайну */
  padding: 10px; /* опционально для внутреннего отступа */
  box-sizing: border-box;
}

.navigation__item {
  font-size: 24px;
  color: #1B1B1B;
}

.catalog__link {
  font-size: 16px;
  color: #BB0000;
  text-decoration: underline;
  transition: color .4s ease-in-out;
}
.catalog__link:hover {
  color: #860202;
}
</style>
