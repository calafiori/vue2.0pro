import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Newslist from '@/components/Newslist'
import Newsitemcontent from '@/components/Newsitemcontent'
import Cardlist from '../components/Cardlist'
import Playvideo from '../components/Playvideo'
import Userregister from '@/components/Userregister'
import Userinfo from '../components/Userinfo'
import Address from '@/components/Address'
import Usercomment from '../components/Usercomment'
import Useractive from '@/components/Useractive.vue'
import Demo1 from '../components/examples/Demo1.vue'
export default new Router({
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/usercomment',
      name: 'usercomment',
      component: Usercomment
    } ,
    {
      path: '/useractive',
      name: 'useractive',
      component: Useractive
    } ,
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    } ,
    {
      path: '/newsitemcontent',
      name: 'newsitemcontent',
      component: Newsitemcontent
    } ,
    {
      path: '/address',
      name: 'address',
      component: Address
    } ,
    {
      path: '/',
      name: 'newslist',
      component: Newslist
    } ,
    {
      path: '/cardlist',
      name: 'cardlist',
      component: Cardlist
    } ,
    {
      path: '/playvideo',
      name: 'playvideo',
      component: Playvideo
    }
    ,
    {
      path: '/userregister',
      name: 'userregister',
      component: Userregister
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
    }
  ]
})
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to){
  return VueRouterPush.call(this,to).catch(err => err)
}
Vue.use(Router)