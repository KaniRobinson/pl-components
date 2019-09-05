<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PColumn',
  computed: {
    classes () {
      return {
        'w-full': true,
        'px-2': true,
      }
    },
  },
}
</script>
