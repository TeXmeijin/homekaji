<template>
  <footer
    class="fixed bottom-0 px-2 flex w-full justify-center border-t border-orange-200 py-2 z-50"
  >
    <div class="flex md:w-7/12 w-full justify-around">
      <nuxt-link :to="'/'">
        <svg
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :class="index === 'record' ? 'text-orange-500' : 'text-gray-400'"
          class="w-10 h-10 block"
        >
          <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
          <title>ic_fluent_checkmark_square_24_regular</title>
          <desc>Created with Sketch.</desc>
          <g id="🔍-System-Icons" stroke-width="1" fill-rule="evenodd">
            <g id="ic_fluent_checkmark_square_24_regular" fill-rule="nonzero">
              <path
                id="🎨-Color"
                d="M18.7559,3 C19.9985,3 21.0059,4.00736 21.0059,5.25 L21.0059,18.75 C21.0059,19.9926 19.9985,21 18.7559,21 L5.25586,21 C4.01322,21 3.00586,19.9926 3.00586,18.75 L3.00586,5.25 C3.00586,4.00736 4.01322,3 5.25586,3 L18.7559,3 Z M18.7559,4.5 L5.25586,4.5 C4.84165,4.5 4.50586,4.83579 4.50586,5.25 L4.50586,18.75 C4.50586,19.1642 4.84165,19.5 5.25586,19.5 L18.7559,19.5 C19.1701,19.5 19.5059,19.1642 19.5059,18.75 L19.5059,5.25 C19.5059,4.83579 19.1701,4.5 18.7559,4.5 Z M16.2803,8.71968 C16.5732,9.01258 16.5732,9.48746 16.2803,9.78034 L11.2803,14.7801 C10.9874,15.073 10.5125,15.073 10.2197,14.7801 L8.21586,12.7763 C7.92297,12.4834 7.92297,12.0085 8.21586,11.7157 C8.50875,11.4228 8.98363,11.4228 9.27652,11.7157 L10.75,13.1891 L15.2197,8.71966 C15.5126,8.42677 15.9874,8.42678 16.2803,8.71968 Z"
              ></path>
            </g>
          </g>
        </svg>
      </nuxt-link>
      <nuxt-link to="timeline">
        <svg
          :class="index === 'timeline' ? 'text-orange-500' : 'text-gray-400'"
          class="w-10 h-10 block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.314 3.5272C11.7269 3.49427 12.0349 3.13284 12.0019 2.71994C11.969 2.30704 11.6076 1.99902 11.1947 2.03195C6.04802 2.44251 2 6.74813 2 12C2 17.5228 6.47715 22 12 22C17.2489 22 21.5527 17.9564 21.9673 12.8139C22.0006 12.401 21.6929 12.0393 21.28 12.006C20.8671 11.9727 20.5055 12.2804 20.4722 12.6933C20.1198 17.0631 16.4609 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.53657 6.94073 3.87606 11.314 3.5272Z"
          />
          <path
            d="M17.6972 4.67401C17.9772 4.36872 18.4516 4.34819 18.7569 4.62815C18.9712 4.8247 19.177 5.03048 19.3735 5.24486C19.6534 5.55021 19.6327 6.02464 19.3274 6.30452C19.022 6.5844 18.5476 6.56376 18.2677 6.25841C18.1005 6.076 17.9255 5.90091 17.7431 5.73368C17.4378 5.45372 17.4173 4.97929 17.6972 4.67401Z"
          />
          <path
            d="M11.25 6C11.6295 6 11.9435 6.28233 11.9931 6.64827L12 6.75V12H15.25C15.664 12 16 12.336 16 12.75C16 13.1295 15.7177 13.4435 15.3517 13.4931L15.25 13.5H11.25C10.8705 13.5 10.5565 13.2177 10.5069 12.8517L10.5 12.75V6.75C10.5 6.336 10.836 6 11.25 6Z"
          />
          <path
            d="M13.781 2.8902C13.8928 2.49138 14.3068 2.25873 14.7056 2.37058C15.0727 2.47352 15.4312 2.59686 15.7798 2.7393C16.1633 2.89595 16.3471 3.33379 16.1905 3.71724C16.0338 4.10069 15.596 4.28454 15.2125 4.12788C14.9165 4.00694 14.6122 3.90224 14.3006 3.81486C13.9018 3.70301 13.6691 3.28903 13.781 2.8902Z"
          />
          <path
            d="M21.2588 8.21572C21.102 7.83235 20.664 7.64871 20.2807 7.80555C19.8973 7.9624 19.7137 8.40033 19.8705 8.7837C19.9628 9.0092 20.0456 9.23954 20.1185 9.47423C20.1416 9.54855 20.1637 9.62332 20.1848 9.6985C20.2967 10.0973 20.7107 10.3299 21.1095 10.218C21.5083 10.1061 21.7409 9.69212 21.629 9.29331C21.6042 9.20474 21.5782 9.11666 21.5509 9.02911C21.465 8.75264 21.3675 8.48131 21.2588 8.21572Z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link to="activity">
        <svg
          :class="index === 'activity' ? 'text-orange-500' : 'text-gray-400'"
          class="w-10 h-10 block"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
          <title>ic_fluent_data_area_24_filled</title>
          <desc>Created with Sketch.</desc>
          <g
            id="🔍-System-Icons"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
          >
            <g id="ic_fluent_data_area_24_filled" fill-rule="nonzero">
              <path
                id="🎨-Color"
                d="M3.75,3 C4.16421,3 4.5,3.33579 4.5,3.75 L4.5,19.5 L20.25,19.5 C20.6642,19.5 21,19.8358 21,20.25 C21,20.6642 20.6642,21 20.25,21 L3.75,21 C3.33579,21 3,20.6642 3,20.25 L3,3.75 C3,3.33579 3.33579,3 3.75,3 Z M18.3,6.15 C18.5273,5.97955 18.8313,5.95214 19.0854,6.07918 C19.3077375,6.19034 19.4584125,6.40306781 19.4926072,6.6448243 L19.5,6.75 L19.5,18.4999968 L5.5,18.4999968 L5.5,9.41148 L8.16461,8.07918 C8.35942143,7.98177429 8.58515612,7.97459633 8.78360743,8.05566875 L8.88029,8.10355 L12.6997,10.3503 L18.3,6.15 Z"
              ></path>
            </g>
          </g>
        </svg>
      </nuxt-link>
      <nuxt-link to="account">
        <svg
          :class="index === 'account' ? 'text-orange-500' : 'text-gray-400'"
          class="w-10 h-10 block"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
          <title>ic_fluent_people_24_regular</title>
          <desc>Created with Sketch.</desc>
          <g
            id="🔍-Product-Icons"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
          >
            <g id="ic_fluent_people_24_regular" fill-rule="nonzero">
              <path
                id="🎨-Color"
                d="M4,13.999 L13,14 C14.0538182,14 14.9181157,14.8154855 14.9945109,15.8506842 L15,16 L15,17.5 C14.999,21 11.284,22 8.5,22 C5.77786667,22 2.16469531,21.0439506 2.00545418,17.7296461 L2,17.5 L2,15.999 C2,14.9451818 2.81639669,14.0808843 3.85080841,14.0044891 L4,13.999 Z M15.22,14 L20,14 C21.0538182,14 21.9181157,14.8163967 21.9945109,15.8508084 L22,16 L22,17 C21.999,20.062 19.142,21 17,21 C16.32,21 15.569,20.904 14.86,20.678 C15.196,20.292 15.467,19.851 15.662,19.351 C16.205,19.476 16.715,19.5 17,19.5 L17.266544,19.4940421 C18.2518104,19.4509088 20.3528639,19.1306016 20.4926606,17.2049828 L20.5,17 L20.5,16 C20.5,15.7546667 20.3222222,15.5504198 20.0895748,15.5080604 L20,15.5 L15.949,15.5 C15.865,14.998625 15.6554375,14.5431875 15.3544785,14.1598145 L15.22,14 L20,14 L15.22,14 Z M4,15.499 L3.899344,15.509 C3.77496,15.53428 3.69,15.6018 3.646,15.645 C3.6028,15.689 3.53528,15.77332 3.51,15.89796 L3.5,15.999 L3.5,17.5 C3.5,18.509 3.95,19.222 4.917,19.742 C5.74315385,20.1869231 6.91950888,20.4563195 8.18257852,20.4951325 L8.5,20.5 L8.8174051,20.4951325 C10.0803491,20.4563195 11.2559231,20.1869231 12.083,19.742 C12.988625,19.2545 13.4416133,18.5973711 13.4946992,17.6849199 L13.5,17.499 L13.5,16 C13.5,15.7546667 13.3222222,15.5504198 13.0895748,15.5080604 L13,15.5 L4,15.499 Z M8.5,3 C10.985,3 13,5.015 13,7.5 C13,9.985 10.985,12 8.5,12 C6.015,12 4,9.985 4,7.5 C4,5.015 6.015,3 8.5,3 Z M17.5,5 C19.433,5 21,6.567 21,8.5 C21,10.433 19.433,12 17.5,12 C15.567,12 14,10.433 14,8.5 C14,6.567 15.567,5 17.5,5 Z M8.5,4.5 C6.846,4.5 5.5,5.846 5.5,7.5 C5.5,9.154 6.846,10.5 8.5,10.5 C10.154,10.5 11.5,9.154 11.5,7.5 C11.5,5.846 10.154,4.5 8.5,4.5 Z M17.5,6.5 C16.397,6.5 15.5,7.397 15.5,8.5 C15.5,9.603 16.397,10.5 17.5,10.5 C18.603,10.5 19.5,9.603 19.5,8.5 C19.5,7.397 18.603,6.5 17.5,6.5 Z"
              ></path>
            </g>
          </g>
        </svg>
      </nuxt-link>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    index(): 'record' | 'timeline' | 'activity' | 'account' {
      switch (this.$route.path) {
        case '/timeline':
          return 'timeline'
        case '/activity':
          return 'activity'
        case '/account':
          return 'account'
        default:
          return 'record'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
svg {
  fill: currentColor;
}
</style>
