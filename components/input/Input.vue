<template>
  <div>
    <label
      v-if="label"
      :for="id"
      :class="labelClasses">
      {{ label }}
    </label>
    <div class="relative">
      <i v-if="leftIcon" :class="leftIconClasses" />
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
        <i v-if="icon" :class="rightIconClasses" />
    </div>
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
    leftIcon: {
      type: [String,null],
      default: null,
    },
    icon: {
      type: [String,null],
      default: null,
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
        'pl-10': !!this.leftIcon,
        'pr-10': !!this.icon,
        'leading-tight': true,
        'focus:outline-none': true,
        'focus:bg-white': true,
        [`focus:border-${this.color}`]: true,
        'mb-1': !!this.error,
      }
    },
    rightIconClasses () {
      return {
        'table': true,
        'absolute': true,
        'top-0': true,
        'bottom-0': true,
        'right-0': true,
        'my-auto': true,
        'mr-4': true,
        'text-gray-700': true,
        [this.icon]: true,
      }
    },
    leftIconClasses () {
      return {
        'table': true,
        'absolute': true,
        'top-0': true,
        'bottom-0': true,
        'left-0': true,
        'my-auto': true,
        'ml-4': true,
        'text-gray-700': true,
        [this.leftIcon]: true,
      }
    },
  },
}
</script>
