<template>
  <div :class="classes">
    <img v-if="image" :class="imageClasses" :src="image" alt="image" />
    <div :class="contentClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCard',
  props: {
    image: {
      type: [String,null],
      default: null,
    },
    color: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    classes () {
      return {
        'rounded-lg': true,
        'shadow': true,
        [`bg-${this.color}`]: true,
      }
    },
    contentClasses () {
      return {
        'px-6': true,
        'py-4': true,
      }
    },
    imageClasses () {
      return {
        'rounded-t-lg': true,
        'w-full': true,
      }
    },
  },
}
</script>
