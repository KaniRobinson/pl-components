<template>
  <p :class="classes">{{ error }}</p>
</template>

<script>
export default {
  name: 'PError',
  props: {
    error: {
      type: [String,null],
      default: null,
    },
  },
  computed: {
    classes () {
      return {
        'text-xs': true,
        'text-red-400': true,
      }
    },
  },
}
</script>
