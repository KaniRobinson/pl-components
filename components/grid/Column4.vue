<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PColumn4',
  computed: {
    classes () {
      return {
        'w-1/4': true,
        'px-2': true,
      }
    },
  },
}
</script>
