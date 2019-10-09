<template>
  <p-row>
    <p-column-2
      v-for="(item,index) in items"
      :key="index"
      class="mb-4">
      <p-card>
        <p-tag
          class="mb-4"
          :color="`${item.color}-300`"
          :textColor="`${item.color}-700`">
          {{ item.type }}
        </p-tag>
        <div class="flex items-baseline mb-4">
          <p class="text-4xl">{{ item.price }}</p>
          <p class="text-gray-600 ml-2">/ {{ item.per }}</p>
        </div>
        <p class="text-gray-600 mb-4">{{ item.caption }}</p>
        <ul class="list-reset mb-4 mx-2">
          <li v-for="(addon,index) in item.items" :key="index" class="text-gray-600 mb-2">
            <i class="far fa-check-circle text-green-500 mr-2" /> {{ addon }}
          </li>
        </ul>
        <p-button
          background="blue-400"
          color="white"
          class="w-full">
          {{ item.button }}
        </p-button>
      </p-card>
    </p-column-2>
  </p-row>
</template>

<script>
export default {
  name: 'PPricing',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
