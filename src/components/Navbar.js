import React from 'react'

function Navbar() {
  return (
    <div>
      <div
            className="inline-block h-screen p-2 pt-4 overflow-y-scroll w-auto border-0 border-r-2 first xl:w-72 border-zinc-700 mix-blend-normal no-scrollbar">
            <div className="">
                <i className="p-4 pt-0 fa-brands fa-x-twitter fa-2x"></i>
            </div>
            <nav>
                <ul>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa-solid fa-house"></i><span className="hidden px-4 xl:inline">Home</span></a>
                    </li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa fa-search" aria-hidden="true"></i><span
                                className="hidden px-4 xl:inline">Explore</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa fa-bell" aria-hidden="true"></i><span
                                className="hidden px-4 xl:inline">Notifications</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa fa-envelope-o" aria-hidden="true"></i><span
                                className="hidden px-4 xl:inline">Messages</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-solid fa-at"></i><span className="hidden px-4 xl:inline">Mentions</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa-regular fa-rectangle-list"></i><span
                                className="hidden px-4 xl:inline">Lists</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa fa-bookmark-o" aria-hidden="true"></i><span
                                className="hidden px-4 xl:inline">Bookmarks</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa-solid fa-user-group"></i><span
                                className="hidden px-4 xl:inline">Communities</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa-brands fa-x-twitter"></i><span
                                className="hidden px-4 xl:inline">Premium</span></a></li>
                    <li className="mb-6 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa-regular fa-user"></i><span
                                className="hidden px-4 xl:inline">Profile</span></a></li>
                    <li className="mb-4 text-center lg:text-left"><a href="#"
                            className="w-auto p-2 px-4 text-xl rounded-full hover:bg-gray-300 hover:bg-opacity-15"><i
                                className="fa-lg fa-solid fa-ellipsis"></i><span
                                className="hidden px-4 xl:inline">More</span></a></li>
                </ul>
            </nav>
            <div className="text-center lg:text-left">
                <button
                    className="p-3 text-lg font-semibold transition-all duration-200 ease-in-out rounded-full bg-sky-500 hover:bg-sky-600 w-14 lg:w-11/12">
                    <div className="block lg:hidden"><i className="fa-solid fa-upload"></i></div>
                    <span className="hidden lg:block">Post</span>
                </button>
            </div>
            <div className="flex px-2 pt-6">
                <div className="w-12 h-12 rounded-full">
                    <img src="https://pbs.twimg.com/profile_images/1663008095105323008/p2C3AkXy_400x400.jpg" alt="" className="rounded-full"></img>
                </div>
                <div className="relative hidden px-2 -top-1 xl:inline-block">
                    <span className="text-base font-semibold">Bol_Dipanshu</span>
                    <span className="relative -right-20"><i className="fa-solid fa-ellipsis"></i></span>
                    <span className="text-base text-gray-500">@DipenderSingh69</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
