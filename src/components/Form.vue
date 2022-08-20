<template>
    <form class="form" @submit.prevent="submitForm()">

        <HeaderForm></HeaderForm>

        <MyInput
            label="Имя"
            placeholder="Введите Ваше имя"
            name="name"
            type="type"
            v-model:value.trim="v$.form.name.$model"
            :error="v$.form.name.$errors"
            @blur="v$.form.name.$touch()"
        >
        </MyInput>

        <MyInput
            label="Еmail"
            placeholder="Введите ваш email"
            name="email"
            type="email"
            v-model:value.trim="v$.form.email.$model"
            :error="v$.form.email.$errors"
            @blur="v$.form.email.$touch()"
        >
        </MyInput>

        <MyInput
            label="Номер телефона"
            placeholder="Введите номер телефона"
            name="phone"
            type="type"
            v-model:value.trim="v$.form.phone.$model"
            :error="v$.form.phone.$errors"
            @blur="v$.form.phone.$touch()"
        >
        </MyInput>

        <MySelect
            :items="items"
            @select="itemSelect"
            :selectedBtn="selectedBtn"
            v-model="form.select"
        ></MySelect>

       <MyCheckbox
            name="isCheckboxActive"
            type="checkbox"
            v-model:checked="form.isCheckboxActive"
       ></MyCheckbox>

       <MyButton :disabled="v$.$invalid || !form.isCheckboxActive"></MyButton>

       <div class="form__feedback"> {{ feedback }}</div>

    </form>
</template>

<script >

import HeaderForm from '@/components/HeaderForm'
import MySelect from '@/components/UI/MySelect'
import MyCheckbox from '@/components/UI/MyCheckbox'
import MyButton from '@/components/UI/MyButton'
import MyInput from '@/components/UI/MyInput'

import useVuelidate from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import { alphaCirilic, onlyElevenDigital } from '@/customValidator'

export default {
    name: 'Form',
     components: {
        HeaderForm,
        MySelect,
        MyCheckbox,
        MyButton,
        MyInput
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
        items:[
            {id:Date.now(),value:'Русский'},
            {id:Date.now(),value:'Английский'},
            {id:Date.now(),value:'Китайский'},
            {id:Date.now(),value:'Испанский'}
        ],
        selectedBtn:'Язык',
        form:{
            name:'',
            email:'',
            phone:'',
            isCheckboxActive:false,
            select:''
        },

        feedback:''
    }
  },
   validations () {
    return {
      form: {
        name: {
            required:helpers.withMessage('Поле Имя обязательно', required),
            minLength:helpers.withMessage('Введите минимум 3 символа',minLength(3)) ,
            maxLength:helpers.withMessage('Введено много символов, максимальное значение 30', maxLength(30)),
            alphaCirilic:helpers.withMessage('Введите буквенные символы', alphaCirilic),
       },
        email: {
            required:helpers.withMessage('Поле Имя обязательно', required),
            email:helpers.withMessage('Некoрректный email, пример корректного - test@mail.com',email ),
        },
        phone: {
            required:helpers.withMessage('Поле Имя обязательно', required),
            numeric:helpers.withMessage('Введети цифры', numeric),
            onlyElevenDigital:helpers.withMessage('Введите 11 символов', onlyElevenDigital)
        }
      }

    }
  },
  methods: {
    itemSelect(item) {
        this.selectedBtn = this.form.select = item.value
    },

    submitForm () {
            this.v$.$validate()

           if (!this.v$.$error) {
        // if ANY fail validation
                this.feedback = 'Форма успешна отправлена'
                console.log(this.form);
                this.v$.$reset()
            } else {
                this.feedback = 'Форма незарегистрирована'
            }

        }
    },
}

</script>

 <style lang="scss" scoped>
.form {
    margin:10px auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    // align-items:center;
    width:460px;
    min-height:740px;
    padding:30px 30px;
    background: var(--white-color);
    box-shadow: 0px 12px 24px rgba(var(--secondary-color), 0.02), 0px 32px 64px rgba(var(--secondary-color), 0.04);
    border-radius: 24px;

    &__feedback {
        text-align: center;
        margin-top: 15px;
        color: var(--success-color);
        font-size: 18px;
    }
}



</style>