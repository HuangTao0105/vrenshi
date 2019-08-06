import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/components/denglu/denglu'
import xiaoxi from '@/components/xiaoxi/xiaoxi'
import index from '@/components/index/index'
import jbzl from '@/components/jibenziliao/jbzl'
import gzztgl from '@/components/gzztgl/gzztgl'
import ygztsz from '@/components/ygztsz/ygztsz'
import gzbgl from '@/components/gzbgl/gzbgl'
import jcxxsz from '@/components/jcxxsz/jcxxsz'
import czygl from '@/components/czygl/czygl'
import cebianlan from '@/components/cebianlan/chebianlan'



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
		},
		{
		  path: '/jbzl',
		  name: 'jbzl',
		  component: jbzl
		},
		{
		  path: '/gzztgl',
		  name: 'gzztgl',
		  component: gzztgl
		},
		{
		  path: '/ygztsz',
		  name: 'ygztsz',
		  component: ygztsz
		},
		{
		  path: '/gzbgl',
		  name: 'gzbgl',
		  component: gzbgl
		},
		{
		  path: '/jcxxsz',
		  name: 'jcxxsz',
		  component: jcxxsz
		},
		{
		  path: '/czygl',
		  name: 'czygl',
		  component: czygl
		},
		{
		  path: '/cebianlan',
		  name: 'cebianlan',
		  component: cebianlan
		}
  ]
})
