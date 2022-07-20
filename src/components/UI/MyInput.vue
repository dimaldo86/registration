<template>
    <div class="wrap">
        <label class="wrap__label" for="input">
            Имя
            <input id="input" class="wrap__input" type="text" placeholder="Введите Ваше имя" >
        </label>
    </div>

</template>

<script >

</script>

<style lang="scss">
.wrap {
    margin-top: 34px;

    &__label {
        font-weight: 500;
        font-size: 16px;
        line-height:1.3;
        color: var(--text-color);

    }

    &__input {
         width:100%;
        height:52px;
        background: var(--white-color);
        border: 1px solid #DBE2EA;
        box-shadow: 0px 4px 8px rgba(var(--secondary-color), 0.04);
        border-radius: 6px;
        margin-top: 6px;
        padding:16px;

        &::placeholder {
            font-weight: 400;
            font-size: 16px;
            color:var(--main-color);
        }
    }
}

</style>