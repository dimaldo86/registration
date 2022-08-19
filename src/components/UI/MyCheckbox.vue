<template>
    <div class="checkbox">
        <input
            class="checkbox__input"
            :type="type"
            :name="name"
            :id="name"
            :value="value"
            :checked="checked"
            @change="updateChecked($event)"
        >
        <label
                for="condition"
                class="checkbox__label"
            >Принимаю
            <a href="https://www.copyright.ru/documents/zashita_avtorskih_prav/zashchita_kontenta_sayta/tipovoe_polzovatelskoe_soglashenie_site/" class="checkbox__link" target="_blank">условия</a>
            использования
        </label>
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
        checked: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        updateChecked(event) {
             this.$emit('update:checked', event.target.checked)
        }
    }
}

</script>

<style lang="scss" scoped>
.checkbox {
    position: relative;
    margin-top: 31px;
    display: flex;
    align-items: center;

    &__input[type="checkbox"] {
        position: relative;
        width: 28px;
        height: 28px;
        border: 2px solid var(--border-color);
        box-shadow: 0px 4px 8px rgba(var(--secondary-color), 0.04);
        border-radius: 4px;
        appearance: none;
        outline: 0;
        cursor: pointer;
        transition: all 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

        &::before {
            position: absolute;
            content: '';
            display: block;
            top: 2px;
            left: 8.5px;
            width: 8px;
            height: 14px;
            border-style: solid;
            border-color: var(--actived-color);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            opacity: 0;
        }

        &:checked {
            border-color: var(--actived-color);
            background:  var(--white-color);

            &::before {
                opacity: 1;
            }

        }
    }

    &__label {
        color:var(--text-color);
        margin-left: 2%;
    }

    &__link {
        position: relative;
        text-decoration: none;
        color:var(--actived-color);
        transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0;
            height: 2px;
            background-color: var(--actived-color);
            transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);

            &:hover {
                left: 0;
                right: auto;
                width: 100%;
            }
        }
    }

    @media (hover: hover) and (pointer: fine) {
        .checkbox__link:hover::before{
            left: 0;
            right: auto;
            width: 100%;
        }
    }
}
</style>