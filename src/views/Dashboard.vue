<template>
  <div>

    <!-- Email modal -->
    <div v-if="showEmail"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div @click="showEmail = false"
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div
              class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-900"
            >
              <!-- Heroicon name: outline/check -->
              <svg
                class="w-6 h-6 text-primaryGreen"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg header leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Please confirm the email attached to this account
              </h3>

              <input
              @keyup.enter="updateCost()"
                id="email"
                type="email"
                v-model="emailConfirmation"
                placeholder="email address"
                class="mt-4 block w-full h-20 text-lg px-4 py-3 rounded-md border-0 text-base text-gray-900 bg-gray-200 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
              />

          
            </div>
          </div>
          <div class="mt-5 sm:mt-6">

            <div v-if="!loading" @click="updateCost()"
              class="cursor-pointer inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-2xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-xl"
            >
              Update your price
            </div>

            <div v-if="loading"
              class="bg-gray-300 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-2xl font-medium text-white sm:text-xl"
            >
              Updating Price
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-screen flex bg-gray-100 overflow-hidden">
      <!-- Static sidebar for desktop -->
      <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-20">
          <div class="flex flex-col h-0 flex-1 overflow-y-auto bg-gray-900">
            <div class="flex-1 flex flex-col">
              <div
                class="flex-shrink-0 bg-primaryGreen py-4 flex items-center justify-center"
              >
                <logo-smile :dark="true" />
              </div>
              <nav
                aria-label="Sidebar"
                class="py-6 flex flex-col items-center space-y-3"
              >
                <a
                  href="#"
                  class="flex items-center p-4 rounded-lg text-teal-200 hover:bg-primaryGreen hover:text-gray-900"
                >
                  <!-- Heroicon name: outline/home -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span class="sr-only">Home</span>
                </a>

                <a
                  href="#"
                  class="flex items-center p-4 rounded-lg text-teal-200 hover:bg-primaryGreen hover:text-gray-900"
                >
                  <!-- Heroicon name: outline/fire -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                  <span class="sr-only">Trending</span>
                </a>

                <a
                  href="#"
                  class="flex items-center p-4 rounded-lg text-teal-200 hover:bg-primaryGreen hover:text-gray-900"
                >
                  <!-- Heroicon name: outline/bookmark-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="sr-only">Bookmarks</span>
                </a>

                <a
                  href="#"
                  class="flex items-center p-4 rounded-lg text-teal-200 hover:bg-primaryGreen hover:text-gray-900"
                >
                  <!-- Heroicon name: outline/inbox -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span class="sr-only">Messages</span>
                </a>

                <a
                  href="#"
                  class="flex items-center p-4 rounded-lg text-teal-200 hover:bg-primaryGreen hover:text-gray-900"
                >
                  <!-- Heroicon name: outline/user -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span class="sr-only">Profile</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
        <main class="flex-1 flex overflow-hidden">
          <div class="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <div class="flex-1 flex xl:overflow-hidden">
              <!-- Main content -->
              <div class="flex-1 max-h-screen xl:overflow-y-auto">
                <div
                  class="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8"
                >
                  <h1 class="text-3xl text-blue-gray-900 header">
                    Welcome to your 2way account
                  </h1>

                  <div v-if="account">
                    <div
                      v-if="account.charges_enabled"
                      class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-primaryGreen bg-opacity-25 rounded-md"
                    >
                      <div
                        class="header font-bold flex-1 px-4 py-2 text-lg text-gray-900"
                      >
                        <svg
                          class="w-6 h-6 text-gray-900 inline-block"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Your 2way account is verified
                      </div>
                    </div>
                  </div>

                  <div v-if="!profile">
                    <router-link to="/login">
                      <div class="rounded-md bg-gray-400 p-4 mb-2">
                        <div class="flex">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: solid/information-circle -->
                            <svg
                              class="w-6 h-6 text-indigo-700"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                                clip-rule="evenodd"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                                clip-rule="evenodd"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div class="ml-3 flex-1 md:flex md:justify-between">
                            <p class="text-sm text-gray-800">
                              We need to verify your email
                            </p>
                            <p class="mt-3 text-sm md:mt-0 md:ml-6">
                              <a
                                href="#"
                                class="whitespace-nowrap font-medium text-indigo-700 hover:text-indigo-400"
                                >Verify now
                                <span aria-hidden="true">&rarr;</span></a
                              >
                            </p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <div v-if="account">
                    <div
                      @click="onboardStripe()"
                      v-if="!account.charges_enabled"
                      class="cursor-pointer hover:bg-purple-700 rounded-md bg-indigo-700 p-4 mb-10"
                    >
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: solid/information-circle -->
                          <img
                            src="../assets/stripeSqLogo.png"
                            alt="Stripe Logo"
                            class="w-6 h-6 rounded"
                          />
                        </div>
                        <div class="ml-3 flex-1 md:flex md:justify-between">
                          <p class="text-sm text-white">
                            We use stripe to pay you your earnings
                          </p>
                          <p class="mt-3 text-sm md:mt-0 md:ml-6">
                            <a
                              href="#"
                              class="whitespace-nowrap font-medium text-white hover:text-blue-200"
                              >Let's set it up
                              <span aria-hidden="true">&rarr;</span></a
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div class="col-span-2">
                      <div class="rounded-md bg-gray-900 p-4">
                        <h2 class="text-white header text-xl">
                          <svg
                            class="inline-block text-primaryGreen w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Your 2way Link
                        </h2>

                        <div>
                          <div
                            @click="copied = true"
                            v-clipboard:copy="twowayLink"
                            class="cursor-pointer bg-gray-700 hover:bg-gray-800 px-3 pt-5 mt-3 relative h-16 rounded p-2 text-sm text-gray-400 headerMedium"
                          >
                            {{ twowayLink }}
                            <button
                              class="mt-4 absolute top-0 right-0 m-1 text-gray-500"
                              type="button"
                            >
                              <svg v-if="!copied"
                                class="inline-block w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                                ></path>
                                <path
                                  d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                                ></path>
                              </svg>

                              <svg v-if="copied"
                                class="inline-block w-6 h-6 text-primaryGreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

                            </button>
                          </div>
                        </div>
                        <div class="text-xs header-medium text-gray-200 mt-2">
                          Start pasting the link in your linkedin or other
                          socials
                        </div>
                      </div>
                    </div>
                    <div class="col-span-2">
                      <ul>
                        <li class="col-span-1 flex shadow-sm rounded-md">
                          <div
                            class="flex-shrink-0 flex items-center justify-center w-16 bg-gray-900 text-white text-sm font-medium rounded-l-md"
                          >
                            <svg
                              class="w-6 h-6 text-primaryGreen"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div
                            class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-gray-200 rounded-r-md"
                          >
                            <div class="flex-1 px-4 py-4 text-sm">
                              <span
                                class="text-gray-900 font-medium header text-base hover:text-gray-600"
                                >Price for your reply</span
                              >
                              <div>
                                <input @keyup.enter="showEmail = true" type="text" class="mt-2 bg-white rounded p-4 text-xl text-gray-900 header font-bold w-full outline-none" v-model="cost" />
                              </div>
                              <div @click="showEmail = true" class="bg-gray-900 text-primaryGreen font-bold header text-center rounded p-4 mt-2 hover:bg-primaryGreen hover:text-gray-900 cursor-pointer">Update Cost</div>
                            </div>
                          </div>
                        </li>

                        <a :href="account.loginLink.url" target="_blank">
                          <li
                            v-if="account.loginLink"
                            class="mt-2 col-span-1 flex shadow-sm rounded-md"
                          >
                            <div
                              class="flex-shrink-0 flex items-center justify-center w-16 bg-gray-900 text-white text-sm font-medium rounded-l-md"
                            >
                              <svg
                                class="w-6 h-6 text-primaryGreen"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <div
                              class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                            >
                              <div class="flex-1 px-4 py-4 text-sm truncate">
                                <span
                                  class="text-gray-900 font-medium text-base hover:text-gray-600"
                                  >Payment Settings</span
                                >
                              </div>
                              <div class="flex-shrink-0 pr-2">
                                <button
                                  class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <span class="sr-only">Open options</span>
                                  <!-- Heroicon name: solid/dots-vertical -->
                                  <svg
                                    class="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div></li
                        ></a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

      
  </div>
