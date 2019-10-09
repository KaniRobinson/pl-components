<template>
  <div>
    <label :class="labelClasses">
      <input type="checkbox"
        v-on="$listeners"
        :required="required"
        :disabled="disabled || loading"
        :value="checked"
        :checked="checked"
        class="hidden"
        @change="handleChange">
      <div :class="classes">
        <i :class="iconClasses" />
      </div>
      <span v-if="label" :class="textClasses">{{ label }}</span>
    </label>
    <p-error v-if="error" :error="error" />
  </div>
</template>

<script>
export default {
  name: 'PCheckbox',
  props: {
    required: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    label: {
      type: [String, null],
      default: null,
    },
    color: {
      type: String,
      default: 'blue-400',
    },
    error: {
      type: [String,null],
      default: null,
    },
    value: {},
  },
  data () {
    return {
      checked: false,
    }
  },
  computed: {
    classes () {
      return {
        'flex': true,
        'justify-center': true,
        'items-center': true,
        'cursor-pointer': true,
        'w-6': true,
        'h-6': true,
        'border-2': true,
        'rounded': true,
        'mr-2': !!this.label,
        'border-gray-600': this.disabled || this.loading,
        'text-gray-600': this.disabled || this.loading,
        [`hover:border-${this.color}`]: !this.disabled && !this.loading,
        [`border-${this.color}`]: this.value && !this.disabled && !this.loading,
        'border-gray-400': !this.value && !this.disabled && !this.loading,
        [`hover:text-${this.color}`]: !this.disabled && !this.loading,
        [`text-${this.color}`]: this.value && !this.disabled && !this.loading,
        'text-gray-400': !this.value && !this.disabled && !this.loading,
      }
    },
    labelClasses () {
      return {
        'flex': true,
        'items-center': true,
        'mb-1': !!this.error,
      }
    },
    iconClasses () {
      return {
        'fas': true,
        'text-sm': true,
        'fa-circle-notch': this.loading,
        'fa-spin': this.loading,
        'fa-check': this.value && !this.loading,
        'fa-times': !this.value && !this.loading,
      }
    },
    textClasses () {
      return {
        'text-xs': true,
        'font-semibold': true,
      }
    },
  },
  methods: {
    handleChange () {
      this.checked = !this.checked
      this.$emit('input', this.checked)
    },
  },
}
</script>
