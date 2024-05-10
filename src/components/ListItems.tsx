import { useEffect, useState } from "react";
import dummyData from "../data/DummyData";
import MusicPlayer from "./MusicPlayer";
import { useAuth } from "../context/UserContext";

// Define the type for a song
interface Song {
  music_id: number;
  poster: string;
  music_name: string;
  artist: string;
  music_file: string;
}

export default function ListItems() {
  // Define the types for selectedSong and currentIndex
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { userLogged }: any = useAuth();

  useEffect(() => {
    if (currentIndex !== null) {
      setSelectedSong(dummyData[currentIndex]);
    }
  }, [currentIndex]);

  // Define the type for the index argument
  const handleSongClick = (index: number) => {
    setCurrentIndex(index);
  };

  const playNextSong = () => {
    setCurrentIndex((prevIndex: number | null) =>
      prevIndex !== null
        ? prevIndex === dummyData.length - 1
          ? 0
          : prevIndex + 1
        : null
    );
  };

  const playPreviousSong = () => {
    setCurrentIndex((prevIndex: number | null) =>
      prevIndex !== null
        ? prevIndex === 0
          ? dummyData.length - 1
          : prevIndex - 1
        : null
    );
  };

  const handleSongEnd = () => {
    playNextSong();
  };

  return (
    <>
      <div
        className={`grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center gap-4 my-2 ${
          selectedSong && userLogged ? "h-[68vh]" : "max-h-[80vh]"
        } overflow-y-scroll`}
      >
        {dummyData.map((item, index) => (
          <div key={item.music_id} onClick={() => handleSongClick(index)}>
            <div className="py-3 hover:bg-gradient-to-b from-purple-700/20 to-zinc-700/10 cursor-pointer rounded-lg duration-300 ease-linear md:px-4 px-1">
              <div className=" relative">
                <img
                  src={item.poster}
                  className="md:w-[200px] md:h-[200px] w-[200px] h-[200px] object-cover rounded-lg"
                  alt="img"
                />
              </div>
              <p className=" font-semibold md:text-xl sm:text-lg mt-2 text-base">
                {item.music_name}
              </p>
              <p className=" md:text-base sm:text-sm text-xs text-gray-500">
                {item.artist}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedSong && userLogged && (
        <MusicPlayer
          selectedSong={selectedSong}
          onSongEnd={handleSongEnd}
          onPlayNext={playNextSong}
          onPlayPrevious={playPreviousSong}
        />
      )}
    </>
  );
}
