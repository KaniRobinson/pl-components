<template>
  <button
    :disabled="loading"
    :class="classes"
    v-on="$listeners"
  >
    <i v-if="loading" class="fas fa-circle-notch fa-spin" />
    <span v-else>
      <i v-if="icon" :class="icon" class="mr-2" />
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: 'transparent',
    },
    hover: {
      type: String,
      default: 'transparent',
    },
    color: {
      type: String,
      default: 'gray-900',
    },
    pill: {
      type: Boolean,
      default: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [String,null],
      default: null,
    },
  },
  computed: {
    classes () {
      return {
        'transition-300': true,
        'flex': true,
        'items-center': true,
        'justify-center': true,
        'py-4': true,
        'px-6': true,
        'rounded-full': this.pill,
        'text-center': true,
        'no-underline': true,
        'leading-tight': true,
        'cursor-pointer': true,
        'relative': true,
        'text-sm': true,
        'select-none': true,
        'focus:no-underline': true,
        'focus:outline-none': true,
        'border': this.outline,
        'border-solid': this.outline,
        [`hover:text-white`]: this.outline,
        [`hover:bg-${this.background}`]: this.outline,
        [`border-${this.background}`]: this.outline,
        [`bg-${this.background}`]: !this.outline,
        [`text-${this.color}`]: true,
        [`hover:bg-${this.hoverBackground}`]: !this.outline,
      }
    },
  },
}
</script>
