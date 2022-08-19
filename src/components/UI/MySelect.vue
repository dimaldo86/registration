<template>
        <div class="select">
            <div class="select__label">Язык</div>
            <button
                class="select__btn"
                @click.prevent="isListVisible = !isListVisible"
            >
                {{ selectedBtn }}
                 <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z" fill="rgba(8, 128, 174, 1)"/>
                </svg>
            </button>


            <ul
                class="select__list"
                v-show ="isListVisible"
            >
                <li
                    class="select__item"
                    v-for="item in items"
                    :key="item.id"
                    @click="selectList(item)"
                >
                    {{ item.value }}
                </li>
            </ul>
        </div> <!--select-->
</template>

<script >

export default {
      props: {
        items: {
            type: Array,
            default() {
                return []
            }
        },
        selectedBtn: {
            type: String,
            default:'Язык'
        }
    },
    data() {
        return {
            isListVisible:false,
            activeClass: 'active',
        }
    },
    methods: {
        selectList (item) {
            this.$emit('select', item)
            this.isListVisible = false
        },
        hideList () {
            this.isListVisible = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideList.bind(this), true)
    },

    beforeDestroy() {
        document.removeEventListener('click', this.hideList)
    },
}
</script>

<style lang="scss" scoped>
.select {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 34px;

    &__label {
        color: var(--text-color);
        line-height: 1.3;
        font-weight: 500;
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 52px;
         background:var(--white-color);
        border: 1px solid var(--border-color);
        box-shadow: 0px 4px 8px rgba(var(--secondary-color), 0.04);
        border-radius: 6px;
        margin-top: 6px;
        padding: 16px;
        color: var(--main-color);
        transition: all .1s ease-in;
        cursor: pointer;

        &:focus, &:focus-visible, &:active {
            color: var(--secondary-color);
            border: 2px solid var(--actived-color);
        }

        &.active {
            color: var(--secondary-color);
        }
    }

    &__list {
        position: absolute;
        top: 104%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        list-style-type: none;
        background:var(--white-color);
        border: 1px solid var(--border-color);
        box-shadow: 0px 4px 8px rgba(var(--secondary-color), 0.04), 0px 20px 20px rgba(var(--secondary-color), 0.04);
        border-radius: 6px;
        z-index: 5;
        transition: all .4s ease-in;
    }

    &__item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
        padding: 16px;
        color: var(--text-color);
        cursor: pointer;
        transition: all .4s ease-in-out;

        &:hover {
            background: var(--hover-color);
        }
    }
}

</style>