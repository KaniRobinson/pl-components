<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PRow',
  computed: {
    classes () {
      return {
        'flex': true,
        'flex-wrap': true,
      }
    },
  },
}
</script>
