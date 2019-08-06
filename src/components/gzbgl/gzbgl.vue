<template>
	<div>
		<index-daohang></index-daohang>
		<index-swiper></index-swiper>
		<div>
			<p class="a1">
				<string><a href="#">首页</a></string><i class="el-icon-arrow-right">工资表管理</i>
			</p>
		</div>
		<div>
			<el-button class="button1" type="primary" plain>请选择部门</el-button>
		</div>
		<div class="cascader">
			<el-cascader :options="options" :show-all-levels="false">	
			</el-cascader>
		</div>
	</div>
</template>

<script>
	import IndexSwiper from '../cebianlan/chebianlan.vue'
	import IndexDaohang from '../index/index.vue'
	export default {
		components: {
			IndexSwiper,
			IndexDaohang
		},
		data() {
			return {
				input2: '',
		options: [{
          value: 'zhinan',
          label: '股东会'
        },
		{
          value: 'zujian',
          label: '董事会'
        },
		{
		  value: 'zujian',
		  label: '总会'
		},
		{
          value: 'ziyuan',
          label: '总会'
        }]
			}
		}
	}
</script>

<style>
	a {
		color: #000000;
		text-decoration: none
	}

	.a1 {
		font-size: 16px;
		top: 60px;
		left: 226px;
		position: absolute;
	}
	.button1{
		top: 120px;
		left: 226px;
		position: absolute;
	}
	.cascader{
		top: 120px;
		left: 360px;
		position: absolute;
	}
</style>
