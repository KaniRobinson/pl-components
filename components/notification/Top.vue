<template>
  <div :class="classes">
    <div class="container mx-auto flex items-center">
      <p-tag class="mr-4">lorem</p-tag>
      <p class="text-white flex-1 mr-4 text-sm">{{ text }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PNotificationTop',
  props: {
    text: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: 'gray-800'
    },
  },
  computed: {
    classes () {
      return {
        'py-2': true,
        'px-4': true,
        [`bg-${this.background}`]: true,
      }
    },
  },
}
</script>
