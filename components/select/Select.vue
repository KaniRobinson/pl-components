<template>
  <div class="relative">
    <label
      v-if="label"
      :for="id"
      :class="labelClasses">
      {{ label }}
    </label>
    <div class="flex items-center">
      <select
        v-model="selected"
        :required="required"
        :disabled="disabled"
        :value="value"
        :class="classes"
        @input="event => $emit('input', event.target.value)">
        <option disabled value="">{{ placeholder ? placeholder : 'Please select one' }}</option>
        <option
          v-for="(option,index) in options"
          :key="index"
          :value="option.value">
          {{ option.text }} {{ option.value }}
        </option>
      </select>
      <i class="fas fa-chevron-down text-sm absolute right-0 mr-4" />
    </div>

    <p-error v-if="error" :error="error" />
  </div>
</template>

<script>
export default {
  name: 'PSelect',
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
    options: {
      type: Array,
      required: true,
    },
    value: {},
  },
  data () {
    return {
      selected: null,
    }
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
        'pr-8': true,
        'leading-tight': true,
        'focus:outline-none': true,
        'focus:bg-white': true,
        [`focus:border-${this.color}`]: true,
        'mb-1': !!this.error,
      }
    },
  },
  watch: {
    value: {
      handler (value) {
        this.selected = value
      },
      immediate: true,
    }
  },
}
</script>
