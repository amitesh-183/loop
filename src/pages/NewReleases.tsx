import Sidebar from "../components/sidebar";
import newRelease from "../assets/images/new-release-top.gif";
import playlistIcon from "../assets/images/playlist-icon.png";

const NewReleases = () => {
  return (
    <>
      <Sidebar />
      <div className=" bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2">
        <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 flex justify-between items-center">
          <div>
            <h2 className=" font-bold text-3xl">Enjoy newly Released Songs</h2>
            <p className=" text-gray-50/40 mt-3 text-xl">
              New Songs waiting for you
            </p>
          </div>
          <div>
            <img src={newRelease} alt="" className=" w-52" />
          </div>
        </div>
        <h4 className=" px-4 py-3 text-5xl">Songs</h4>
        <div className=" flex flex-start">
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img src={playlistIcon} alt="" className=" w-52" />
            Playlists
          </div>
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img src={playlistIcon} alt="" className=" w-52" />
            Playlists
          </div>
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img src={playlistIcon} alt="" className=" w-52" />
            Playlists
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReleases;
