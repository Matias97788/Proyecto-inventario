<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      absolute
      temporary
      app
      height="100%"
    >
      <v-img
        :aspect-ratio="16 / 9"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div  class="subheading">
              Bienvenido - EfeVeterinaria
            </div>
            <div  class="body-1"></div>
          </v-col>
        </v-row>
      </v-img>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="item.text"
            :to="item.href"
            style="text-decoration:none"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
       
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">EfeVeterinaria</span>
      </v-toolbar-title>
      <v-spacer />

      <div class="d-flex flex-row-reverse">
        <div class="mt-1 mr-3" >
          <!-- Modal -->
          <!-- <modal-login></modal-login> -->
        </div>

        <div class="mt-1 mr-3">
          <v-btn text icon color="white">
            Cerrar <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-content style="padding: 0px !important;">
      <div
        style="padding-top: 70px !important; padding-bottom: 30px !important;"
      >
        <router-view></router-view>
      </div>
    </v-content>
    <v-footer absolute class="font-weight-medium mt-12">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Desarrollado por: Efebyte</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
// import ModalLogin from "@/components/ModalLogin";
// import { mapActions, mapState, mapGetters } from "vuex";

export default {
//   components: {
//     ModalLogin
//   },
//   methods: {
//     ...mapActions(["cerrarSesion"])
//   },
//   computed: {
//     ...mapGetters(["existeUsuario"]),
//     ...mapState(["usuario"])
//   },
  data: () => ({
    
    email: null,
    drawer: null,
    dialogo: true,
    items: [
      {
        icon: "mdi-newspaper-variant-outline ",
        text: "Inicio",
        href: "/"
      }
    ]
  })
};
</script>
