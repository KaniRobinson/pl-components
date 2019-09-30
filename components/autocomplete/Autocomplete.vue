<template>
  <div v-click-outside="handleClickOutside" class="relative">
    <p-input
      :id="id"
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
      @input="handleInput"
      @focus="handleFocus" />
    <ul v-if="visible" :class="listClasses">
      <template v-if="items.length">
        <li
          v-for="(item,index) in items"
          v-html="$options.filters.highlight(item.text, value)"
          :key="index"
          :class="itemClasses"
          @click="handleItem(item)" />
      </template>
      <li v-else-if="value.length > 0" :class="emptyClasses">
        Could not find results for {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PAutocomplete',
  props: {
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
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
  data () {
    return {
      visible: false,
    }
  },
  filters: {
    highlight (value, searchTerm) {
      return value.replace(new RegExp(searchTerm, 'gi'), str => `<span class="font-semibold">${str}</span>`)
    },
  },
  computed: {
    listClasses () {
      return {
        'list-reset': true,
        'bg-white': true,
        shadow: true,
        rounded: true,
        absolute: true,
        'mt-2': true,
        'w-full': true,
        'z-50': true,
      }
    },
    itemClasses () {
      return {
        'cursor-pointer': true,
        'py-2': true,
        'px-4': true,
        'hover:bg-gray-200': true,
      }
    },
    emptyClasses () {
      return {
        'py-2': true,
        'px-4': true,
      }
    },
  },
  methods: {
    handleClickOutside (item) {
      this.visible = false
    },
    handleInput (value) {
      this.$emit('input', value)
    },
    async handleItem (item) {
      await this.$emit('handleItem', item)

      this.visible = false
    },
    handleFocus () {
      this.visible = true
    },
  },
}
</script>
