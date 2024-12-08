<template>
  <a class="item-info__link" href="/item-info">
    <div class="favorites__item">
    <img class="item__delete" src="../../public/img/favorites/close.png" alt="#">
    <img class="item__img" src="../../public/img/favorites/2.png" alt="#" />
    <h4 class="item__title">
      Perfecta OptiPlast кондиционер-восстановитель резины и внешнего пластика 5 л
    </h4>
    <span class="item__mfc">Koch Chemie</span>
    <p class="item__price">15345 ₽</p>
  </div>
  </a>
</template>

<style scoped>
.item-info__link {
  color: #000;
}
.favorites__item {
  max-width: 325px;
  position: relative;
  cursor: pointer;
  transition: transform .2s ease-in-out;
}

.favorites__item:hover {
    transform: translateY(-2px);
}

.item__delete {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.item__title {
  margin: 22px 0 10px;
  font-size: 18px;
}

.item__mfc {
  margin-bottom: 2px;
  font-size: 14px;
  color: #6d6d6d;
}

.item__price {
  font-size: 16px;
  color: #d01f1f;
}
</style>
