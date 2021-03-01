import Vue from 'vue'
import Router from 'vue-router'
import Thanks from '@/components/contact/thanks'
import Form from '@/components/contact/form'
import Preview from '@/components/contact/preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
})
