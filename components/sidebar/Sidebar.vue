<template>
  <aside class="md:hidden">
    <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
      <div @click="handleToggle" class="absolute inset-0 bg-black opacity-50" />
    </div>

    <div v-show="isOpen" class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-y-auto">
      <div class="relative z-10 bg-white">
        <div class="absolute right-0 top-0 p-4">
          <button type="button" class="fas fa-times block text-gray-800 focus:outline-none focus:text-gray-900" @click="handleToggle" />
        </div>

        <template v-if="$auth.loggedIn">
          <div class="flex items-center px-4 py-4 border-b">
            <p-avatar :name="`${$auth.user.firstName} ${$auth.user.lastName}`" :url="$auth.user.avatar" class="mr-4" xs />
            <div>
              <p class="font-semibold text-sm text-gray-800 leading-none mb-2">{{ $auth.user.firstName }} {{ $auth.user.lastName }}</p>
              <p class="text-xs text-gray-600 leading-none">{{ $auth.user.emailAddress }}</p>
            </div>
          </div>

          <div class="border-b">
            <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-6 transition-300" to="/">Homepage</n-link>
          </div>

          <div class="border-b">
            <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-6 transition-300" to="/">Manage ads</n-link>
            <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-6 transition-300" to="/">Profile</n-link>
          </div>

          <div class="border-b mb-4">
            <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-6 transition-300" to="/">Settings</n-link>
          </div>

          <p-button
            background="red-600"
            hover-background="red-700"
            class="block mb-4 w-11/12 mx-auto"
            @click="$auth.logout()">
            Logout
          </p-button>
        </template>

        <template v-else>
          <div class="border-b">
            <p class="block px-4 pt-3 pb-1 text-xs font-semibold cursor-pointer">Category 1</p>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Homepage</n-link>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 2</n-link>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 3</n-link>
          </div>

          <div class="border-b">
            <p class="block px-4 pt-3 pb-1 text-xs font-semibold cursor-pointer">Category 2</p>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 4</n-link>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 5</n-link>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 6</n-link>
          </div>

          <div class="border-b mb-4">
            <p class="block px-4 pt-3 pb-1 text-xs font-semibold cursor-pointer">Category 3</p>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 7</n-link>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 8</n-link>
            <n-link class="block px-6 py-3 text-sm hover:text-blue-400 hover:px-8 transition-300" to="/">Link 9</n-link>
          </div>

          <p-button
            class="block mb-4 w-11/12 mx-auto"
            @click="handleLogin">
            Login
          </p-button>

          <p-button
            background="gray-400"
            hover-background="gray-500"
            color="gray-800"
            class="block mb-4 w-11/12 mx-auto"
            @click="handleRegister">
            Register
          </p-button>
        </template>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'PSidebar',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleToggle () {
      this.$emit('handleToggle')
    },
    handleLogin () {
      this.$emit('handleLogin')
    },
    handleRegister () {
      this.$emit('handleRegister')
    },
  },
}
</script>
