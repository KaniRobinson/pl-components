<template>
  <div>
    <label :class="labelClasses">
      <input type="radio"
        v-on="$listeners"
        :value="value"
        :required="required"
        :disabled="disabled || loading"
        :checked="state"
        class="hidden"
        @change="onChange">
      <div :class="classes">
        <i :class="iconClasses" />
      </div>
      <span v-if="label" :class="textClasses">{{ label }}</span>
    </label>
    <p :class="errorClasses">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'PRadio',
  model: {
      prop: 'modelValue',
      event: 'input'
  },
  props: {
    value: {
        default: '',
    },
    modelValue: {
        default: undefined,
    },
    checked: {
        type: Boolean,
        default: false,
    },
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
      default: 'blue-600',
    },
    error: {
      type: [String,null],
      default: null,
    },
    model: {}
  },
  computed: {
    state() {
      if (this.modelValue === undefined) {
          return this.checked;
      }
      return this.modelValue === this.value;
    },
    labelClasses () {
      return {
        'flex': true,
        'items-center': true,
        'cursor-pointer': true,
        'mb-1': !!this.error,
      }
    },
    classes () {
      return {
        'flex': true,
        'justify-center': true,
        'items-center': true,
        'w-6': true,
        'h-6': true,
        'border-2': true,
        'rounded-full': true,
        'mr-2': !!this.label,
        'border-gray-600': this.disabled || this.loading,
        'text-gray-600': this.disabled || this.loading,
        [`hover:border-${this.color}`]: !this.disabled && !this.loading,
        [`border-${this.color}`]: this.state && !this.disabled && !this.loading,
        'border-gray-400': !this.state && !this.disabled && !this.loading,
        [`hover:text-${this.color}`]: !this.disabled && !this.loading,
        [`text-${this.color}`]: this.state && !this.disabled && !this.loading,
        'text-gray-400': !this.state && !this.disabled && !this.loading,
      }
    },
    iconClasses () {
      return {
        'fas': true,
        'text-sm': true,
        'fa-circle-notch': this.loading,
        'fa-spin': this.loading,
        'fa-circle': !this.loading,
      }
    },
    textClasses () {
      return {
        'text-xs': true,
        'font-semibold': true,
      }
    },
    errorClasses () {
      return {
        'text-xs': true,
        'text-red-400': true,
      }
    },
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  mounted() {
    if (this.checked && !this.state) {
        this.toggle();
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      this.$emit('input', this.state ? '' : this.value);
    }
  },
}
</script>
