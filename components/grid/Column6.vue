<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PColumn6',
  computed: {
    classes () {
      return {
        'w-1/6': true,
        'px-2': true,
      }
    },
  },
}
</script>
