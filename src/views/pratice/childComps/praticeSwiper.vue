<template>
	<swiper>
		<swiper-item v-for='item in banners' :key='item.id'>
			<img :src="item.imge" />
		</swiper-item>
	</swiper>
</template>

<script>
	import {
		Swiper,
		SwiperItem
	} from 'components/common/swiper/index.js'

	export default {
		name: 'particeSwiper',
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
</style>
