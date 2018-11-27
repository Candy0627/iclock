<template>
	<div class="footer">
		<div class="comWith">
			<div class="f-left">
				<div class="msg_item">
					<p class="item_title">了解更多</p>
					<p>街景地图</p>
				</div>
				<div class="msg_item">
					<p class="item_title">关注我们</p>
					<p class="item_">微信公众号</p>
				</div>
				<div class="msg_item">
					<p class="item_title">联系我们</p>
					<p class="item_">客户服务</p>
					<p class="item_">合作洽谈</p>
				</div>
				<div class="msg_item">
					<p class="item_title">法律信息</p>
					<p class="item_">服务协议</p>
					<p class="item_">隐私政策</p>
					<p class="item_">知识产权</p>
				</div>
				<div class="footer_p">
					©MoreFun Technology Limited . Trademarks belong to their respective owners. All rights reserved
				</div>
			</div>
			<div class="f-right">
				<img src="../../assets/img/footer.png" alt="">
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	name:'CommonFooter'
}
</script>

<style lang="stylus" scoped>
.footer
	width: 100%
	height: 280px
	text-align: center
	background-color: #efefef
	.comWith
		display: flex
		width: 1200px
		margin:0 auto
		.f-left
			flex:1
			.msg_item
				width: 25%
				line-height: 32px
				float: left
				.item_title
					font-size: 20px
					color: #333
					margin-top: 60px
				.item_
					font-size: 14px
					color: #747b81
					cursor: pointer
			.footer_p
				font-size: 12px;
			    color: #999;
			    margin-top: 40px;
			    float: left;
		.f-right
			flex:1
			img
				margin-top: 60px
</style>