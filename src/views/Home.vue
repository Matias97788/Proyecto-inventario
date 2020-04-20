<template>
  <v-app>
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
                    <h2> Bienvenidoa:</h2>
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

    <v-card class="ml-4 mr-4 mt-5">
      <v-tabs v-model="tabs" fixed-tabs background-color="indigo" dark centered>
        <v-tab>
          USUARIOS
        </v-tab>
        <v-tab>
          INGRESOS
        </v-tab>
        <v-tab>
          MANTENCIÓN EQUIPO
        </v-tab>
        <v-tab>
          BAJAS EQUIPO
        </v-tab>
        <v-tab>
          CONSULTAS
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-container :elevation="4">
              <v-card-title class="headline">REGISTRO DE USUARIOS</v-card-title>
              <hr />
              <div class="ml-9 mr-9">
                <form @submit.prevent="registrarUsuario">
                  <v-text-field
                    label="RUT"
                    v-model="usuarios.rut"
                  ></v-text-field>
                  <v-text-field
                    label="NOMBRE"
                    v-model="usuarios.name"
                  ></v-text-field>
                  <v-text-field
                    label="APELLIDO MATERNO"
                    v-model="usuarios.apellidoM"
                  ></v-text-field>
                  <v-text-field
                    label="APELLIDO PATERNO"
                    v-model="usuarios.apellidoP"
                  ></v-text-field>
                  <v-text-field
                    label="INGRESE UN CORREO"
                    v-model="usuarios.email"
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    label="CONTRASEÑA"
                    v-model="usuarios.password"
                  ></v-text-field>
                  <div class="text-center">
                    <v-btn
                      tile
                      color="indigo"
                      type="submit"
                      width="500"
                      class="mb-5"
                      dark
                      >ENVIAR</v-btn
                    >
                  </div>
                </form>
              </div>
            </v-container>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-card-title class="headline">INGRESO EQUIPO</v-card-title>
              <hr />

              <v-row>
                <v-col md="4">
                  <v-select
                    label="SELECIONE UN PRODUCTO"
                    :items="producto"
                    dense
                    v-model="productos.selectproducto"
                  ></v-select>
                  <v-text-field
                    :counter="10"
                    label="CODIGO"
                    required
                  ></v-text-field>

                  <v-text-field
                    :counter="10"
                    label="MARCA"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="UBICACIÓN"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="MODELO"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="PLACA MADRE"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="RAM"
                    required
                  ></v-text-field>
                </v-col>
                <v-col md="4">
                  <v-text-field
                    :counter="10"
                    label="CPU"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="DISCO DURO"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="GRABADOR"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="MONITOR"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="MOUSE"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="TECLADO"
                    required
                  ></v-text-field>
                </v-col>
                <v-col md="4">
                  <v-card :height="420" :width="600" :elevation="4">
                    <v-container>
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                        height="300"
                      ></v-img>
                      <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        label="Ingrese una imagen"
                        class="mt-4"
                      ></v-file-input>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
              <div class="text-center mt-5">
                <v-btn tile color="indigo" width="500" class="mb-5" dark
                  >ENVIAR</v-btn
                >
              </div>
            </v-container>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div class="ml-5 mr-5 mt">
              <v-card-title class="headline">INGRESO MANTENCIÓN</v-card-title>
              <hr />

              <v-row>
                <v-col md="4" class="mt-8">
                  <v-text-field
                    :counter="10"
                    label="CODIGO EQUIPO"
                    required
                  ></v-text-field>
                  <v-textarea
                    solo
                    rows="3"
                    label="PROBLEMAS DETECTADOS"
                  ></v-textarea>
                  <v-textarea
                    class="mt-7"
                    solo
                    rows="3"
                    label="LABORES REALIZADAS"
                  ></v-textarea>

                  <!-- <v-text-field
                    :counter="10"
                    label="MARCA"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="UBICACIÓN"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="MODELO"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="PLACA MADRE"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="RAM"
                    required
                  ></v-text-field> -->
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Selecione una fecha"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(date)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <!-- <v-col md="4"> -->
                <!-- <v-text-field
                    :counter="10"
                    label="CPU"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="DISCO DURO"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="GRABADOR"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="MONITOR"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="MOUSE"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="TECLADO"
                    required
                  ></v-text-field> -->

                <!-- </v-col> -->
                <v-col md="3">
                  <v-card
                    :height="300"
                    :width="600"
                    :elevation="4"
                    class="mt-12"
                  >
                    <v-container class="mt-12">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                        height="280"
                        width="300"
                      ></v-img>
                      <div class="text-center mt-8">
                        <v-btn tile color="indigo" width="300" class="mb-5" dark
                          >ENVIAR</v-btn
                        >
                      </div>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col md="5">
                  <v-container>
                    <div>
                      <v-row justify="center" align="center">
                        <v-autocomplete></v-autocomplete>
                      </v-row>
                      <v-container
                        id="scroll-target"
                        style="max-height: 400px"
                        class="overflow-y-auto"
                      >
                        <v-timeline dense>
                          <v-timeline-item>
                            <span slot="opposite">Tus eu perfecto</span>
                            <v-card class="elevation-2">
                              <v-card-title class="headline"
                                >MANTENCIÓN 1</v-card-title
                              >
                              <v-card-text>
                                Lorem ipsum dolor sit amet, no nam oblique
                                veritus. Commune scaevola imperdiet nec ut, sed
                                euismod convenire principes at. Est et nobis
                                iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                        <v-timeline dense>
                          <v-timeline-item>
                            <span slot="opposite">Tus eu perfecto</span>
                            <v-card class="elevation-2">
                              <v-card-title class="headline"
                                >MANTENCIÓN 2</v-card-title
                              >
                              <v-card-text>
                                Lorem ipsum dolor sit amet, no nam oblique
                                veritus. Commune scaevola imperdiet nec ut, sed
                                euismod convenire principes at. Est et nobis
                                iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                        <v-timeline dense>
                          <v-timeline-item>
                            <span slot="opposite">MANTENCIÓN 3</span>
                            <v-card class="elevation-2">
                              <v-card-title class="headline"
                                >Lorem ipsum</v-card-title
                              >
                              <v-card-text>
                                Lorem ipsum dolor sit amet, no nam oblique
                                veritus. Commune scaevola imperdiet nec ut, sed
                                euismod convenire principes at. Est et nobis
                                iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>

                        <v-timeline dense>
                          <v-timeline-item>
                            <span slot="opposite">Tus eu perfecto</span>
                            <v-card class="elevation-2">
                              <v-card-title class="headline"
                                >MANTENCIÓN 4</v-card-title
                              >
                              <v-card-text>
                                Lorem ipsum dolor sit amet, no nam oblique
                                veritus. Commune scaevola imperdiet nec ut, sed
                                euismod convenire principes at. Est et nobis
                                iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                        <v-timeline dense>
                          <v-timeline-item>
                            <span slot="opposite">Tus eu perfecto</span>
                            <v-card class="elevation-2">
                              <v-card-title class="headline"
                                >MANTENCIÓN 5</v-card-title
                              >
                              <v-card-text>
                                Lorem ipsum dolor sit amet, no nam oblique
                                veritus. Commune scaevola imperdiet nec ut, sed
                                euismod convenire principes at. Est et nobis
                                iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                        <v-timeline dense>
                          <v-timeline-item>
                            <span slot="opposite">Tus eu perfecto</span>
                            <v-card class="elevation-2">
                              <v-card-title class="headline"
                                >MANTENCIÓN 6</v-card-title
                              >
                              <v-card-text>
                                Lorem ipsum dolor sit amet, no nam oblique
                                veritus. Commune scaevola imperdiet nec ut, sed
                                euismod convenire principes at. Est et nobis
                                iisque percipit, an vim zril disputando
                                voluptatibus, vix an salutandi sententiae.
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                      </v-container>
                    </div>
                  </v-container>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div class="ml-5 mr-5">
              <v-card-title class="headline">BAJAS EQUIPO</v-card-title>
              <hr />
            </div>
            <v-row class="ml-5 mr-5">
              <v-col>
                <v-text-field
                  :counter="10"
                  label="ID EQUIPO"
                  required
                ></v-text-field>
                <v-text-field
                  :counter="10"
                  label="MARCA"
                  required
                ></v-text-field>
                <v-text-field
                  :counter="10"
                  label="MODELO"
                  required
                ></v-text-field>
                <v-textarea
                  solo
                  name="input-7-4"
                  label="OBSERVACIONES"
                ></v-textarea>
              </v-col>
              <v-col>
                <v-container>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                    height="300"
                  ></v-img>
                  <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-icon="mdi-camera"
                    label="Ingrese una imagen"
                    class="mt-4"
                  ></v-file-input> </v-container
              ></v-col>
            </v-row>
            <div class="text-center">
              <v-btn tile color="indigo" width="500" class="mb-5" dark
                >ENVIAR</v-btn
              >
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-container>
              <v-card-title class="headline">CONSULTAS</v-card-title>
              <hr />
              <v-card class="mt-5">
                <v-card-title>
                  PRODUCTOS <v-spacer></v-spacer>
                  <v-row>
                    <v-col md="6">
                      <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date"
                            label="Selecione una fecha"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="modal = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                            >OK</v-btn
                          >
                        </v-date-picker>
                      </v-dialog></v-col
                    >
                    <v-col md="6"
                      ><v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field
                    ></v-col>
                  </v-row>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                  class="mb-8"
                ></v-data-table>
              </v-card>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-footer padless class="mt-8">
      <v-col class="text-center mt-8" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
