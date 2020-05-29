import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Play from '@/pages/play.vue'
import Recommend from "@/pages/recommend"
import Hot from '@/pages/hot'
import Search  from '@/pages/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/",
          redirect: "recommend"
        },
        {
          path: "recommend",
          component: Recommend
        },
        {
          path: "hot",
          component: Hot
        },
        {
          path: "search",
          component: Search
        }
      ]
    },
    {
      path: "/play",
      component: Play
    }
  ]
})
