<template>
  <div class="catalog-item">
    <img src="../../img/catalog-item.png" alt="#" />
    <div>
      <h3 class="item__title">Средство для стекла антидождь</h3>
      <p class="item__desc">
        K2 с аппликатором и микрофиброй профессиональное VIZIO PRO 150 мл
        (K20539). Необычный продукт, который подобно силовому полю отталкивает
        дождь и грязь с лобового стекла, увеличивая поле зрения и безопасность
        вождения.
      </p>
      <span class="item__mfr">Koch Chemie </span>
      <span class="item__price">15345 ₽</span>
      <div class="item-btns">
        <button class="item__btn">В избранное</button>
        <button class="item__btn btn-primary">Купить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-item {
  margin-top: 20px;
  background: #fcfcfc;
  display: flex;
  gap: 20px;
  max-width: 700px;
  padding: 30px 30px 30px 20px;
  /* cursor: pointer; */
  position: relative;
}

.item__title {
  margin-bottom: 2px;
  font-size: 16px;
}

.item__desc {
  font-size: 14px;
  max-width: 440px;
}

.item__mfr {
  margin-bottom: 7px;
  display: block;
  font-size: 14px;
  color: #6d6d6d;
}

.item__price {
  font-size: 16px;
  color: #d01f1f;
}

.item-btns {
  margin-top: 14px;
  display: flex;
  gap: 40px;
  align-items: center;
}

.item__btn {
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #10141a;
  padding: 5px 25px;
  transition: all 0.4s ease-in-out;
}

.item__btn:hover {
  background-color: #10141a;
  color: #fff;
}

.btn-primary {
  padding: 6px 35px;
  border: none;
}

.btn-primary:hover {
  background: #444444;
}
</style>
