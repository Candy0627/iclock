<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <swiper-slide><img src="../../../assets/img/banner.png" alt=""></swiper-slide>
		    <swiper-slide><img src="../../../assets/img/banner1.jpg" alt=""></swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
	  	</swiper>
  	</div>
</template>

<script>
export default {
	name:'HomeBanner',
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				paginationClickable:true,
			}
		}
	}
}
</script>

<style scoped>
.wrapper >>> .swiper-pagination-bullet{
	width: 40px;
    height: 10px;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
}
.wrapper >>> .swiper-pagination-bullet-active{
	background: #fff
}
.wrapper img{
	width: 100%
}
</style>