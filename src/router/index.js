import Vue from 'vue'
import Router from 'vue-router'

const Pratice = ()=> import('../views/pratice/Pratice')
const Profile = ()=> import('../views/profile/Profile')

Vue.use(Router)

const routes = [
	{
		path: '',
		redirect: '/pratice'
	},
	{
		path:'/profile',
		component: Profile
	},
	{
		path:'/pratice',
		component: Pratice
	}
]

export default new Router({
  routes,
  mode: 'history'
})
