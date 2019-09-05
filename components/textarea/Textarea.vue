<template>
  <div>
    <label
      v-if="label"
      :for="id"
      :class="labelClasses">
      {{ label }}
    </label>
    <textarea
      :id="id"
      :class="classes"
      :value="value"
      :required="required"
      :disabled="disabled"
      :autofocus="autofocus"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)" />
    <p-error v-if="error" :error="error" />
  </div>
</template>

<script>
export default {
  name: 'PTextarea',
  props: {
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
      type: [String,null],
      default: null,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    labelClasses () {
      return {
        'block': true,
        'tracking-wide': true,
        'text-gray-700': true,
        'text-sm': true,
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
