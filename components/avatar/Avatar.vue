<template>
  <div :class="classes">
    <div :class="wrapperClasses">
      <div v-if="loading" class="absolute flex w-full h-full items-center justify-center">
        <div class="absolute bg-black w-full h-full rounded-full opacity-50" />
        <div class="text-white fas fa-circle-notch fa-spin" />
      </div>
      <img
        :src="src"
        :alt="name"
        :class="imageClasses" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PAvatar',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    image: {
      type: [String,null],
      default: null,
    },
    name: {
      type: [String,null],
      required: true,
    },
    xs: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    md: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    xl: {
      type: Boolean,
      default: false,
    },
    xxl: {
      type: Boolean,
      default: false,
    },
    xxxl: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    src () {
      return this.image
        ? this.image
        : `https://ui-avatars.com/api/?size=${this.uiAvatarSize}&background=3182ce&color=fff&name=${this.name.replace(' ', '+')}`
    },
    size () {
      if (this.xs) return '10'
      if (this.sm) return '12'
      if (this.md) return '16'
      if (this.lg) return '24'
      if (this.xl) return '32'
      if (this.xxl) return '48'
      if (this.xxxl) return '64'
      return '16'
    },
    uiAvatarSize () {
      if (this.xs) return '40'
      if (this.sm) return '48'
      if (this.md) return '64'
      if (this.lg) return '96'
      if (this.xl) return '128'
      if (this.xxl) return '192'
      if (this.xxxl) return '526'
      return '64'
    },
    classes () {
      return {
        [`w-${this.size}`]: true,
        [`h-${this.size}`]: true,
        'relative': true,
      }
    },
    wrapperClasses () {
      return {
        'w-full': true,
        'h-full': true,
        'rounded-full': true,
        'overflow-hidden': true,
        'shadow-inner': true,
        'text-center': true,
        'bg-purple': true,
        'table': true,
        'cursor-pointer': true,
      }
    },
    imageClasses () {
      return {
        'object-cover': true,
        'object-center': true,
        'w-full': true,
        'h-full': true,
      }
    },
  },
}
</script>
