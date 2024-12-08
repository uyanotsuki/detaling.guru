<template>
  <div class="item-about">
    <img src="../../public/img/item.png" alt="" />
    <div class="item-info">
      <h4 class="item__title">
        Perfecta OptiPlast кондиционер-восстановитель резины и внешнего пластика
        5 л
      </h4>
      <span class="item__price">15345 ₽</span>
      <div>
        <span class="item__brand">Бренд: Perfecta</span>
        <span class="item__weight">Вес: 5.245 кг</span>
      </div>
      <p class="item__description">
        Кондиционер-восстановитель для резины и внешнего пластика.
        Восстанавливает цвет и придает эластичность, образуя стойкую матовую
        антистатичную пленку на поверхности обработанных элементов. Возможно
        применение на влажных поверхностях.<br /><br />
        Способ применения:<br>1. Очистить обрабатываемую поверхность, используя
        соответствующие моющие средства Perfecta.<br>2. Втереть состав в
        обрабатываемую поверхность, не оставляя излишков.<br /><br />
        Предупреждение: Не разводить водой!
      </p>
      <div class="item-buttons">
        <button class="item__btn add-to-fav">В избранное</button>
        <button class="item__btn buy">Купить</button>
      </div>
    </div>
  </div>
  <div class="item-details">
    <div class="item-origin">
        <ul class="item__list">
            <p class="details__title">Происхождение</p>
            <li class="item-wrap">
                <p class="item__text">Производитель</p>
                <p class="item__text">Perfecta</p>
            </li>
            <li class="item-wrap">
                <p class="item__text">Страна</p>
                <p class="item__text">Германия</p>
            </li>
            <li class="item-wrap">
                <p class="item__text">Бренд</p>
                <p class="item__text">Perfecta</p>
            </li>
        </ul>
        <ul class="item__list">
            <p class="details__title">Параметры</p>
            <li class="item-wrap">
                <p class="item__text">Назначение</p>
                <p class="item__text">Для пластика, для резины</p>
            </li>
            <li class="item-wrap">
                <p class="item__text">Номинальный объём</p>
                <p class="item__text">5 л</p>
            </li>
        </ul>
        <ul class="item__list">
            <p class="details__title">Хранение</p>
            <li class="item-wrap">
                <p class="item__text">Срок годности (мес)</p>
                <p class="item__text">12</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.item-about {
    margin-top: 30px;
    display: flex;
    gap: 35px;
}
.item__title {
    margin-bottom: 38px;
    font-size: 24px;
}
.item__price {
    font-weight: 600;
    margin-bottom: 15px;
    display: block;
    font-size: 24px;
    color: #D01F1F;
}
.item__brand {
    display: block;
    font-size: 16px;
}
.item__description {
    margin: 17px 0 10px;
    font-size: 16px;
}
.item-buttons {
    display: flex;
    align-items: center;
    gap: 15px;
}
.add-to-fav {
    width: 100%;
    max-width: 218px;
    padding: 10px;
    border: 1px solid #10141A;
    border-radius: 4px;
    transition: all .4s ease-in-out;
}
.add-to-fav:hover {
    background-color: #838383;
    border: 1px solid #838383;
}
.buy {
    width: 100%;
    max-width: 160px;
    padding: 10px;
    background: #BB0000;
    border-radius: 4px;
    color: #FFFFFF;
    transition: all .4s ease-in-out;
}
.buy:hover {
    background: #8d0101;
}
.item-details {
    margin-top: 50px;
}
.details__title {
    margin-bottom: 12px;
    font-size: 16px;
}
.item-wrap {
    margin-bottom: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.item-wrap::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #D7D7D7;
}
.item__text {
    font-size: 14px;
    color: #454545;
}
.item__list {
    margin-bottom: 25px;
}
</style>
