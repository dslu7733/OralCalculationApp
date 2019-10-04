<template>
	<tab-bar>
		<tab-bar-item path='/pratice' activeColor='orange'>
			<img slot='item-icon' src="~assets/img/tabbar/pratice.svg" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/pratice_active.svg" alt="">
			<div slot="item-text">练习</div>
		</tab-bar-item>
		
		<tab-bar-item path='/profile' activeColor='orange'>
			<img slot='item-icon' src="~assets/img/tabbar/profile.svg" alt="">
			<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
			<div slot="item-text">我</div>
		</tab-bar-item>
		
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar'
	import TabBarItem from 'components/common/tabbar/TabBarItem'
	
	export default {
		name: 'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
