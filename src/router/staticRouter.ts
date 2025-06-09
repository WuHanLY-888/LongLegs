import type { RouteRecordRaw } from 'vue-router'
// 静态路由表
export const staticRouter: RouteRecordRaw[] = [
	{
		path: '/xiuxiuman',
		component: () => import('@/views/XiuXiuman/index.vue'),
		children: [
			{
				path: 'home',
				component: () => import('@/views/XiuXiuman/Pages/Home.vue')
			}
		]
	},
	{
		path: '/demo',
		component: () => import('@/views/Demo/index.vue'),
	},
	{
		path: '/LiuYanan',
		component: () => import('@/views/LiuYanan/index.vue'),
	},

]
