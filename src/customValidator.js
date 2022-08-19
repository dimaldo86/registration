import { helpers } from '@vuelidate/validators'

export const alphaCirilic = helpers.regex(/^[a-zA-Z А-Яа-я -]*$/)

export const onlyElevenDigital = (value) => value.length === 11

