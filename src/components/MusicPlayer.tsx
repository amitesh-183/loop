import { FiMaximize2 } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface Song {
  music_id: number;
  poster: string;
  music_name: string;
  artist: string;
  music_file: string;
}

interface MusicPlayerProps {
  selectedSong: Song;
  onSongEnd: () => void;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  selectedSong,
  onSongEnd,
  onPlayNext,
  onPlayPrevious,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleFullScreenPlayer = () => {
    setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, formatTime]);

  useEffect(() => {
    // Start playing the audio when a new song is selected
    setIsPlaying(true);
  }, [selectedSong]); // Trigger when selectedSong changes

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);

      return () => {
        audioRef.current?.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  return (
    <>
      {isFullScreen ? (
        <div className="music-player absolute inset-0 h-screen w-full mx-auto">
          <div className=" bg-gray-200 bg-opacity-10 w-full backdrop-blur flex flex-col md:gap-4 gap-10 items-center justify-end left-0 md:px-10 h-screen px-4 md:py-4 py-3">
            <div className="">
              <img
                src={selectedSong.poster}
                className="md:w-[800px] md:h-[500px] w-[40px] h-[40px] object-cover rounded-lg"
                alt={selectedSong.music_name}
              />
              <div>
                <h3 className="md:text-xl sm:text-base text-sm text-nowrap">
                  {selectedSong.music_name}
                </h3>
                <p className="md:text-lg sm:text-sm text-xs text-nowrap text-ellipsis overflow-hidden">
                  {selectedSong.artist}
                </p>
              </div>
              <audio
                src={selectedSong.music_file}
                ref={audioRef}
                onEnded={onSongEnd}
              ></audio>
            </div>
            <div className=" flex items-center justify-between w-full">
              <div>{formatTime(currentTime)}</div>
              <div>{formatTime(duration)}</div>
            </div>
            <div className=" relative w-full">
              <div className="absolute z-20 md:h-2 h-1 w-full rounded-lg bg-gray-400 bg-opacity-5 text-center text-white text-xs">
                {/* {formatTime(currentTime)} / {formatTime(duration)} */}
              </div>
              <div
                style={{ width: `${(currentTime / duration) * 100}%` }}
                className={`absolute z-20 md:h-2 h-1 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-center shadow-2xl shadow-blue-600 text-white text-xs`}
              ></div>
            </div>
            <div className=" flex items-center justify-between w-full">
              <div></div>
              <div className="flex items-center md:gap-6 gap-2">
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                  onClick={onPlayPrevious}
                >
                  <AiFillCaretLeft className="md:text-3xl text-lg" />
                </div>
                {isPlaying ? (
                  <div
                    className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                    onClick={togglePlayPause}
                  >
                    <FaPause className="md:text-2xl text-lg" />
                  </div>
                ) : (
                  <div
                    className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                    onClick={togglePlayPause}
                  >
                    <FaPlay className="md:text-2xl text-lg" />
                  </div>
                )}
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                  onClick={onPlayNext}
                >
                  <AiFillCaretRight className="md:text-3xl text-lg" />
                </div>
              </div>
              <div className="md:flex hidden items-center gap-4">
                <CgPlayListAdd className="text-4xl" />
                <BsPeopleFill className="text-3xl" />
                <FiMaximize2
                  className="text-2xl"
                  onClick={handleFullScreenPlayer}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="music-player absolute md:bottom-0 bottom-10 w-full left-0">
          <div className=" relative">
            <div className="absolute z-20 md:h-2 h-1 w-full rounded-lg bg-gray-400 bg-opacity-5 text-center text-white text-xs">
              {/* {formatTime(currentTime)} / {formatTime(duration)} */}
            </div>
            <div
              style={{ width: `${(currentTime / duration) * 100}%` }}
              className={`absolute z-20 md:h-2 h-1 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-center shadow-2xl shadow-blue-600 text-white text-xs`}
            ></div>
          </div>
          <div className=" bg-gray-200 bg-opacity-10 w-full backdrop-blur flex md:gap-4 gap-10 items-center justify-between left-0 md:px-10 px-4 md:py-4 py-3">
            <div className="flex gap-4 items-center md:w-[50%] w-[40%]">
              <img
                src={selectedSong.poster}
                className="md:w-[70px] md:h-[80px] w-[40px] h-[40px] object-cover rounded-lg"
                alt={selectedSong.music_name}
              />
              <div>
                <h3 className="md:text-xl sm:text-base text-sm text-nowrap">
                  {selectedSong.music_name}
                </h3>
                <p className="md:text-lg sm:text-sm text-xs text-nowrap text-ellipsis overflow-hidden w-20">
                  {selectedSong.artist}
                </p>
                <div className="md:block hidden text-white sm:text-base text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              <audio
                src={selectedSong.music_file}
                ref={audioRef}
                onEnded={onSongEnd}
              ></audio>
            </div>
            <div className="flex items-center md:gap-6 gap-2 md:w-[40%] w-[40%]">
              <div
                className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                onClick={onPlayPrevious}
              >
                <AiFillCaretLeft className="md:text-3xl text-lg" />
              </div>
              {isPlaying ? (
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                  onClick={togglePlayPause}
                >
                  <FaPause className="md:text-2xl text-lg" />
                </div>
              ) : (
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                  onClick={togglePlayPause}
                >
                  <FaPlay className="md:text-2xl text-lg" />
                </div>
              )}
              <div
                className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                onClick={onPlayNext}
              >
                <AiFillCaretRight className="md:text-3xl text-lg" />
              </div>
            </div>
            <div className="md:flex hidden items-center gap-4 md:w-[10%]">
              <CgPlayListAdd className="text-4xl" />
              <BsPeopleFill className="text-3xl" />
              <FiMaximize2
                className="text-2xl"
                onClick={handleFullScreenPlayer}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
