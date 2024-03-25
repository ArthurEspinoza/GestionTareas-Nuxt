<template>
    <div class="container">
        <v-card class="pa-4">
            <v-card-item>
                <div class="task">
                    <div class="task__info">
                        <v-card-title class="pa-0">{{ title }}</v-card-title>
                        <v-card-subtitle v-if="due_date" class="pa-0">{{ due_date }}</v-card-subtitle>
                    </div>
                    <div class="task__buttons">
                        <v-btn rounded="xl" color="light-blue">Detalle</v-btn>
                        <v-btn rounded="xl" color="red">Borrar</v-btn>
                    </div>
                </div>
            </v-card-item>
        </v-card>
    </div>
</template>
<script>
export default {
    name: "TaskItem",
    props: ["title", "due_date", "is_completed", "id"]
}
</script>