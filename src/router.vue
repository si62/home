<script>
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blank from './views/Blank.vue'
import Modal from './views/Modal.vue'
import Dashboard from './views/Dashboard.vue'
import Tables from './views/Tables.vue'
import UIElements from './views/UIElements.vue'
import Forms from './views/Forms.vue'
import Card from './views/Card.vue'
const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/dashboard',
        component : Dashboard
    },
    {
        path : '/blank',
        component : Blank
    },
    {
        path : '/modal',
        component : Modal
    },

    {
        path : '/tables',
        component : Tables
    },
    {
        path : '/ui-elements',
        component : UIElements
    },
    {
        path : '/forms',
        component : Forms
    },
    {
        path : '/cards',
        component : Card
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
</script>