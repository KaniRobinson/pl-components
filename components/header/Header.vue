<template>
  <header class="bg-white border-b md:px-8">
    <nav class="relative flex flex-wrap items-center md:py-4">
      <n-link to="/" class="flex-shrink-0 p-4 mr-4 md:p-0 active:scale-md transition-300">
        <img class="h-10 w-10" :src="logo" alt="">
      </n-link>

      <p-autocomplete
        id="search"
        v-model="search"
        :items="searchResults"
        :left-icon="typing ? 'fas fa-circle-notch fa-spin' : 'fas fa-search'"
        :placeholder="placeholder"
        class="flex-1 mr-4"
        @input="handleSearch"
        @handleItem="handleSearchItem"
      />

      <p-header-navigation
        @handleLogin="handleLogin"
        @handleRegister="handleRegister" />

      <div class="flex-shrink-0 pr-4 md:hidden">
        <button type="button" class="fas fa-bars block text-gray-800 focus:outline-none focus:text-gray-900" @click="handleToggle" />
      </div>
    </nav>

    <p-sidebar
      :isOpen="isOpen"
      @handleToggle="handleToggle"
      @handleLogin="handleLogin"
      @handleRegister="handleRegister" />
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
    },
    dropdownItems: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      search: '',
      timeout: null,
      typing: false,
      isOpen: false,
    }
  },
  methods: {
    handleSearch () {
      clearTimeout(this.timeout)
      this.typing = true
      this.timeout = setTimeout(async () => {
        await this.$emit('handleSearch', this.search)
        this.typing = false
      }, 1000)
    },
    handleToggle () {
      this.isOpen = !this.isOpen
    },
    handleSearchItem (item) {
      this.$emit('handleSearchItem', item)
    },
    handleLogin () {
      this.$router.push('/login')
    },
    handleRegister () {
      this.$router.push('/register')
    }
  }
}
</script>
