<template>
  <div class="container mx-auto">
    <vuep :template="code"></vuep>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: ``
    }
  },
  created () {
    this.code = `
<template>
  <div>Hello</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      //
    }
  },
  computed: {
    //
  },
  watch: {
    //
  },
  mounted: function () {
    //
  },
  created: function () {
    //
  },
  methods: {
    //
  },
}
    `
  },
}
</script>