</template>

<script>
import { store } from "../store/index";
import LogoSmile from "../components/logoSmile";
export default {
  data() {
    return {
      copied: false,
      showEmail: false,
      emailConfirmation: "",
      twowayLink: "",
      account: null,
      loading: true,
      cost: store.state.profile.Attributes.cost,
    };
  },
  computed: {
    profile() {
      return store.state.profile;
    },
  },
  components: {
    LogoSmile,
  },
  methods: {
    getAccount() {
      if (!this.profile) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        type: "fetchAccount",
        accountId: this.profile.Attributes.stripeAccountId,
      };

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/sellers",
          body,
          config
        )
        .then((response) => {
          console.log("Response Account", response.data);
          this.loading = false;
          const body = JSON.parse(response.data.body);
          this.account = body;
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        })
        .finally(() => (this.loading = false));
    },

    onboardStripe() {
      this.loading = true;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        type: "stripeOnboard",
        accountId: this.profile.Attributes.stripeAccountId,
        refreshURL: "http://localhost:8080/refresh-onboard",
        returnURL: "http://localhost:8080/dashboard",
      };

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/sellers",
          body,
          config
        )
        .then((response) => {
          console.log("Response Account", response.data);
          const body = JSON.parse(response.data.body);
          window.location.replace(body.url);
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        })
        .finally(() => (this.loading = false));
    },

    updateCost() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const request = {
        type: "updateCost",
        email: this.emailConfirmation,
        cost: this.cost,
      };

      console.log("Request", request)

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/sellers",
          request,
          config
        )
        .then((response) => {
          this.showEmail = false
          console.log("Response", response.data);
          this.loading = false;
          const _profile = this.profile;
          _profile.Attributes.cost = this.cost;
          store.commit("profile", _profile);
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        })
        .finally(() => (this.loading = false));
    },

    logout() {
      store.commit("profile", null);
      this.$router.push("/");
    },
  },
  mounted() {
    console.log("test", this.$router);
    this.twowayLink = `http://localhost:8080/${this.profile.Attributes.paymentLink}`;

    if (this.profile.Attributes.stripeAccountId) {
      this.getAccount();
    }
  },
};
</script>
