<template>
	<div>
		<index-daohang></index-daohang>
		<index-swiper></index-swiper>
		<div>
			<p class="a1">
				<string><a href="#">首页</a></string><i class="el-icon-arrow-right">消息</i>
			</p>
		</div>
		<div class="biaoqian">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="系统通知" name="second">
					<el-button type="success" plain class="but1">
						<i class="el-icon-circle-check">&nbsp;全部标记为已读</i>
					</el-button>
					<el-button type="primary" plain class="but1">
						<i class="el-icon-s-promotion">&nbsp;发送系统通知</i>
					</el-button>
					<br />
					<br />
					<br />
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="111111" name="1">
							<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						</el-collapse-item>
						<el-collapse-item title="通知标题1" name="2">
							<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						</el-collapse-item>
						<el-collapse-item title="通知标题2" name="3">
							<div>简化流程：设计简洁直观的操作流程；</div>
						</el-collapse-item>
						<el-collapse-item title="通知标题3" name="4">
							<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						</el-collapse-item>
					</el-collapse>
				</el-tab-pane>
				<el-tab-pane label="好友聊天" name="first">
					<div class="beijing">
						<img class="img1" src="../../assets/1.jpg" />
					</div>
					<div class="beijing">
						<img class="img1" src="../../assets/2.jpg" />
					</div>
					<div class="beijing">
						<img class="img1" src="../../assets/3.jpg" />
					</div>
					<div class="beijing">
						<img class="img1" src="../../assets/1.jpg" />
					</div>
				</el-tab-pane>
			</el-tabs>
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
				activeName: 'second',
				activeNames: ['1'],
				issd:require("../../assets/1.jpg")
			};
		},

		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleChange(val) {
				console.log(val);
			}
		}
	};
</script>

<style>
	.biaoqian {
		width: 85%;
		left: 225px;
		position: absolute;
	}

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

	.but1 {
		float: left;
	}

	.span {
		top: 90px;
		position: absolute;
	}

	.beijing {
		width: 100px;
		height: 30px;
		border: #1E90FF solid 1px;
		background-color: white;

	}
	.img1{
		width:20px ;
		height: 20px;
	}
</style>
