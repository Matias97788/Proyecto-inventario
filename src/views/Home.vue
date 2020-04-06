<template>
  <v-app>
    <a href="login" @click="logout">Logout</a>
    <v-card class="ml-4 mr-4">
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
                <form>
                  <v-text-field
                    :counter="10"
                    label="RUT"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="NOMBRE"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="APELLIDO MATERNO"
                    required
                  ></v-text-field>
                  <v-text-field
                    :counter="10"
                    label="APELLIDO PATERNO"
                    required
                  ></v-text-field>
                </form>
              </div>
              <div class="text-center mt-3">
                <v-btn tile color="indigo" width="500" class="mb-5" dark
                  >ENVIAR</v-btn
                >
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
            <v-container>
              <v-card-title class="headline">INGRESO MANTENCIÓN</v-card-title>
              <hr />

              <v-row>
                <v-col md="4">
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
                  <v-textarea
                    solo
                    rows="3"
                    label="PROBLEMAS DETECTADOS"
                  ></v-textarea>
                </v-col>
                <v-col md="4">
                  <v-card :height="390" :width="600" :elevation="4">
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
                  <v-textarea
                    class="mt-7"
                    solo
                    rows="3"
                    label="LABORES REALIZADAS"
                  ></v-textarea>
                </v-col>
              </v-row>
              <div class="text-center">
                <v-btn tile color="indigo" width="500" class="mb-5" dark
                  >ENVIAR</v-btn
                >
              </div>
            </v-container>
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
  </v-app>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      search: "",
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
      tabs: "",
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
          return this.$router.replace("login");
          // eslint-disable-next-line no-unused-vars
        })
     
    }
  }
};
</script>
