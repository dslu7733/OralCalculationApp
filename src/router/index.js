import Vue from 'vue'
import Router from 'vue-router'

const Pratice = () => import('../views/pratice/Pratice')
const Profile = () => import('../views/profile/Profile')
const User = () => import('../views/user/User')
const PraSelect = () => import('../views/praticeSelect/praSelect.vue')
const Question = () => import('../views/question/question')
const ErrorRecord = () => import('../views/errorRecord/errorRed.vue')
const History = () => import('../views/history/History.vue')

Vue.use(Router)

const routes = [{
    path: '',
    redirect: '/pratice'
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/pratice',
    component: Pratice
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/praSelect',
    component: PraSelect
  },
  {
    path: '/question',
    component: Question
  },
  {
    path: '/errorRecord',
    component: ErrorRecord
  },
  {
    path: '/history',
    component: History
  }
]

export default new Router({
  routes,
  mode: 'history'
})
