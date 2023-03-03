import React from 'react'

export default function AdminLayout({children}) {
  return (
    <>
      <div class="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">

        <div class="flex-none w-56 flex flex-row items-center">
          <img src="img/logo.png" class="w-10 flex-none" />
          <strong class="capitalize ml-1 flex-1">cleopatra</strong>

          <button id="sliderBtn" class="flex-none text-right text-gray-900 hidden md:block">
            <i class="fad fa-list-ul"></i>
          </button>
        </div>

        <button id="navbarToggle" class="hidden md:block md:fixed right-0 mr-6">
          <i class="fad fa-chevron-double-down"></i>
        </button>

        <div id="navbar" class="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center">
          <div class="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
            <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-envelope-open-text"></i></a>
            <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-comments-alt"></i></a>
            <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-check-circle"></i></a>
            <a class="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="email"><i class="fad fa-calendar-exclamation"></i></a>
          </div>

          <div class="flex flex-row-reverse items-center">

            <div class="dropdown relative md:static">

              <button class="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
                <div class="w-8 h-8 overflow-hidden rounded-full">
                  <img class="w-full h-full object-cover" src="img/user.svg" />
                </div>

                <div class="ml-2 capitalize flex ">
                  <h1 class="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
                  <i class="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                </div>
              </button>

              <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

              <div class="text-gray-500 menu hidden md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">

                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                  <i class="fad fa-user-edit text-xs mr-1"></i>
                  edit my profile
                </a>

                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                  <i class="fad fa-inbox-in text-xs mr-1"></i>
                  my inbox
                </a>

                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                  <i class="fad fa-badge-check text-xs mr-1"></i>
                  tasks
                </a>

                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                  <i class="fad fa-comment-alt-dots text-xs mr-1"></i>
                  chats
                </a>

                <hr />

                <a class="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                  <i class="fad fa-user-times text-xs mr-1"></i>
                  log out
                </a>

              </div>
            </div>

            <div class="dropdown relative mr-5 md:static">

              <button class="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                <i class="fad fa-bells"></i>
              </button>

              <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

              <div class="menu hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                <div class="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                  <h1>notifications</h1>
                  <div class="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                    <strong>5</strong>
                  </div>
                </div>
                <hr />


                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                    <i class="fad fa-birthday-cake text-sm"></i>
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">poll..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>4 min ago</p>
                    </div>
                  </div>

                </a>
                <hr />

                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                    <i class="fad fa-user-circle text-sm"></i>
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">mohamed..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>78 min ago</p>
                    </div>
                  </div>

                </a>
                <hr />

                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                    <i class="fad fa-images text-sm"></i>
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">new imag..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>65 min ago</p>
                    </div>
                  </div>

                </a>
                <hr />

                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                    <i class="fad fa-alarm-exclamation text-sm"></i>
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">time is up..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>1 min ago</p>
                    </div>
                  </div>

                </a>



                <hr />
                <div class="px-4 py-2 mt-2">
                  <a href="#" class="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                    view all
                  </a>
                </div>
              </div>
            </div>

            <div class="dropdown relative mr-5 md:static">

              <button class="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                <i class="fad fa-comments"></i>
              </button>

              <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

              <div class="menu hidden md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                <div class="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                  <h1>messages</h1>
                  <div class="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                    <strong>3</strong>
                  </div>
                </div>
                <hr />


                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                    <img class="w-full h-full object-cover" src="img/user1.jpg" alt="" />
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">mohamed said</h1>
                      <p class="text-xs text-gray-500">yeah i know</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>4 min ago</p>
                    </div>
                  </div>

                </a>
                <hr />

                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                    <img class="w-full h-full object-cover" src="img/user2.jpg" alt="" />
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">sull goldmen</h1>
                      <p class="text-xs text-gray-500">for sure</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>1 day ago</p>
                    </div>
                  </div>

                </a>
                <hr />

                <a class="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">

                  <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                    <img class="w-full h-full object-cover" src="img/user3.jpg" alt="" />
                  </div>

                  <div class="flex-1 flex flex-rowbg-green-100">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">mick</h1>
                      <p class="text-xs text-gray-500">is typing ....</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>31 feb</p>
                    </div>
                  </div>

                </a>



                <hr />
                <div class="px-4 py-2 mt-2">
                  <a href="#" class="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                    view all
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>


      <div class="h-screen flex flex-row flex-wrap">

        <div id="sideBar" class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">


          <div class="flex flex-col">

            <div class="text-right hidden md:block mb-4">
              <button id="sideBarHideBtn">
                <i class="fad fa-times-circle"></i>
              </button>
            </div>

            <p class="uppercase text-xs text-gray-600 mb-4 tracking-wider">homes</p>

            <a href="./index.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-chart-pie text-xs mr-2"></i>
              Analytics dashboard
            </a>

            <a href="./index-1.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-shopping-cart text-xs mr-2"></i>
              ecommerce dashboard
            </a>

            <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>

            <a href="./email.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-envelope-open-text text-xs mr-2"></i>
              email
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-comments text-xs mr-2"></i>
              chat
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-shield-check text-xs mr-2"></i>
              todo
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-calendar-edit text-xs mr-2"></i>
              calendar
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-file-invoice-dollar text-xs mr-2"></i>
              invoice
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-folder-open text-xs mr-2"></i>
              file manager
            </a>


            <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">UI Elements</p>

            <a href="./typography.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-text text-xs mr-2"></i>
              typography
            </a>

            <a href="./alert.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-whistle text-xs mr-2"></i>
              alerts
            </a>


            <a href="./buttons.html" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-cricket text-xs mr-2"></i>
              buttons
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-box-open text-xs mr-2"></i>
              Content
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-swatchbook text-xs mr-2"></i>
              colors
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-atom-alt text-xs mr-2"></i>
              icons
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-club text-xs mr-2"></i>
              card
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-cheese-swiss text-xs mr-2"></i>
              Widgets
            </a>

            <a href="#" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
              <i class="fad fa-computer-classic text-xs mr-2"></i>
              Components
            </a>



          </div>

        </div>

        <div class="bg-gray-100 flex-1 p-6 md:mt-16 grid grid-cols-8">

          <div class="col-span-2 bg-white border rounded p-6 mr-8">

            <a href="#" class="btn-bs-dark uppercase tracking-wider">
              <i class="fad fa-layer-plus mr-2"></i>
              Compose
            </a>
            <hr class="my-6" />

            <ul>
              <li class="my-5 mt-0">
                <a class="btn-indigo text-left" href="#">
                  <i class="text-xs fad fa-inbox mr-1"></i>
                  inbox
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-xs fad fa-paper-plane mr-1"></i>
                  sent
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-xs fad fa-star mr-1"></i>
                  Marked
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-xs fad fa-inbox-in mr-1"></i>
                  draft
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-xs fad fa-inbox-out mr-1"></i>
                  sent
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-xs fad fa-trash mr-1"></i>
                  trash
                </a>
              </li>

              <hr class="my-10" />

              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-indigo-700 fad fa-dot-circle mr-1"></i>
                  Custom Work
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-gray-700 fad fa-dot-circle mr-1"></i>
                  Important
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-green-700 fad fa-dot-circle mr-1"></i>
                  work
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-yellow-700 fad fa-dot-circle mr-1"></i>
                  design
                </a>
              </li>


              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-red-700 fad fa-dot-circle mr-1"></i>
                  laravel
                </a>
              </li>

              <li>
                <a class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900" href="#">
                  <i class="text-teal-800 fad fa-dot-circle mr-1"></i>
                  add new label
                </a>
              </li>

            </ul>

          </div>
          <div class="col-span-6 card flex flex-col">

            <div class="px-3 border-b">
              <form action="" class="flex">
                <input class="p-3 flex-1" type="text" placeholder="search" />
                <button type="submit" class="p-3">
                  <i class="fad fa-search"></i>
                </button>
              </form>
            </div>

            <div class="flex-1 flex flex-col">


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


              <div class="flex items-center shadow-xs transition-all duration-300 ease-in-out p-5 hover:shadow-md">
                <div class="w-10 h-10 overflow-hidden rounded-md">
                  <img class="img-responsive" src="img/user1.jpg" alt="" />
                </div>
                <h1 class="ml-3">mohamed</h1>
                <p class="ml-6 flex-1 text-xs">page when looking at its layout looking at its layout The point of using Lorem...</p>
                <p class="font-bold text-gray-900">05:09 AM</p>
              </div>


            </div>

            <div class="card-footer flex justify-between">
              <p>4.41 GB (25%) of 17 GB used Manage</p>
              <p>Last account activity: 36 minutes ago</p>
            </div>
          </div>

        </div>

      </div>

      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <script src="js/scripts.js"></script>
    </>
  )
}