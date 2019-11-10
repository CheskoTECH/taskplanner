<template>
  <div class="main">
    <div class="main__firstRow common">
      <div class="main__firstRow--tasks">
        <p v-for="(task, index) in tasks" :key="index">
          {{ task.name }}
          {{ task.id }}
        </p>
      </div>
    </div>
    <div class="main__secondRow common">
      <div class="main__secondRow--form">
        <input v-model="taskName" placeholder="Название таска">
        <input v-model="expirationTime" placeholder="Время жизни">
        <input type="number" v-model="taskId" placeholder="ID">
        <p>{{ taskName }}</p>
        <button @click="addTask()">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      taskName: "",
      expirationTime: "",
      taskId: "",
      tasks: [
      ]
    };
  },
  methods: {
    addTask() {
      // console.log(this.tasks.name);
      // console.log(this.taskName);
      // this.tasks.push({
      //   name: this.taskName,
      //   id: this.taskId
      // });
      const taskData = {
        name: this.taskName,
        id: this.taskId,
        expTime: this.expirationTime
      }

      this.$store.dispatch('addNewTask', taskData);
    }
  },
  created() {
    this.tasks = this.$store.getters.getAllTasks;
  }
};
</script>

<style lang="scss" scoped>

.main {
  height: 100%;
  display: grid;
  padding: 3rem;
  grid-template-rows: 45rem 1fr;
  grid-gap: 3rem;
  background-color: #F3F6FB;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;

  &__firstRow {
    // display: grid;
    // grid-template-columns: 1fr;

    // grid-gap: 3rem;
    background-color: #fff;

  }

  &__secondRow {
    background-color: #fff;
    // display: flex;
    // padding-left: 5rem;
    // padding-top: 4rem;

  }
}

.common {
  border-radius: 25px;
  box-shadow: 3px 3px 20px rgba($color: #000000, $alpha: .08);
}
</style>