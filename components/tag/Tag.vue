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
        'px-3': true,
        'text-sm': true,
        'font-semibold': true,
        [`bg-${this.color}`]: true,
        [`text-${this.textColor}`]: true,
      }
    },
  },
}
</script>
