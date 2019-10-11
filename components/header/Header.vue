<template>
  <header :class="classes">
    <section class="container mx-auto flex items-center">
      <img
        :class="logoClasses"
        :src="logo"
        alt="Logo"
        class="transition-300 active:scale-md"
        @click="handleLogo" />
      <p-autocomplete
        id="search"
        v-model="search"
        :items="searchResults"
        :class="searchClasses"
        :icon="typing ? 'fas fa-circle-notch fa-spin' : 'fas fa-search'"
        :placeholder="placeholder"
        @input="handleSearch"
        @handleItem="handleSearchItem" />
      <slot />
      <i
        class="fas fa-bars block md:hidden cursor-pointer"
        @click="handleToggle" />
    </section>
  </header>
</template>

<script>
export default {
  name: 'PHeader',
  props: {
    logo: {
      type: String,
      required: true,
    },
    searchResults: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data () {
    return {
      menu: false,
      search: '',
      timeout: null,
      typing: false,
    }
  },
  computed: {
    classes () {
      return {
        'bg-white': true,
        'border-b': true,
        'p-4': true,
        'md:px-0': true,
      }
    },
    logoClasses () {
      return {
        'cursor-pointer': true,
        'h-10': true,
        'mr-4': true,
      }
    },
    searchClasses () {
      return {
        'flex-1': true,
        'mr-4': true,
      }
    },
  },
  methods: {
    handleLogo () {
      this.$emit('handleLogo')
    },
    handleToggle () {
      this.menu = !this.menu
      this.$emit('handleToggle')
    },
    handleSearch () {
      clearTimeout(this.timeout)
      this.typing = true
      this.timeout = setTimeout(async () => {
        await this.$emit('handleSearch', this.search)
        this.typing = false
      }, 1000)
    },
    handleSearchItem (item) {
      this.$emit('handleSearchItem', item)
    },
  },
}
</script>
