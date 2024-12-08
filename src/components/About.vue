<template>
    <div class="about">
        <h2 class="about__title">О нас</h2>
        <p class="about__text">Платформа для энтузиастов и профессионалов в области детейлинга, предоставляющая удобный доступ к продуктам для ухода за автомобилем через интерактивную 3D модель. Пользователь может выбрать любую часть кузова автомобиля, чтобы ознакомиться с рекомендациями по уходу и продуктами для очистки, защиты и консервации.</p>
    </div>
</template>

<style scoped>
.about {
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.about__title::after {
    position: absolute;
    content: '';
    right: -200px;
    bottom: -150px;
    width: 450px;
    height: 385px;
    background: url(../../public/img/about.png);
    z-index: -1;
}

.about__title {
    font-size: 128px;
    font-weight: 800;
    position: relative;
}

.about__text {
    max-width: 670px;
    margin-top: 115px;
    margin-right: auto;
}
</style>