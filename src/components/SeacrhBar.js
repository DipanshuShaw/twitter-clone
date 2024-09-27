import React from 'react'

function SeacrhBar() {
  return (
    <div>
      <div className="h-screen px-5 py-2 overflow-y-scroll border-0 md:w-96 max-md:hidden no-scrollbar">
            <div className="w-full">
                <input type="search" name="" id=""
                    className="w-full p-2.5 px-16 bg-gray-500 bg-opacity-30 rounded-full placeholder-zinc-500 font-light"
                    placeholder="Search"></input>
                <span className="relative font-thin -top-8 left-5 text-zinc-600">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <div className="w-full h-auto px-4 py-2 -mt-2 bg-gray-500 bg-opacity-20 rounded-2xl">
                <div className="pb-2 font-sans text-xl font-bold text-white">
                    Subscribe To Premium
                </div>
                <div>
                    Subscribe to be a Slave of the Legend himself Dipanshu.
                </div>
                <div className="py-2 text-center lg:text-left">
                    <button
                        className="bg-sky-500 hover:bg-sky-600 transition-all ease-in-out duration-200 w- px-3 py-1.5 rounded-full text-base font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="w-full h-auto py-2 pb-0 my-4 bg-gray-500 bg-opacity-20 rounded-2xl">
                <div className="px-4 pb-2 font-sans text-xl font-bold text-white">
                    What's Happening
                </div>
                <div className="w-full h-auto px-4 py-2 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <span className="text-sm text-zinc-500">
                        Cricket &sdot; Trending
                    </span>
                    <span className="relative -right-44"><i className="fa-solid fa-ellipsis"></i></span>

                    <div className="font-semibold">
                        #ThalaForAReason
                    </div>
                    <div className="text-sm text-zinc-500">
                        77.7K posts
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-2 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <span className="text-sm text-zinc-500">
                        Entertainment &sdot; Trending
                    </span>
                    <span className="relative -right-32"><i className="fa-solid fa-ellipsis"></i></span>

                    <div className="font-semibold">
                        #RomanVsRhodes
                    </div>
                    <div className="text-sm text-zinc-500">
                        69.6K posts
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-2 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <span className="text-sm text-zinc-500">
                        Shopping &sdot; Trending
                    </span>
                    <span className="relative -right-40"><i className="fa-solid fa-ellipsis"></i></span>

                    <div className="font-semibold">
                        #NiggerOnSale
                    </div>
                    <div className="text-sm text-zinc-500">
                        1.2M posts
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-2 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <span className="text-sm text-zinc-500">
                        <span>Trending</span>
                    </span>
                    <span className="relative text-white left-60"><i className="fa-solid fa-ellipsis"></i></span>

                    <div className="font-semibold">
                        #LailaMaiLaila
                    </div>
                    <div className="text-sm text-zinc-500">
                        4,394 posts
                    </div>
                </div>
                <div
                    className="px-4 pt-2 pb-4 transition-all duration-200 ease-in-out text-sky-500 hover:bg-zinc-800 rounded-b-xl">
                    <a href="#">Show More</a>
                </div>
            </div>
            <div className="w-full h-auto py-2 pb-0 my-4 bg-gray-500 bg-opacity-20 rounded-2xl">
                <div className="px-4 pb-2 font-sans text-xl font-bold text-white">
                    Who To Follow
                </div>
                <div className="flex px-2 pt-6 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <div className="w-56">
                        <div className="inline-block w-12 h-12 rounded-full">
                            <img src="twitter-clone-pics\tt-profile.jpg" alt="" className="rounded-full"></img>
                        </div>
                        <div className="relative hidden px-2 -top-1 lg:inline-block">
                            <span className="text-base font-semibold"><span
                                    className="cursor-pointer hover:underline">Bol_Dipanshu</span></span>
                            <div className="text-base text-gray-500">@DipenderSingh69</div>
                        </div>
                    </div>
                    <div className="h-auto text-right w-28">
                        <button
                            className="px-4 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-neutral-200">Follow</button>
                    </div>
                </div>
                <div className="flex px-2 pt-6 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <div className="w-56">
                        <div className="inline-block w-12 h-12 rounded-full">
                            <img src="twitter-clone-pics\elon-musk.jpg" alt="" className="rounded-full"></img>
                        </div>
                        <div className="relative hidden px-2 -top-1 lg:inline-block">
                            <span className="text-base font-semibold"><span className="cursor-pointer hover:underline">Elon
                                    Musk</span> <i className="fa-solid fa-circle-check"></i> <i
                                    className="fa-brands fa-x-twitter"></i></span>
                            <div className="text-base text-gray-500">@ElonMusk</div>
                        </div>
                    </div>
                    <div className="h-auto text-right w-28">
                        <button
                            className="px-4 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-neutral-200">Follow</button>
                    </div>
                </div>
                <div className="flex px-2 pt-6 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <div className="w-56">
                        <div className="inline-block w-12 h-12 rounded-full">
                            <img src="twitter-clone-pics\Narendra-modi.jpg" alt="" className="rounded-full"></img>
                        </div>
                        <div className="relative hidden px-2 -top-1 lg:inline-block">
                            <span className="text-base font-semibold"><span className="cursor-pointer hover:underline">Narendra
                                    Modi</span> <i className="fa-solid fa-circle-check"></i></span>
                            <div className="text-base text-gray-500">@narendramodi</div>
                        </div>
                    </div>
                    <div className="h-auto text-right w-28">
                        <button
                            className="px-4 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-neutral-200">Follow</button>
                    </div>
                </div>
                <div className="flex px-2 pt-6 transition-all duration-200 ease-in-out hover:bg-zinc-800">
                    <div className="w-56">
                        <div className="inline-block w-12 h-12 rounded-full">
                            <img src="twitter-clone-pics\salman-khan.jpg" alt="" className="rounded-full"></img>
                        </div>
                        <div className="relative hidden px-2 -top-1 lg:inline-block">
                            <span className="text-base font-semibold"><span className="cursor-pointer hover:underline">Salman
                                    Khan</span> <i className="fa-solid fa-circle-check"></i></span>
                            <div className="text-base text-gray-500">@BeingSalmanKhan</div>
                        </div>
                    </div>
                    <div className="h-auto text-right w-28">
                        <button
                            className="px-4 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-neutral-200">Follow</button>
                    </div>
                </div>
                <div
                    className="px-4 pt-2 pb-4 transition-all duration-200 ease-in-out text-sky-500 hover:bg-zinc-800 rounded-b-xl">
                    <a href="#">Show More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeacrhBar
