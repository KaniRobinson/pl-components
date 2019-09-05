<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PColumn2',
  computed: {
    classes () {
      return {
        'w-1/2': true,
        'px-2': true,
      }
    },
  },
}
</script>
