import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b9dded7c = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _1394d044 = () => interopDefault(import('../pages/countries.vue' /* webpackChunkName: "pages/countries" */))
const _6b42d9a6 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _147a1f18 = () => interopDefault(import('../pages/images.vue' /* webpackChunkName: "pages/images" */))
const _7ae16d4a = () => interopDefault(import('../pages/images2.vue' /* webpackChunkName: "pages/images2" */))
const _6d7760de = () => interopDefault(import('../pages/mixin.vue' /* webpackChunkName: "pages/mixin" */))
const _57555b62 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _b9dded7c,
    name: "blog"
  }, {
    path: "/countries",
    component: _1394d044,
    name: "countries"
  }, {
    path: "/faq",
    component: _6b42d9a6,
    name: "faq"
  }, {
    path: "/images",
    component: _147a1f18,
    name: "images"
  }, {
    path: "/images2",
    component: _7ae16d4a,
    name: "images2"
  }, {
    path: "/mixin",
    component: _6d7760de,
    name: "mixin"
  }, {
    path: "/",
    component: _57555b62,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
