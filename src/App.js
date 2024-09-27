import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SeacrhBar from './components/SeacrhBar';
import Main from './components/Main';

function App() {
  return (
    <>
<div className="flex justify-center w-screen h-screen text-white bg-black">
        <Navbar/>
        {/* <Main /> */}
        <div
            className="inline-block w-4/5 h-screen overflow-y-scroll border-r-2 second lg:w-2/5 md:w-3/5 border-zinc-700 no-scrollbar">
            <div className="sticky top-0 w-full bg-opacity-50 border-b-2 border-zinc-700 bg-black ">
                <div className="inline-block py-3 text-center border-0 w-3/7 hover:bg-zinc-800 hover:bg-opacity-60">
                    <a href="#" className="px-1 py-3 rounded-sm focus:border-b-4 border-sky-500 focus:font-bold">For You</a>
                </div>
                <div
                    className="inline-block py-3 text-center border-0 max-w-96 w-3/7 hover:bg-zinc-800 hover:bg-opacity-60">
                    <a href="#"
                        className="px-1 py-3 rounded-sm focus:border-b-4 focus:font-bold border-sky-500">Following</a>
                </div>
                <div className="inline-block py-3 text-right border-0 size-auto ">
                    <span className="p-1 px-2 rounded-full hover:bg-zinc-800 hover:bg-opacity-60">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="main h-screen">
                <div className=" px-3 border-b-2 border-zinc-600 py-2">
                    <div className="inline-block relative top-0 h-24">
                        <img src="twitter-clone-pics\tt-profile.jpg" alt="hii" className="rounded-full  size-11 relative top-0"></img>
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

        </div>
        <SeacrhBar />
    </div>
    </>
  );
}

export default App;
