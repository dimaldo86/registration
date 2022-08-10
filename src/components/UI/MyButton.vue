<template>
    <button type="submit" class="btn" >Зарегистрироваться</button>
</template>

<script >

</script>

<style lang="scss" scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    margin-top: 37px;
    background: var(--actived-color);
    box-shadow: 0px 2px 4px rgba(var(--secondary-color), 0.08), 0px 4px 8px rgba(var(--secondary-color), 0.08);
    color:var(--hover-color);
    border-radius: 6px;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all .4s ease-in-out;

    &:disabled {
        background: #DBE2EA;
        box-shadow: 0px 2px 4px rgba(var(--secondary-color), 0.08), 0px 4px 8px rgba(var(--secondary-color), 0.08);
        color: var(--light-color);
        cursor: default;
        transition: all .4s ease-in-out;
    }
}
</style>