<template>
  <input
    type="text"
    class="form-control border-success"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    v-on:input="onInput"
  />
</template>

<script>
export default {
  name: 'TodoField',
  props: {
    name: String,
    value: String,
    placeholder: String,
    onInput: Function,
  },
};
</script>
