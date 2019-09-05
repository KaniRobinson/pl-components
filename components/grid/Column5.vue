<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PColumn5',
  computed: {
    classes () {
      return {
        'w-1/5': true,
        'px-2': true,
      }
    },
  },
}
</script>
