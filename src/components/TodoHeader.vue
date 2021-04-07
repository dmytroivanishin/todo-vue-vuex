<template>
  <div
    class="todo-header d-flex align-items-center justify-content-between mb-3"
  >
    <img
      alt="Vue logo"
      class="todo-header__logo mr-2"
      src="../assets/logo.png"
    />
    <h1 class="todo-header__title">{{ title }}</h1>
    <div class="todo-header__info align-self-end ml-auto">
      <span>{{ countActiveTask }}</span> more to do,
      <span>{{ countDoneTask }}</span> done
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  props: {
    title: String,
  },
  computed: {
    lengthTaskDone() {
      return this.$store.state.list.filter((item) => item.done).length;
    },
    countActiveTask() {
      return this.$store.state.list.length - this.lengthTaskDone;
    },
    countDoneTask() {
      return this.lengthTaskDone;
    },
  },
};
</script>

<style scoped lang="scss">
.todo-header {
  &__logo {
    width: auto;
    height: 40px;
  }
  &__info {
    color: #808080;
  }
  span {
    font-weight: bold;
  }
}
</style>
