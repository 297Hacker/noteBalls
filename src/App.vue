<script>
export default {
  name: 'App',

  data: () => ({
    menuItems : [
      {title: "Notes", link:"/"},
      {title: "Stats", link:"/stats"}
    ]
  }),
}
</script>

<template>
  <v-app>
    <v-main fluid>
        <v-toolbar tabs flat fixed color="indigo-darken-4">
            <v-tabs>
              <v-tab right v-for="item in menuItems" :key="item.title" :to="item.link">{{item.title}}</v-tab>
            </v-tabs>
        </v-toolbar>
       <RouterView />
    </v-main>
  </v-app>
</template>

<style>
.menu {
  cursor: pointer;
  float: right;
}

.v-tab__slider {
   background: #42A5F5!important;
}

</style>
