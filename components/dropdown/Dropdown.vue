<template>
  <div class="relative inline-block">
    <div class="cursor-pointer" @click="toggle" >
      <slot name="trigger" />
    </div>
    <div v-if="isOpen" class="mt-2 absolute right-0 origin-top-right">
      <div class="w-64 text-left bg-white rounded border">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PDropdown',
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
