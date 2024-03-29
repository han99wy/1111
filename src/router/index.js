import { createRouter, createWebHistory } from 'vue-router'
import { useUserTokenStore } from '../stores/userToken'
import  {loginUser} from "../api/user"
import BackIndex from "@/views/BackIndex.vue"
import Home from "@/views/Home.vue"
import HomeCoach from "@/views/HomeCoach.vue"
import HomeEquipment from "@/views/HomeEquipment.vue"
import HomeLesson from "@/views/HomeLesson.vue"
import HomeManager from "@/views/HomeManager.vue"
import HomeOrder from "@/views/HomeOrder.vue"
import HomeUser from "@/views/HomeUser.vue"
import HomeVip from "@/views/HomeVip.vue"
import Logon from "@/views/Logon.vue"
import Login from "@/views/Login.vue"
import Index from "@/views/Index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "backindex",
      component: BackIndex,
      redirect: "/home",
      meta: {
        auth: true,
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            breadcrumbs: ['首页']
          }
        },
        {
          path: 'home/coach',
          name: 'homeCoach',
          component: HomeCoach,
          meta: {
            breadcrumbs: ['教练信息']
          }
        },
        {
          path: 'home/equipment',
          name: 'homeEquipment',
          component: HomeEquipment,
          meta: {
            breadcrumbs: ['器材列表']
          }
        },
        {
          path: 'home/lesson',
          name: 'homeLesson',
          component: HomeLesson,
          meta: {
            breadcrumbs: ['课程列表']
          }
        }, {
          path: 'home/order',
          name: 'homeOrder',
          component: HomeOrder,
          meta: {
            breadcrumbs: ['订单列表']
          }
        }
      ]
    },
    {
      path: '/logon',
      name: 'logon',
      component: Logon,
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        auth: false
      }
    }, {
      path: '/homemanager',
      name: 'homeManager',
      component: HomeManager,
      meta: {
        breadcrumbs: ['用户管理']
      }
    }, {
      path: '/homeuser',
      name: 'homeuser',
      component: HomeUser,
      meta: {
        breadcrumbs: ['用户信息']
      }
    }, {
      path: '/homevip',
      name: 'homeVip',
      component: HomeVip,
      meta: {
        breadcrumbs: ['vip信息']
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if( to.meta.auth ) {  // 需要权限校验的
    // 校验token是否合法，通过请求头携带
    loginUser().then((res)=>{
      if(res.data.errcode === 0) {
        const userTokenStore = useUserTokenStore()
        userTokenStore.udpateUname(res.data.uname)
        next()
      }
      else {
        next('/login')
      }
    })
  }
  else {   // 不需要权限，直接进入
    next()
  }
})
export default router
