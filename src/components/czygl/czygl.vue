<template>
	<div>
		<index-daohang></index-daohang>
		<index-swiper></index-swiper>
		<div>
			<p class="a1">
				<string><a href="#">首页</a></string><i class="el-icon-arrow-right">操作员管理</i>
			</p>
			<el-input style="width: 20%;" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
			</el-input>
			<el-button type="primary" size="small">搜索</el-button>
			
		</div>
		<div>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>卡片名称</span>
					<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
					{{'列表内容 ' + o }}
				</div>
			</el-card>
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
	.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
	  top: 170px;
	  left: 226px;
	  position: absolute;
    width: 400px;
  }
</style>
