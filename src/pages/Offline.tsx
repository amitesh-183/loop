import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import Sidebar from "../components/sidebar";
import local from "../assets/images/local-indicate.png";

const Offline = () => {
  return (
    <>
      <Sidebar />
      <div className=" bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2">
        <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 flex justify-between items-center">
          <div>
            <h2 className=" font-bold text-3xl">Enjoy your local music</h2>
            <p className=" text-gray-50/40 mt-3 text-xl">
              Your Local on demand
            </p>
          </div>
          <div>
            <img src={local} alt="" className=" w-52" />
          </div>
        </div>
        <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4">
          <h2 className=" text-4xl font-black text-center">
            Add or Drop Your Music Here
          </h2>
          <div className="flex justify-center items-center h-[200px] mx-auto my-4 max-w-xl border rounded-lg border-dashed px-4">
            <input type="file" className=" hidden max-w-xl" />
            <BsFillFileEarmarkMusicFill className=" text-6xl fill-purple-400/40" />
          </div>
          <div className=" flex justify-center">
            <label htmlFor="music">
              <input type="file" name="music" id="music" className="hidden" />
              <button className="bg-purple-600 text-white py-2 px-20 rounded-lg">
                Add Music
              </button>
            </label>
          </div>
        </div>
        <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4">
          Music Listed
        </div>
      </div>
    </>
  );
};

export default Offline;
