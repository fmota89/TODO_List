<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1 class="text-center">Add new Task</h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="addTask">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="title"
                    label="Title"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="description"
                    label="Description"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="priority"
                    :items="['low', 'medium', 'high']"
                    label="Priority"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    offset-y
                    transition="scale-transition"
                    min-width="290px"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="6">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    offset-y
                    transition="scale-transition"
                    min-width="290px"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="milestone"
                        label="Milestone"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="milestone"
                      no-title
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="status"
                    :items="['active', 'pending', 'done']"
                    label="Status"
                  ></v-select>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn type="submit" color="primary">Add Task</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { useTaskStore } from "../stores/TaskStore";

export default {
  name: "TaskForm",
  data() {
    return {
      title: "",
      description: "",
      completed: false,
      priority: "",
      date: "",
      milestone: "",
      status: "",
    };
  },
  methods: {
    addTask() {
      const task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        completed: this.completed,
        priority: this.priority,
        date: this.date,
        milestone: this.milestone,
      };
      useTaskStore().addTask(task);
      this.resetForm();
    },
    resetForm() {
      this.title = "";
      this.description = "",
      this.completed = false;
      this.priority = "";
      this.date = "";
      this.milestone = "";
      this.status = "";
    },
  },
};
</script>