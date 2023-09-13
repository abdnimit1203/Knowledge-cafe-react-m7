import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import { GiClassicalKnowledge } from "react-icons/gi";

function App() {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col items-center">
      <h2 className="items-auto text-6xl text-sky-700"><GiClassicalKnowledge></GiClassicalKnowledge></h2>
        <h1 className="text-2xl w-full text-white py-6 bg-secondary text-center font-bold rounded-xl mb-6">
          Knowlefge Cafe
        </h1>
        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
