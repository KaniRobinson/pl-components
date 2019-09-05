<template>
  <div class="container mx-auto">
    <div>
      <p-select
        v-model="selected"
        id="test"
        label="Test"
        :options="options"
        error="This is an error."
        color="blue-600"
        class="mb-4" />

      <p-textarea
        v-model="input"
        autofocus
        id="test"
        label="Test"
        disabled
        placeholder="This is a test"
        error="This is an error."
        color="blue-600"
        class="mb-4" />

      <p-input
        v-model="input"
        id="test"
        label="Test"
        placeholder="This is a test"
        error="This is an error."
        color="blue-600"
        class="mb-4" />

      <p-button
        outline
        background="blue-600"
        color="blue-600"
        icon="fas fa-user"
        loading
        class="mb-4">
        Hello
      </p-button>

      <p-button
        outline
        background="blue-600"
        color="blue-600"
        icon="fas fa-user"
        class="mb-4">
        Hello
      </p-button>

      <p-button
        outline
        background="blue-600"
        color="blue-600"
        class="mb-4">
        Hello
      </p-button>

      <p-button
        background="blue-600"
        color="white"
        class="mb-4">
        Hello
      </p-button>

      <p-button
        background="blue-600"
        color="white"
        icon="fas fa-user"
        class="mb-4">
        Hello
      </p-button>

      <p-button
        background="blue-600"
        color="white"
        icon="fas fa-user"
        class="mb-4"
        loading>
        Hello
      </p-button>

      <p-checkbox
        v-model="button.one"
        color="blue-600"
        :label="`${ button.one ? 'Checked' : 'Unchecked' }`"
        class="mb-4"/>

      <p-checkbox
        v-model="button.two"
        color="blue-600"
        disabled
        label="Label 2"
        class="mb-4" />

      <p-checkbox
        v-model="button.three"
        color="blue-600"
        loading
        label="Label 3"
        error="Error loading..."
        class="mb-4"/>

      <p-checkbox
        v-model="button.four"
        color="blue-600"
        class="mb-4"/>

      <p-checkbox
        v-model="button.five"
        color="blue-600"
        disabled
        class="mb-4"/>

      <p-checkbox
        v-model="button.six"
        color="blue-600"
        loading
        checked
        error="Error Example"
        class="mb-4"/>

      <p-radio
        v-model="radio"
        abel="Number 1"
        value=
        "1" class="mb-4"/>

      <p-radio
        v-model="radio"
        abel="Number 2"
        value=
        "2" class="mb-4" error="This is a cool error."/>

      <p-radio
        v-model="radio"
        oading value="4"
        class=
        "mb-4"/>

      <p-radio
        v-model="radio"
        isabled value="5"
        class=
        "mb-4" error="this error is cooler." />
    </div>
    <vuep :template="code"></vuep>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {text: 'one', value: 1}, {text: 'two', value: 2}, {text: 'three', value: 3}, {text: 'four', value: 4}, {text: 'five', value: 5},
      ],
      selected: null,
      input: '',
      radio: '1',
      button: {
        one: false,
        two: true,
        three: false,
        four: true,
        five: false,
        six: true,
      },
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
