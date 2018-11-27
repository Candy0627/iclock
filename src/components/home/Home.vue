<template>
	<div>
		<home-header></home-header>
		<home-banner></home-banner>
		<home-content></home-content>
		<common-footer></common-footer>
	</div>		
</template>

<script>
import HomeHeader from '../common/Header'
import HomeBanner from './components/Banner'
import HomeContent from './components/Content'
import CommonFooter from '../common/Footer' 
export default {
	name:'Home',
	components: {
		HomeHeader,
		HomeBanner,
		HomeContent,
		CommonFooter
	}
}
</script>

<style>
	
</style>