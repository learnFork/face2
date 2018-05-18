import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './routes'
// import { ssoLogin, hasTokenRedirect, replaceTokenByUrl } from '../util/auth'

Vue.use(VueRouter)

// Progress.configure({ showSpinner: false })

const router = new VueRouter({
  mode: 'history',
  routes: constantRoutes,
})

// /**
//  * 判断是否是静态路由
//  * @param path route.to.path
//  */
// function isConstantRoute(path) {
//   return constantRoutes.find(item => item.path === path) !== undefined
// }

// /**
//  * 创建所有路由
//  * @param action store.actions
//  */
// function createRoutes(action) {
//   return new Promise(resolve => {
//     // 添加 auth role
//     action.then(() => {
//       const routes = store.getters['auth/routes']
//       router.addRoutes(routes)

//       resolve()
//     })
//   })
// }

// /**
//  * 路由守卫
//  * @param to router -> beforeEach to
//  * @param next router -> beforeEach next
//  */
// function beforeRole(to, next) {
//   const role = store.getters['auth/role']

//   // 如果没有 role 就绪，进行 role 获取
//   if (!role) {
//     const action = store.dispatch('auth/getRoles')

//     // 如果在静态路由中 则直接进入
//     if (isConstantRoute(to.path)) {
//       // 添加到所有路由
//       createRoutes(action)
//       // 进入路由
//       next()
//     } else {
//       const hackto: any = { ...to, replace: true }

//       createRoutes(action).then(() => next(hackto))
//     }
//   } else {
//     next()
//   }
// }

// const whiteList = ['/login']

// router.beforeEach((to, from, next) => {
//   const token = store.getters['auth/token']

//   // process start
//   Progress.start()

//   if (token) {
//     if (to.path === '/login') {
//       next({ path: '/' })

//       // process done
//       Progress.done()
//     } else {
//       beforeRole(to, next)
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       // to login
//       next('/login')

//       // process done
//       Progress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   Progress.done()
// })

export default router
