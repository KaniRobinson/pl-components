<template>
  <div>
    <label
      v-if="label"
      :for="id"
      :class="labelClasses">
      {{ label }}
    </label>
    <input
      :id="id"
      :class="classes"
      :value="value"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :type="type"
      :min="min"
      :max="max"
      :step="step"
      :pattern="pattern"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)">
    <p-error v-if="error" :error="error" />
  </div>
</template>

<script>
export default {
  name: 'PInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    reveal: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
      validator: value => ['email', 'month', 'number', 'password', 'search', 'tel', 'text', 'time', 'url', 'week'].includes(value),
    },
    label: {
      type: [String,null],
      default: null,
    },
    placeholder: {
      type: [String,null],
      default: null,
    },
    error: {
      type: [String,null],
      default: null,
    },
    color: {
      type: String,
      default: 'blue-600',
    },
    value: {
      type: [String],
      required: true,
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: value => ['on', 'off'].includes(value),
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    min: {
      type: [String,null],
      default: null,
    },
    max: {
      type: [String,null],
      default: null,
    },
    pattern: {
      type: [String,null],
      default: null,
    },
    step: {
      type: [String,null],
      default: null,
    },
  },
  computed: {
    labelClasses () {
      return {
        'block': true,
        'tracking-wide': true,
        'text-gray-700': true,
        'font-bold': true,
        'mb-2': true,
      }
    },
    classes () {
      return {
        'block': true,
        'appearance-none': true,
        'block': true,
        'w-full': true,
        'bg-gray-200': true,
        'text-gray-700': true,
        'border': true,
        'border-gray-200': true,
        'rounded': true,
        'py-3': true,
        'px-4': true,
        'leading-tight': true,
        'focus:outline-none': true,
        'focus:bg-white': true,
        [`focus:border-${this.color}`]: true,
        'mb-1': !!this.error,
      }
    },
  },
}
</script>
