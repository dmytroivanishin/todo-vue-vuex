<template>
  <div class="todo">
    <TodoHeader title="Todo" />

    <div class="d-flex mb-3">
      <TodoField
        class="mr-2"
        placeholder="Search..."
        name="search"
        :value="valueSearch"
        :onInput="handleInputSearchTask"
      />
      <div class="btn-group">
        <TodoButton
          v-for="button in buttons"
          :key="button.name"
          :class="{
            'btn-success': button.name === activeTab,
            'btn-outline-success': button.name !== activeTab,
          }"
          :onClick="handleChangeActiveTab"
        >
          {{ button.label }}
        </TodoButton>
      </div>
    </div>

    <TodoList>
      <TodoListItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        :onClickDone="handleClickDoneTask"
        :onClickDelete="handleClickDeleteTask"
      />
    </TodoList>

    <div class="input-group mt-3">
      <TodoField
        placeholder="Enter a task"
        name="task"
        :value="valueTask"
        :onInput="handleInputAddTask"
      />
      <div class="input-group-append">
        <TodoButton
          class="btn-success"
          :onClick="handleClickAddTask"
          :disabled="isDisabledButton"
        >
          Add a Task
        </TodoButton>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoField from '@/components/TodoField.vue';
import TodoButton from '@/components/TodoButton.vue';
import TodoList from '@/components/TodoList.vue';
import TodoListItem from '@/components/TodoListItem.vue';

export default {
  name: 'Home',
  components: {
    TodoHeader,
    TodoField,
    TodoButton,
    TodoList,
    TodoListItem,
  },
  data() {
    return {
      buttons: [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
      ],
    };
  },
  computed: {
    list() {
      return this.search(
        this.filter(this.$store.state.list, this.$store.state.filter)
      );
    },
    valueTask() {
      return this.$store.state.task;
    },
    valueSearch() {
      return this.$store.state.search;
    },
    activeTab() {
      return this.$store.state.filter;
    },
    isDisabledButton() {
      return this.$store.state.task.length <= 0;
    },
  },
  methods: {
    filter(list, filter) {
      switch (filter) {
        case 'all':
          return list;
        case 'active':
          return list.filter((item) => !item.done);
        case 'done':
          return list.filter((item) => item.done);
      }
    },
    search(list) {
      return list.filter(
        (item) =>
          item.task
            .toLowerCase()
            .indexOf(this.$store.state.search.toLowerCase()) > -1
      );
    },
    handleInputAddTask({ target }) {
      this.$store.dispatch('inputAddTask', target.value);
    },
    handleInputSearchTask({ target }) {
      this.$store.dispatch('inputSearchTask', target.value);
    },
    handleClickAddTask() {
      this.$store.dispatch('addTask', this.$store.state.task);
    },
    handleClickDoneTask(id) {
      this.$store.dispatch('doneTask', id);
    },
    handleClickDeleteTask(id) {
      this.$store.dispatch('deleteTask', id);
    },
    handleChangeActiveTab(el) {
      this.$store.dispatch(
        'changeActiveTab',
        el.target.textContent.toLowerCase()
      );
    },
  },
};
</script>

<style lang="scss">
#app {
  max-width: 400px;
  margin: 0 auto;
  color: #35495e;
}

h1 {
  margin: 0 !important;
}

.todo {
  max-width: 100%;
  margin-top: 100px;
}
</style>
