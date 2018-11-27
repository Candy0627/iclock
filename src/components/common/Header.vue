<template>
	<div class="header">
		<!-- <img src="../../../assets/img/banner.png" alt=""> -->
		<div class="header-comwidth">
			<div class="header-left">
				<img src="../../assets/img/logo.png" alt="">
			</div>
			<ul class="header-center">
				<li>
					<a href="#">首页</a>
				</li>
				<li>
					<a href="#">公司信息</a>
				</li>
				<li>
					<a href="#">企业文化</a>
				</li>
				<li>
					<a href="#">产品业务</a>
				</li>
				<li>
					<a href="#">加入我们</a>
				</li>
			</ul>
			<ul class="header-right">
				<li><a href="#">简</a></li>
				<li><a href="#">繁</a></li>
				<li><a href="#">EN</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name:'HomeHeader'
}
</script>

<style scoped>
.header{
	position: fixed;
	z-index: 2;
	width: 100%;
	height: 100px;
	line-height: 100px;
	background: #000000;
}
.header .header-comwidth{
	position: absolute;
	left:50%;
	top:0;
	margin-left: -600px;
	width: 1200px;
	display: flex;
}
.header a {
	display: block;
	width: 100%;
	color: #fff
}
.header .header-left{
	width: 120px;
	flex:1;
}
.header .header-center{
	display: flex;
	flex:1;
	width: 490px;
	margin-right: 50px;
}
.header .header-center li{
	flex:1;
}
.header .header-right{
	display: flex;
	flex:0;
	width: 120px;
	height: 100px;
	line-height: 100px;
	padding-top: 39px;
}
.header .header-right li{
	flex:1;
	width: 120px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	border-right: 1px solid #ccc
}
.header .header-right li:last-child{
	border-right: none
}
</style>