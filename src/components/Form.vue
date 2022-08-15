<template>
    <form class="form" @submit.prevent="submitForm()">

        <HeaderForm></HeaderForm>

        <!-- <div class="form__wrap">
            <label class="form__label" for="name">
                Имя
            </label>
            <MyInput
                label="Имя"
                type="type"
                id="name"
                name="name"
                placeholder="Введите Ваше Имя"
                v-model:value.trim="form.name"

                @blur="v$.form.name.$touch()"
            ></MyInput>
            <input
                class="form__input"
                type="text"
                id="name"
                placeholder="Введите Ваше имя"
                v-model.trim="form.name"
                @input="v$.form.name.$touch()"
                @blur="v$.form.name.$touch()"
            >
            <transition-group name="error" appear v-if="v$.form.name.$error">
                <p class="form__error" v-if="v$.form.name.required.$invalid">Поле имя обязательно</p>
                <p  class="form__error" v-if="v$.form.name.alpha.$invalid && v$.form.name.alphaCirilic.$invalid">
                    Введите буквенные символы
                </p>
                <p  class="form__error" v-if="v$.form.name.minLength.$invalid">
                Введите минимум 3 символа
                </p>
                <p  class="form__error" v-if="v$.form.name.maxLength.$invalid">
                    Введено много символов
                </p>
            </transition-group>

        </div>

        <div class="form__wrap">
            <label class="form__label" for="email">
                Еmail
            </label>
            <input
                    id="email"
                    class="form__input"
                    type="email"
                    placeholder="Введите ваш email"
                    v-model.trim="form.email"
                    @input="v$.form.email.$touch()"
                    @blur="v$.form.email.$touch()"
            >

            <transition-group appear name="error" v-if="v$.form.email.$error">
                <p class="form__error" v-if="v$.form.email.required.$invalid">Поле имя обязательно</p>
                <p  class="form__error" v-if="v$.form.email.email.$invalid">
                    Некoрректный email, пример корректного - test@mail.com
                </p>
                <p  class="form__error" v-if="v$.form.email.uniqueEmail.$invalid">
                    Пользователь с таким  email уже существует
                </p>
            </transition-group>

        </div>

        <div class="form__wrap">
            <label class="form__label" for="phone">
               Номер телефона
            </label>
             <input
                    id="phone"
                    class="form__input"
                    type="text"
                    placeholder="Введите номер телефона"
                    v-model="form.phone"
                    @input="v$.form.phone.$touch()"
                    @blur="v$.form.phone.$touch()"
            >

            <transition-group name="error" appear v-if="v$.form.phone.$error">

                <p class="form__error form__error-transition" v-if="v$.form.phone.required.$invalid">Поле имя обязательно</p>
                <p  class="form__error" v-if="v$.form.phone.numeric.$invalid">
                    Введети цифры
                </p>
                 <p  class="form__error" v-if="v$.form.phone.onlyElevenDigital.$invalid">
                    Введите 11 символов
                </p>
            </transition-group>
        </div> -->

        <MySelect
            :items="items"
            @select="itemSelect"
            :selectedBtn="selectedBtn"
        ></MySelect>

       <MyCheckbox

       ></MyCheckbox>

       <MyButton
        :disabled="v$.$invalid"
       >
       </MyButton>

    </form>
</template>

<script >

import HeaderForm from '@/components/HeaderForm'
import MySelect from '@/components/UI/MySelect'
import MyCheckbox from '@/components/UI/MyCheckbox'
import MyButton from '@/components/UI/MyButton'
import MyInput from '@/components/UI/MyInput'

import useVuelidate from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength, alpha, helpers } from '@vuelidate/validators'


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
            phone:''
        },
        feedback:''
    }
  },
   validations () {
    return {
      form: {
        name: {
            required,
            minLength:minLength(3),
            maxLength:maxLength(10),
            alpha,
            alphaCirilic:helpers.regex(/^[А-Яа-я -]*$/)


       },
        email: {
            required,
            email,
            // async uniqueEmail (value) {
            //     if(value === '') return true
            //     const res = await axios.get('http://localhost:3000/registrations')
            //     const registrations = res.data
            //     const allreadyDoneRegistration = registrations.find(registration => {
            //         if (registration.email === allreadyDoneRegistration) {
            //             return false
            //         }
            //             return true
            //         }
            //     )
            // }
        },
        phone: {
            required,
            numeric,
            onlyElevenDigital (value) {
                return value.trim().length === 11
            }
        }
      }

    }
  },
  methods: {
    itemSelect(item) {
        this.selectedBtn = item.value
    },

    submitForm () {
            this.v$.$touch()
            this.v$.$validate()
            if(!this.v$.$invalid) {
                // alert('Form submitted')
                console.log(this.form);
            }

            this.v$.$reset()
        }
    //   submitForm() {
    //   this.v$.$validate()
    //   // checks all inputs
    //   if (!this.v$.$invalid) {
    //     // if ANY fail validation
    //     console.log(this.form);
    //   }
    // },
  },
}

</script>

 <style lang="scss" scoped>
.form {
    margin:40px auto;
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

   &__wrap {
        margin-top: 34px;
        transition: all 0.4s ease-in-out;
    }

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
            color: var(--secondary-color);


            &::placeholder {
                font-weight: 400;
                font-size: 16px;
                color:var(--main-color);
                background: var(--white-color);
            }

            &:focus-visible {
                outline: 2px solid var(--actived-color)
            }
    }

    &__error {
        margin-top: 8px;
        color: var(--failed-color);
        font-size: 14px;


        &-transition {
            transition: all 0.4s ease-in;
        }
    }

}

.error-enter-active {
  transition: all 0.3s ease-out;
}

.error-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.error-enter-from {
    transform: translateX(-50px);
    opacity: 0;
}
.error-leave-to {
    transform: translateX(150px);
    opacity: 0;
}

</style>