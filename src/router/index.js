import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/components/denglu/denglu'
import xiaoxi from '@/components/xiaoxi/xiaoxi'
import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
		{
      path: '/',
      name: 'denglu',
      component: denglu
    },
		{
		  path: '/xiaoxi',
		  name: 'xiaoxi',
		  component: xiaoxi
		},
		{
		  path: '/index',
		  name: 'index',
		  component: index
		}
  ]
})
