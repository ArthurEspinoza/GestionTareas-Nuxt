<template>
  <v-container>
    <h1 class="text-center">Gestion Tareas</h1>
    <div class="task__container">
        <TaskItem
        v-for="(tarea) in tareas"
        :key="tarea.id"
        :title="tarea.title"
        :due_date="tarea.due_date"
        :is_completed="tarea.is_completed"
      />
    </div>
  </v-container>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import {mapState} from "vuex";
export default {
  name: 'IndexPage',
  components: {
    TaskItem
  },
  computed: {
    ...mapState(["tareas"])
  }

}
</script>
