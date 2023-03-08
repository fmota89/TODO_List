<template>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>
      My To Do List
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/" class="v-btn v-btn--icon">
      <v-icon>mdi-home</v-icon>
    </router-link>
    <router-link to="/task-list" class="v-btn v-btn--icon">
      <v-icon>mdi-format-list-bulleted</v-icon>
    </router-link>
    <router-link to="/add-task" class="v-btn v-btn--icon">
      <v-icon>mdi-plus</v-icon>
    </router-link>
    <v-spacer></v-spacer>
    <v-text-field
      label="Search"
      append-icon="mdi-magnify"
      single-line
      hide-details
    ></v-text-field>
  </v-toolbar>
</template>
