<template>
  <section :class="classes">
    <div class="container max-w-3xl mx-auto">
      <p v-if="tag" :class="tagClasses">{{ tag }}</pv->
      <p v-if="title" :class="titleClasses">{{ title }}</p>
      <p v-if="caption" :class="captionClasses">{{ caption }}</p>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PMast',
  props: {
    tag: {
      type: [String,null],
      default: null,
    },
    title: {
      type: [String,null],
      default: null,
    },
    caption: {
      type: [String,null],
      default: null,
    },
  },
  computed: {
    classes () {
      return {
        'bg-gray-800': true,
        'pt-12': true,
        'pb-24': true,
      }
    },
    tagClasses () {
      return {
        'text-white': true,
        'text-xs': true,
        'uppercase': true,
        'py-1': true,
        'px-4': true,
        'rounded': true,
        'border': true,
        'border-white': true,
        'table': true,
        'mx-auto': true,
        'mb-4': true,
      }
    },
    titleClasses () {
      return {
        'text-white': true,
        'text-center': true,
        'text-4xl': true,
        'mb-4': true,
      }
    },
    captionClasses () {
      return {
        'text-gray-400': true,
        'text-center': true,
        // 'text-sm': true,
      }
    },
  },
}
</script>
