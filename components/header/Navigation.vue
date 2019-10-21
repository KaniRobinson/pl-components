<template>
  <div class="relative flex items-baseline">
    <p-button
      v-if="!$auth.loggedIn"
      class="active:scale-md hidden md:block mr-4"
      @click="handleLogin">
      Login
    </p-button>

    <p-button
      v-if="!$auth.loggedIn"
      background="gray-400"
      hover-background="gray-500"
      color="gray-800"
      class="active:scale-md hidden md:block"
      @click="handleRegister">
      Register
    </p-button>

    <p-dropdown v-if="$auth.loggedIn" class="hidden md:block">
      <p-button slot="trigger" class="active:scale-md md:block">
        {{ $auth.user.firstName }} {{ $auth.user.lastName }}
      </p-button>

      <div class="flex items-center px-4 py-4 border-b">
        <p-avatar
          :name="`${$auth.user.firstName} ${$auth.user.lastName}`"
          :url="$auth.user.avatar"
          class="mr-4"
          xs />
        <div>
          <p class="font-semibold text-sm text-gray-800 leading-none mb-2">{{ $auth.user.firstName }} {{ $auth.user.lastName }}</p>
          <p class="text-xs text-gray-600 leading-none">{{ $auth.user.emailAddress }}</p>
        </div>
      </div>

      <div class="border-b">
        <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-5 transition-300" to="/">Manage ads</n-link>
        <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-5 transition-300" to="/">Profile</n-link>
      </div>

      <div class="border-b">
        <n-link class="block px-4 py-3 text-sm hover:text-blue-400 hover:px-5 transition-300" to="/">Settings</n-link>
      </div>

      <div class="border-b">
        <a class="cursor-pointer block px-4 py-3 text-sm hover:text-blue-400 hover:px-5 transition-300" @click="$auth.logout()">Logout</a>
      </div>
    </p-dropdown>
  </div>
</template>

<script>
export default {
  name: 'PHeaderNavigation',
  methods: {
    handleLogin () {
      this.$emit('handleLogin')
    },
    handleRegister () {
      this.$emit('handleRegister')
    },
  },
}
</script>
