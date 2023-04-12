import { createRouter, createWebHistory } from 'vue-router'
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
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
       {
        path:"/",
        name:"backindex",
        component:BackIndex,
        redirect:"/home",
        meta: {
          auth: true
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
        },{
          path: 'home/manager',
          name: 'homeManager',
          component: HomeManager,
          meta: {
            breadcrumbs: ['用户管理']
          }
        },{
          path: 'home/order',
          name: 'homeOrder',
          component: HomeOrder,
          meta: {
            breadcrumbs: ['订单列表']
          }
        },{
          path: 'home/user',
          name: 'homeuser',
          component: HomeUser,
          meta: {
            breadcrumbs: ['用户信息']
          }
        },{
          path: 'home/vip',
          name: 'homeVip',
          component: HomeVip,
          meta: {
            breadcrumbs: ['vip信息']
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
       }
  ]
})

// router.beforeEach((to, from, next)=>{

//   if( to.meta.auth ) {  // 需要权限校验的
//     // 校验token是否合法，通过请求头携带
//     info().then((res)=>{
//       if(res.data.errcode === 0) {
//         const userTokenStore = useUserTokenStore()
//         userTokenStore.udpateUsername(res.data.username)
//         next()
//       }
//       else {
//         next('/login')
//       }
//     })
//   }
//   else {   // 不需要权限，直接进入
//     next()
//   }

// })
export default router
