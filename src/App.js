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
        <Main />
        <SeacrhBar />
    </div>
    </>
  );
}

export default App;
