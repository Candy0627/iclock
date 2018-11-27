<template>
	<div class="content comWidth">
		<div class="introduction">
			<div class="c-left">
				<img src="../../../assets/img/index2.png" alt="">
				<span class="mask"></span>
				<img src="../../../assets/img/index1.png" alt="" class="c-img">
			</div>
			<dl class="c-right">
				<dt>公司介绍<em></em></dt>
				<dd>苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。
				</dd>
			</dl>
		</div>
		<div class="clear"></div>
		<div class="news">
			<dl class="n-left">
				<dt>新闻<em></em></dt>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
				<dd><a href="#">这是一条新闻这是一条新闻这是一条新闻这是一条新闻 <span>2018-05-30</span></a></dd>
			</dl>
			<div class="n-right">
				<img src="../../../assets/img/index3.png" alt="" class="n-img">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'HomeContent'
}
</script>

<style lang="stylus" scoped>
.content
	margin-top: 68px
	.introduction
		.c-left
			float: left
			position: relative
			.mask
				position: absolute
				z-index: 1
				top: 0
				left: 0
				width: 100%
				height: 100%
				background: rgba(0,0,0,0.8)
			.c-img
				position: absolute
				z-index: 2
				left: 34px
				top: 25px
		.c-right
			width: 580px
			float: right
			margin-right: 76px
			dt
				position: relative
				width: 100%
				height: 40px
				color: #f08200
				font-size: 24px
				text-align: left
				em
					display: inline-block
					position: absolute
					left: 0
					bottom: 0
					width: 30px
					height: 4px
					background: #f08200
			dd
				margin-top: 38px
				color: #333333
				font-size: 18px
				text-align: left
				line-height: 45px
	.news
		margin-top: 80px
		padding-bottom: 66px
		overflow: hidden
		.n-left
			width: 723px
			float: left
			dt
				position: relative
				width: 100%
				height: 40px
				color: #f08200
				font-size: 24px
				text-align: left
				em
					display: inline-block
					position: absolute
					left: 0
					bottom: 0
					width: 30px
					height: 4px
					background: #f08200
			dd
				margin-top: 38px
				color: #333333
				font-size: 18px
				text-align: left
				line-height: 5px
				a
					display: block
					width: 100%
					height: 100%
					color: #333333
					&:hover
						color: #f08200
				span
					display: block
					float: right
					font-size: 16px
					color: #999999
		.n-right
			float: right
			.n-img
				width: 381px
				height: 287px
				margin-top: 20px
				border-radius: 6px
</style>