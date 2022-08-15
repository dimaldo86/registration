<template>
    <div class="wrap">
        <label :for="name" class="wrap__label">{{label}}</label>
        <input
            class="wrap__input"
            :type="type"
            :name="name"
            :id="name"
            :placeholder="placeholder"
            :value="value"
            @input="updateValue"
        >
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
    }
</style>