<template>
    <div class="wrap">
        <label
            :for="name"
            class="wrap__label">{{label}}</label>
        <input
            class="wrap__input"
            :type="type"
            :name="name"
            :id="name"
            :placeholder="placeholder"
            :value="value"
            @input="updateValue"
        >
        <TransitionGroup name="error">
        <div
            class="wrap__error"
            v-for="element of error"
            :key="element.$uid">
            <div class="wrap__error wrap__error-message">{{element.$message}}</div>
        </div>
        </TransitionGroup>
    </div>
</template>

<script >
export default {
    props:{
        value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default:''
        },
        label: {
            type: String,
            required: true
        },
        error: {
            type: Array,
            required: false
        }
    },
    methods: {
        updateValue(e) {
            this.$emit('update:value', e.target.value)
        }
    }
}


</script>

<style lang="scss" scoped>
.wrap {
        margin-top: 24px;

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

            &-message {
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