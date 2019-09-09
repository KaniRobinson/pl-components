<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PColumn3',
  computed: {
    classes () {
      return {
        'w-full': true,
        'md:w-1/3': true,
        'px-2': true,
      }
    },
  },
}
</script>
