<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-amber-500"
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </span>

        <input
          class="w-32 pl-10 pr-4 text-amber-600 border-gray-200 rounded-md sm:w-64 focus:border-amber-600 focus:ring focus:ring-opacity-40 focus:ring-amber-500"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <font-awesome-icon :icon="['fas', 'bell']" />
      </button>

      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
        >

             <img :src="require(`@/assets/donald.jpg`)" />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white"
              >Profile</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white"
              >Products</a
            >
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useSidebar } from "../hooks/useSidebar.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)
library.add(faBell)

export default defineComponent({
  setup(_, { emit }) {
    const dropdownOpen = ref(false);
    const { isOpen } = useSidebar();

    return {
      isOpen,
      dropdownOpen,
    };
  },
});
</script>
