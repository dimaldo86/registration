<template>
    <div class="header">
        <h1 class="header__title">Регистрация</h1>
        <div class="header__subtitle">
            <p class="header__text">Уже есть аккаунт?</p>
            <a class="header__link" href="#">Войти</a>
        </div>
    </div>

</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.header {
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;

    &__title {
        font-weight: 700;
        font-size: 34px;
        line-height: 1.3;
        color: var(--secondary-color);
        margin-bottom:5px;
    }

    &__subtitle {
        display:flex;
        align-items:center;
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.38;
        color: var(--secondary-color);
        margin-right: 6px;
    }

    &__link {
        display:inline;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.38;
        color: var(--actived-color);
        text-decoration:none;
    }
}

</style>