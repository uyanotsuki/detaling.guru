<script setup>
import ItemPageInfo from './ItemPageInfo.vue';
import SearchBox from './SearchBox.vue';
</script>

<template>
  <div class="favorites">
    <div class="favorites-items">
      <ul class="favorites-catalog__list">
        <span class="catalog__title">Автокосметика</span>
        <li><a class="catalog__link" href="#">Полироли</a></li>
        <li><a class="catalog__link" href="#">Ручные автошампуни</a></li>
        <li><a class="catalog__link" href="#">Чернение резины</a></li>
        <li><a class="catalog__link" href="#">Очистка дисков</a></li>
        <li><a class="catalog__link" href="#">Мойка двигателя</a></li>
        <li><a class="catalog__link" href="#">Очистители стекол</a></li>
        <li><a class="catalog__link" href="#">Очистители салона</a></li>
        <li><a class="catalog__link" href="#">Очистители кузова</a></li>
        <li><a class="catalog__link" href="#">Защитные покрытия</a></li>
        <li><a class="catalog__link" href="#">Воски</a></li>
        <li><a class="catalog__link" href="#">Полимеры</a></li>
      </ul>
      <ul class="favorites-catalog__list">
        <span class="catalog__title">Автохимия</span>
        <li><a class="catalog__link" href="#">Средства для очистных установок</a></li>
        <li><a class="catalog__link" href="#">Смазочные средства</a></li>
        <li><a class="catalog__link" href="#">Противогололедные покрытия</a></li>
        <li><a class="catalog__link" href="#">Незамерзающая жидкость</a></li>
      </ul>
    </div>
    <div class="fav-products">
      <SearchBox/>
      <div class="">
        <ItemPageInfo/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.favorites {
  margin-top: 15px;
  display: flex;
  gap: 35px;
}
.favorites-items {
    margin-top: 70px;
    max-width: 365px;
    width: 100%;
}
.favories-catalog {
    display: flex;
    margin-top: 30px;
    gap: 30px;
    flex-wrap: wrap;
}
.fav-products {
    flex: 1;
}
.favorites-catalog__list {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.catalog__title {
    font-weight: 600;
    font-size: 14px;
}

.catalog__link {
    font-size: 14px;
    color: #000000;
    transition: color .4s ease-in-out;
}

.catalog__link:hover {
    color: #3C99EA;
}
</style>
