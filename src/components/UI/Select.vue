<template>
  <div class="p-0">
    <select :value="modelValue" class="select" @change="changeOptions">
      <option disabled value="">Select filter</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    name: "Select",
    modelValue: {
      type: String
    },
    methods: {
      changeOptions(e) {
        console.log(this.options)
        this.$emit("update:modelValue", e.target.value)
      }
    }
  }
</script>

<style scoped>
.p-0 {
  padding: 0;
}
.select {
  width: 138px !important;
  border-radius: 4px;
  padding: 14px 0px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>