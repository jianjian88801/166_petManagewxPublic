	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import forum from '@/views/forum/list'
	import jiuzhuzhan from '@/views/jiuzhuzhan/list'
	import yonghu from '@/views/yonghu/list'
	import discusschongwukepu from '@/views/discusschongwukepu/list'
	import chongwukepu from '@/views/chongwukepu/list'
	import shenqingruzhu from '@/views/shenqingruzhu/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'
	import chongwufenlei from '@/views/chongwufenlei/list'
	import jiuzhuzhanCenter from '@/views/jiuzhuzhan/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/jiuzhuzhanCenter',
			name: '救助站个人中心',
			component: jiuzhuzhanCenter
		}
		,{
			path: '/forum',
			name: '我的发布',
			component: forum
		}
		,{
			path: '/jiuzhuzhan',
			name: '救助站',
			component: jiuzhuzhan
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/discusschongwukepu',
			name: '宠物科普评论',
			component: discusschongwukepu
		}
		,{
			path: '/chongwukepu',
			name: '宠物科普',
			component: chongwukepu
		}
		,{
			path: '/shenqingruzhu',
			name: '申请入驻',
			component: shenqingruzhu
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		,{
			path: '/chongwufenlei',
			name: '宠物分类',
			component: chongwufenlei
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
