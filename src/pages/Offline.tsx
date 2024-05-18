import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import Sidebar from "../components/sidebar";
import local from "../assets/images/local-indicate.png";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import MobileHeader from "../components/MobileHeader";
// import MusicPlayer from "../components/MusicPlayer";

const Offline = () => {
  const [selectedFile] = useState(null);
  const [musicList, setMusicList] = useState([]);

  const handleFileChange = () => {
    // setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = () => {
      const musicFile = {
        // name: selectedFile.name,
        // data: event.target.result,
      };
      const updatedMusicList = [...musicList, musicFile];
      // setMusicList(updatedMusicList);
      localStorage.setItem("musicList", JSON.stringify(updatedMusicList));
    };
    reader.readAsDataURL(selectedFile);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("musicList");
    setMusicList([]);
  };

  return (
    <>
      <Sidebar />
      <div className=" bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2 rounded-lg max-h-[97vh] overflow-y-scroll">
        <MobileHeader />
        <div className=" bg-white/10 rounded-lg sm:px-10 px-6 py-3 backdrop-blur m-4 flex justify-between sm:flex-row flex-col gap-4 items-center">
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
          <div className=" flex justify-between sm:flex-row flex-col gap-4">
            <div className=" sm:w-1/2 w-full">
              <h2 className=" text-2xl font-black">
                Add Your Music Details Here
              </h2>
              <div className="py-4">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="name">Title</label>
                    <input
                      type="text"
                      className="px-4 py-1 bg-white/5 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="name">Artists</label>
                    <input
                      type="text"
                      className="px-4 py-1 bg-white/5 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="genre">Genre</label>
                    <input
                      type="text"
                      className="px-4 py-1 bg-white/5 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="tags">Tags</label>
                    <input
                      type="text"
                      className="px-4 py-1 rounded-lg bg-white/5"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mr-2 mt-2">
                  <label htmlFor="name">Poster Image</label>
                  <div className="flex justify-between items-center bg-white/5 px-2 py-1 rounded-lg">
                    <em className="text-ellipsis">Image src....</em>
                    <GrClose className="hover:text-purple-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <h2 className=" text-2xl font-black text-center">
                Add or Drop Your Music Here
              </h2>
              <div className="flex relative justify-center items-center h-[200px] mx-auto my-4 max-w-xl border rounded-lg border-dashed px-4">
                <input
                  type="file"
                  className=" absolute opacity-0 inset-0 max-w-xl"
                  onChange={handleFileChange}
                />
                <BsFillFileEarmarkMusicFill className=" text-6xl fill-purple-400/40" />
              </div>
              <div className=" flex justify-center">
                <label htmlFor="music">
                  <input
                    type="file"
                    name="music"
                    id="music"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleUpload}
              className="bg-purple-600 text-white py-2 px-20 rounded-lg"
            >
              Add Music
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-6">
          <h4 className="text-2xl">Local Music</h4>
          <button
            onClick={clearLocalStorage}
            className=" bg-red-500 px-2 text-sm py-1 rounded-lg"
          >
            Clear Music List
          </button>
        </div>
        {musicList.length <= 0 ? (
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4">
            No Local Music Available
          </div>
        ) : (
          <ul className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4">
            {/* {musicList.map((music, index) => (
              <li key={index}>{music.name}</li>
            ))} */}
          </ul>
        )}
      </div>
      {/* <MusicPlayer
        selectedSong={selectedSong}
        onSongEnd={handleSongEnd}
        onPlayNext={playNextSong}
        onPlayPrevious={playPreviousSong}
      /> */}
    </>
  );
};

export default Offline;
