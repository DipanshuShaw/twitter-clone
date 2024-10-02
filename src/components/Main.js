import React from 'react'
import { useState } from 'react'
import ForYou from './ForYou';
import Following from './Following';

function Main() {

        const [active,setActive] = useState("For You");

  return (
    <>
      <div
    className="inline-block w-600 h-full overflow-y-scroll border-r-2 second lg:w-2/5 md:w-3/5 border-zinc-700 no-scrollbar">
            <div className="sticky top-0 w-full backdrop-blur-sm border-b-2 border-zinc-800 bg-black/70 z-10">
                <div className="inline-block py-3 text-center border-0 w-1/2 hover:bg-zinc-800 hover:bg-opacity-60">
                    <a href="#" onClick={()=> setActive("For You")} className={`px-1 py-3 rounded-sm border-sky-500 ${active === "For You"? "border-b-4 font-bold":""}`}>For You</a>
                </div>
                <div
                    className="inline-block py-3 text-center border-0 max-w-96 w-1/2 hover:bg-zinc-800 hover:bg-opacity-60">
                    <a href="#"
                        className={`px-1 py-3 rounded-sm border-sky-500 ${active === "Following"? "border-b-4 font-bold":""}`} onClick={()=>setActive("Following")}>Following</a>
                </div>
            </div>
            <div className="main h-auto">
                <div className=" px-3 border-b-2 border-zinc-600 py-2">
                    <div className="inline-block relative top-0 h-24">
                        <img src="https://pbs.twimg.com/profile_images/1663008095105323008/p2C3AkXy_400x400.jpg" alt="hii" className="rounded-full  size-11 relative top-0"></img>
                    </div>
                    <div className="w-5/6 inline-block py-2 relative -top-0 px-2">
                        <div className="inline-block h-full font-normal text-tn text-zinc-500">
                            What is Happening?!
                        </div>
                        <div className="w-5/6">
                            <div className="relative left-0 space-x-3 inline-block pt-10 text-sky-600">
                                <i className="fa-regular fa-image"></i>
                                <i className="fa-brands fa-square-git"></i>
                                <i className="fa-solid fa-list"></i>
                                <i className="fa-regular fa-face-smile"></i>
                                <i className="fa-regular fa-calendar"></i>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="relative -right-64 inline-block">
                                <button className="bg-sky-500 p-1.5 font-semibold px-4 rounded-full">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {(active === "For You")? <ForYou />:<Following />}

        </div>
    </>
  )
}

export default Main
