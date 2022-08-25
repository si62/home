<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <img :src="require(`@/assets/logo.png`)" width="50"/>

          <span class="mx-2 text-2xl font-semibold text-white">Si Blog</span
          >
        </div>
      </div>

      <nav class="mt-10">
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Home' ? activeClass : inactiveClass]"
          to="/"
        >
        <font-awesome-icon :icon="['fas', 'house']" />
          <span class="mx-4"> Home</span>
        </router-link>
        <button @click="tailwindToggle = !tailwindToggle"
          class="router-link-active router-link-exact-active  flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[tailwindToggle ? activeClass : inactiveClass]"
        >
          
            <font-awesome-icon :icon="['fas', 'palette']" />
            <span class="mx-4">Tailwind UI</span>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          
        </button>
        <div class="justify-start px-4" :class="[tailwindToggle ? `visible` : `invisible`]">
          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
            to="/dashboard"
          >
            <font-awesome-icon :icon="['fas', 'gauge']" />

            <span class="mx-4">Dashboard</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'UIElements' ? activeClass : inactiveClass]"
            to="/ui-elements"
          >
            <font-awesome-icon :icon="['fas', 'grip']" />
            <span class="mx-4">UI Elements</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
            to="/tables"
          >
            <font-awesome-icon :icon="['fas', 'table']" />

            <span class="mx-4">Tables</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Forms' ? activeClass : inactiveClass]"
            to="/forms"
          >
            <font-awesome-icon :icon="['fas', 'file-pen']" />

            <span class="mx-4">Forms</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Cards' ? activeClass : inactiveClass]"
            to="/cards"
          >
            
            <font-awesome-icon :icon="['fas', 'credit-card']" />
            <span class="mx-4">Cards</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
            to="/modal"
          >
            <font-awesome-icon :icon="['fas', 'database']" />

            <span class="mx-4">Modal</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/blank"
          >
            <font-awesome-icon :icon="['fas', 'file']" />

            <span class="mx-4">Blank</span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import { useSidebar } from "../hooks/useSidebar.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse,faGauge, faGrip,faTable,faFilePen,faCreditCard,faDatabase,faFile,faChevronDown,faPalette} from '@fortawesome/free-solid-svg-icons'


library.add(faHouse)
library.add(faGauge)
library.add(faGrip)
library.add(faTable)
library.add(faFilePen)
library.add(faCreditCard)
library.add(faDatabase)
library.add(faFile)
library.add(faChevronDown)
library.add(faPalette)

export default defineComponent({
  setup() {
    const { isOpen } = useSidebar();
    const tailwindToggle = ref(false);
    const activeClass = ref(
      "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
    );
    const inactiveClass = ref(
      "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
    );


    return {
      isOpen,
      activeClass,
      inactiveClass,
      tailwindToggle
    };
  },
});

</script>
