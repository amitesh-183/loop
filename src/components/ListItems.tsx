import React from "react";
import { useSongList } from "../context/SongListContext";
import { useMusicPlayer } from "../context/MusicPlayerContext";

interface listProps {
  title?: string;
  start?: number;
  end?: number;
}

const ListItems: React.FC<listProps> = ({ start, end, title }) => {
  const { songList } = useSongList();
  const { setSelectedSong, setCurrentTime } = useMusicPlayer();

  const handleSongClick = (index: number) => {
    const selectedSong = songList.find((song) => song.music_id === index);
    if (selectedSong) {
      setSelectedSong(selectedSong);
      setCurrentTime(0);
    }
  };

  return (
    <>
      <h4 className="px-2 font-semibold text-2xl">{title}</h4>
      <div
        className={`grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 justify-items-center gap-4 my-2 overflow-y-scroll`}
      >
        {songList.slice(start, end).map((item) => (
          <div
            key={item.music_id}
            onClick={() => handleSongClick(item.music_id)}
          >
            <div className="py-3 hover:bg-gradient-to-b from-purple-700/20 to-zinc-700/10 cursor-pointer rounded-lg duration-300 ease-linear md:px-4 px-2">
              <div className="relative">
                <img
                  loading="lazy"
                  src={item.poster}
                  className="md:w-[200px] md:h-[200px] w-[200px] h-[200px] object-cover rounded-lg"
                  alt="img"
                />
              </div>
              <p className="font-semibold md:text-xl sm:text-lg mt-2 text-base">
                {item.music_name}
              </p>
              <p className="md:text-base sm:text-sm text-xs text-gray-500">
                {item.artist}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListItems;
