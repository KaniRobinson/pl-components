<template>
  <div>
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
          :leftIcon="typing ? 'fas fa-circle-notch fa-spin' : 'fas fa-search'"
          placeholder="Search by breed"
          @input="handleSearch"
          @handleItem="handleSearchItem" />
        <p-button
          v-if="!authenticated"
          outline
          background="blue-600"
          color="blue-600"
          class="mr-4 active:scale-md hidden md:block"
          @click="handleLogin">
          Sign in
        </p-button>
        <p-button
          v-if="!authenticated"
          background="blue-600"
          color="white"
          class="active:scale-md hidden md:block"
          @click="handleRegister">
          Sign up
        </p-button>
        <p-button
          v-if="authenticated"
          background="blue-600"
          icon="fas fa-plus"
          color="white"
          class="mr-4 active:scale-md hidden md:block"
          @click="handleAdvertise">
          Advertise
        </p-button>
        <p-button
          v-if="authenticated"
          outline
          background="blue-600"
          color="blue-600"
          class="active:scale-md hidden md:block"
          @click="handleLogout">
          Logout
        </p-button>
        <i
          class="fas fa-bars block md:hidden cursor-pointer"
          @click="handleToggle" />
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: 'PHeader',
  props: {
    authenticated: {
      type: Boolean,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    searchResults: {
      type: Array,
      default: [],
    },
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
    handleLogin () {
      this.$emit('handleLogin')
    },
    handleRegister () {
      this.$emit('handleRegister')
    },
    handleLogout () {
      this.$emit('handleLogout')
    },
    handleAdvertise () {
      this.$emit('handleAdvertise')
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
