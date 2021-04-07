<template>
  <button class="btn" v-on:click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TodoField',
  props: {
    disabled: Boolean,
    onClick: Function,
  },
};
</script>
