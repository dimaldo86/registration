<template>
    <form class="form">
        <HeaderForm></HeaderForm>
        <MyInput></MyInput>
    </form>
</template>

<script >
import HeaderForm from '@/components/HeaderForm'
import MyInput from '@/components/UI/MyInput'

export default {
     components: {
        HeaderForm,
        MyInput
  }
}

</script>

 <style lang="scss" scoped>
.form {
    margin:100px auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    // align-items:center;
    width:460px;
    min-height:790px;
    padding:40px 30px;
    background: var(--white-color);
    box-shadow: 0px 12px 24px rgba(var(--secondary-color), 0.02), 0px 32px 64px rgba(var(--secondary-color), 0.04);
    border-radius: 24px;
}


</style>