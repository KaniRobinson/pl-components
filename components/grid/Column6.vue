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
        'w-full': true,
        'sm:w-1/2': true,
        'md:w-1/3': true,
        'lg:w-1/6': true,
        'px-2': true,
      }
    },
  },
}
</script>
