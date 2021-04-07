<template>
  <li
    class="list-group-item list-group-item-action todo-list__item d-flex"
    :style="{ 'text-decoration': item.done ? 'line-through' : 'none' }"
    v-on:click="() => onClickDone(item.id)"
  >
    {{ item.task }}
    <button
      class="btn btn-outline-success btn-sm ml-auto"
      v-on:click.stop.prevent="() => onClickDelete(item.id)"
    >
      <i class="bi bi-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    item: Object,
    onClickDone: Function,
    onClickDelete: Function,
  },
};
</script>

<style>
.todo-list__item {
  cursor: pointer;
}
</style>
