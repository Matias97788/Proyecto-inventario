<template>
    <div>
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
              <div class="subheading">
                
                <div>
                  <div v-for="w in usuarios" :key="w.key">
                    <h2> Bienvenido:</h2>
                      <h3>{{ w.name}} {{ w.apellidoM}} {{ w.apellidoP}}   </h3>
                  </div>
                  
                </div>
              </div>
              <div class="body-1"></div>
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
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span class="hidden-sm-and-down">SGH</span>
        </v-toolbar-title>
        <v-spacer />

        <div class="d-flex flex-row-reverse">
          <div class="mt-1 mr-3"></div>

          <div class="mt-1 mr-3">
            <v-btn text icon color="white">
              <!-- Cerrar <v-icon>mdi-logout</v-icon> -->
              <a
                href="login"
                @click="logout"
                class="text-white"
                style="text-decoration:none;color:white;"
              >
                Cerrar <v-icon>mdi-logout</v-icon>
              </a>
            </v-btn>
          </div>
        </div>
      </v-app-bar>
    </div>
</template>
<script>
import firebase from "firebase";
import config from "../config";

// // eslint-disable-next-line no-unused-vars
// // import router from '../router'



// // // eslint-disable-next-line no-unused-vars
// // import router from 'vue-router';
let app = firebase.initializeApp(config);
 let db = app.database();
// let websitesRef = db.ref("usuarios");
// let productosRef = db.ref("productos");


export default {
 
  data() {
    return {
      users: {},
      user:[],
      //variable  mantendero usuarios
      rut: "",
      name: "",
      email: "",
      password: "",
      apellidoM: "",
      apellidoP: "",
      search: "",
      producto: [
        {
          text: "PC",
          value: "PC"
        },
        {
          text: "IMPRESORA",
          value: "IMPRESORA"
        }
      ],
      // headers: [
      //   {
      //     text: "Dessert (100g serving)",
      //     align: "start",
      //     sortable: false,
      //     value: "name"
      //   },
      //   { text: "Calories", value: "calories" },
      //   { text: "Fat (g)", value: "fat" },
      //   { text: "Carbs (g)", value: "carbs" },
      //   { text: "Protein (g)", value: "protein" },
      //   { text: "Iron (%)", value: "iron" }
      // ],
      // desserts: [
      //   {
      //     name: "Frozen Yogurt",
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: "1%"
      //   },
      //   {
      //     name: "Ice cream sandwich",
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: "1%"
      //   },
      //   {
      //     name: "Eclair",
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: "7%"
      //   },
      //   {
      //     name: "Cupcake",
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     iron: "8%"
      //   },
      //   {
      //     name: "Gingerbread",
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     iron: "16%"
      //   },
      //   {
      //     name: "Jelly bean",
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: "0%"
      //   },
      //   {
      //     name: "Lollipop",
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: "2%"
      //   },
      //   {
      //     name: "Honeycomb",
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: "45%"
      //   },
      //   {
      //     name: "Donut",
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: "22%"
      //   },
      //   {
      //     name: "KitKat",
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     iron: "6%"
      //   }
      // ],
      drawer: null,
      dialogo: true,

      items: [
        {
          icon: "mdi-newspaper-variant-outline ",
          text: "Perfil",
          href: "/perfil"
        }
      ],
      tabs: "",
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      // usuarios: {
      //   rut: "",
      //   name: "",
      //   email: "",
      //   password: "",
      //   apellidoM: "",
      //   apellidoP: ""
      // },
      // productos: {
      //   selectproducto: "",
      //   name: "",
      //   email: "",
      //   password: "",
      //   apellidoM: "",
      //   apellidoP: ""
      // },
      text: "",
      // cargarUsuarios:{},
    };
  },

  created() {
    db.ref("/usuarios").on("value", snapshot =>
      this.cargarUsuarios(snapshot.val())
    );
  },
  methods: {
    cargarUsuarios(usuarios) {
      this.usuarios = [];
      // this.name ='';
      console.log(usuarios);
      for (let key in usuarios) {
      this.usuarios.push({
        name:usuarios[key].name,
        apellidoM:usuarios[key].apellidoM,
        apellidoP:usuarios[key].apellidoP
      })
        //  console.log(user[key].name)
        //  console.log(user[key].email)
      }
    },
    // registrarUsuario() {
    //   // eslint-disable-next-line no-empty
    //   if (this.usuarios.name && this.usuarios.email && this.usuarios.password) {
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(
    //         this.usuarios.email,
    //         this.usuarios.password
    //       )
    //       .then(websitesRef.push(this.usuarios))
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   } else {
    //     console.log("faltan campos por completar");
    //   }
    // },
    // registrarProductos() {
    //   if (this.productos.selectproducto) {
    //     productosRef.push(this.productos);
    //     // eslint-disable-next-line no-empty
    //   } else {
    //     console.log("faltan campos por completar");
    //   }
    // },
    // logout() {
    //   firebase
    //     .auth()
    //     .signOut()
    //     // eslint-disable-next-line no-unused-vars
    //     .then( user => this.$router.replace("login")

    //       //   function() {
    //       //     this.router.replace("login");
    //       //   // Sign-out successful.
    //       //   // return 
    //       //   // eslint-disable-next-line no-unused-vars
    //       // }
    //     );
    // }
  }
};
</script>
