import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { PlusProComponentsResolver } from '@plus-pro-components/resolver'
// 浏览器css兼容前缀插件
import autoprefixer from 'autoprefixer'
// 兼容低版本浏览器插件
// import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
	// 插件配置
	plugins: [
		Vue(),
		VueJsx(),
		AutoImport({
			imports: ['vue'],
			dts: 'src/types/AutoImport.d.ts',
			eslintrc: {
				enabled: true,
			},
			vueTemplate: true,
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver(), PlusProComponentsResolver()],
			dts: 'src/types/Components.d.ts',
		}),
	],
	// 别名配置
	resolve: {
		alias: [
			{
				// 别名 @ => ../src
				find: '@',
				replacement: resolve(__dirname, '../src'),
			},
		],
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	// 在windows定义对象
	define: { 'process.env': {} },
	// 样式附加/样式兼容
	css: {
		preprocessorOptions: {
			// 可以添加scss全局样式
			scss: {
				// additionalData: '@import "@/style.css";'
			},
		},
		postcss: {
			plugins: [
				// 自动添加css样式兼容前缀
				autoprefixer({
					overrideBrowserslist: ['iOS 7.1', 'last 2 versions'],
				}),
			],
		},
	},
})
