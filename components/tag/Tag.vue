<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'PTag',
  props: {
    color: {
      type: String,
      default: 'gray-200',
    },
    textColor: {
      type: String,
      default: 'gray-700',
    }
  },
  computed: {
    classes () {
      return {
        'inline-block': true,
        'rounded-full': true,
        'leading-none': true,
        'font-semibold': true,
        'py-2': true,
        'px-3': true,
        'text-sm': true,
        'font-light': true,
        [`bg-${this.color}`]: true,
        [`text-${this.textColor}`]: true,
      }
    },
  },
}
</script>