import firebase from "firebase";
import config from "../config";

// eslint-disable-next-line no-unused-vars
// import router from '../router'



//  eslint-disable-next-line no-unused-vars
// import router from 'vue-router';
let app = firebase.initializeApp(config);
let db = app.database();
let websitesRef = db.ref("usuarios");
let productosRef = db.ref("productos");


export default {
  components:{
  
  },
  
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
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],
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
      usuarios: {
        rut: "",
        name: "",
        email: "",
        password: "",
        apellidoM: "",
        apellidoP: ""
      },
      productos: {
        selectproducto: "",
        name: "",
        email: "",
        password: "",
        apellidoM: "",
        apellidoP: ""
      },
      text: "",
  //     // cargarUsuarios:{},
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
        // [key].rut
      this.usuarios.push({
        name:usuarios[key].name,
        apellidoM:usuarios[key].apellidoM,
        apellidoP:usuarios[key].apellidoP
      })
      //validar  con rut 
        //  console.log(user[key].name)
        //  console.log(user[key].email)
      }
    },
    registrarUsuario() {
      // eslint-disable-next-line no-empty
      if (this.usuarios.name && this.usuarios.email && this.usuarios.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.usuarios.email,
            this.usuarios.password
          )
          .then(

            websitesRef.push(this.usuarios)
            )
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("faltan campos por completar");
      }
    },
    registrarProductos() {
      if (this.productos.selectproducto) {
        productosRef.push(this.productos);
        // eslint-disable-next-line no-empty
      } else {
        console.log("faltan campos por completar");
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        // eslint-disable-next-line no-unused-vars
        .then( user => this.$router.replace("login")

          //   function() {
          //     this.router.replace("login");
          //   // Sign-out successful.
          //   // return 
          //   // eslint-disable-next-line no-unused-vars
          // }
        );
    }
  }
};
</script>
