import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase'
Vue.use(Router)


const router = new Router({

  routes :[
    {
      path:'*',
      redirect:'Login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        autentificado:true
      }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path:'/',
      name:'/Login',
      component:Login,
    }
   
  ]
  
})





router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some(record => record.meta.autentificado);
  if(autorizacion && !usuario){
    next('login')
  }else if (!autorizacion && usuario){
    next('home')
  }else{
    next();
  }
})

export default router
