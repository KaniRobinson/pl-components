<template>
  <div :class="classes">
    <div class="container mx-auto flex items-center">
      <p-tag v-if="tagText" class="mr-4">{{ tagText }}</p-tag>
      <p class="text-white flex-1 mr-4 text-sm">{{ text }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PNotificationTop',
  props: {
    tagText: {
      type: [String,null],
      default: null
    },
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
