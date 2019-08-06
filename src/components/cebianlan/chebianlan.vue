<template>
	<div>
		<el-container>
			<el-aside width="200px" style="background-color: rgb(238, 241, 246);">
				<el-menu style="background-color: #ececec; height: 100%; position: absolute; width: 200px;" :unique-opened="true">
						<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>员工资料</template>
						<el-menu-item-group>
								<router-link to="/ygztsz" tag="li">
						  <el-menu-item index="1-1">基本资料</el-menu-item>
								</router-link>
						</el-menu-item-group>
				    </el-submenu>
				    <el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>人事管理</template>
						<el-menu-item-group>
						  <el-menu-item index="2-1">员工奖惩</el-menu-item>
						  <el-menu-item index="2-2">员工培训</el-menu-item>
						</el-menu-item-group>
						  <el-menu-item index="2-3">员工调薪</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
						  <template slot="title">员工调动</template>
						</el-submenu>
				    </el-submenu>
				    <el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>薪资管理</template>
						<el-menu-item-group>
						  <el-menu-item index="3-1">工资账套管理</el-menu-item>
						  <el-menu-item index="3-2">员工账套管理</el-menu-item>
						</el-menu-item-group>
						  <el-menu-item index="3-3">工资表管理</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
						  <template slot="title">月末处理</template>
						</el-submenu>
						<el-submenu index="3-5">
						  <template slot="title">工资表查询</template>
						</el-submenu>
				    </el-submenu>
				    <el-submenu index="4">
						<template slot="title"><i class="el-icon-setting"></i>统计管理</template>
						<el-menu-item-group>
						  <el-menu-item index="4-1">综合信息统计</el-menu-item>
						  <el-menu-item index="4-2">员工积分统计</el-menu-item>
						</el-menu-item-group>
						  <el-menu-item index="4-3">人事信息统计</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="4-4">
						  <template slot="title">人事纪录统计</template>
						</el-submenu>
				    </el-submenu>
				    <el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>系统管理</template>
						<el-menu-item-group>
						  <el-menu-item index="5-1">基础信息设置</el-menu-item>
						  <el-menu-item index="5-2">系统管理</el-menu-item>
						</el-menu-item-group>
						  <el-menu-item index="5-3">操作日志管理</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="5-4">
						  <template slot="title">操作员管理</template>
						</el-submenu>
						<el-submenu index="5-5">
						  <template slot="title">备份恢复数据库</template>
						</el-submenu>
						<el-submenu index="5-6">
						  <template slot="title">初始化数据库</template>
						</el-submenu>
				    </el-submenu>
				</el-menu>
				</el-aside>
				<el-main>
				</el-main>
			</el-container>
	</div>
</template>

<script>
export default {
	name:'ccw',
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>