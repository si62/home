<script>
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'
import Blank from './views/Blank.vue'
import Modal from './views/Modal.vue'

const routes = [
    {
        path : '/',
        component : HelloWorld
    },
    {
        path : '/blank',
        component : Blank
    },
    {
        path : '/modal',
        component : Modal
    }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
</script>