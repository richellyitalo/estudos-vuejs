import Vue from 'vue'
import Router from 'vue-router'
import localforage from 'localforage'

import dashboard from '@app/dashboard/routes'
import categories from '@app/categories/routes'
import auth from '@app/auth/routes'
import users from '@app/users/routes'

Vue.use(Router)

const routes = [
  ...dashboard,
  ...categories,
  ...auth,
  ...users
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = await localforage.getItem('token')

  if (to.name !== 'auth.index' && token == null) {
    next({ name: 'auth.index' })
    return
  }
  next()
})

export default router
