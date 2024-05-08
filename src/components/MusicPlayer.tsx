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
    <div className="music-player absolute bottom-0 w-full left-0">
      <div className=" relative">
        <div className="absolute z-20  h-2 w-full rounded-lg bg-gray-400 bg-opacity-5 text-center text-white text-xs">
          {/* {formatTime(currentTime)} / {formatTime(duration)} */}
        </div>
        <div
          style={{ width: `${(currentTime / duration) * 100}%` }}
          className={`absolute z-20  h-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-center shadow-2xl shadow-blue-600 text-white text-xs`}
        ></div>
      </div>
      <div className=" bg-gray-200 bg-opacity-10 w-full backdrop-blur flex gap-4 items-center justify-between left-0 px-10 py-4">
        <div className="flex gap-4 w-[50%]">
          <img
            src={selectedSong.poster}
            className="w-[70px] h-[80px] object-cover rounded-lg"
            alt={selectedSong.music_name}
          />
          <div>
            <h3>Playing : {selectedSong.music_name}</h3>
            <p>Artist: {selectedSong.artist}</p>
            <div className=" text-white text-base">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          <audio
            src={selectedSong.music_file}
            ref={audioRef}
            onEnded={onSongEnd}
          ></audio>
        </div>
        <div className="flex items-center gap-6 w-[40%]">
          <div
            className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
            onClick={onPlayPrevious}
          >
            <AiFillCaretLeft className="text-3xl" />
          </div>
          {isPlaying ? (
            <div
              className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
              onClick={togglePlayPause}
            >
              <FaPause className="text-2xl" />
            </div>
          ) : (
            <div
              className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
              onClick={togglePlayPause}
            >
              <FaPlay className="text-2xl" />
            </div>
          )}
          <div
            className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
            onClick={onPlayNext}
          >
            <AiFillCaretRight className="text-3xl" />
          </div>
        </div>
        <div className="flex items-center gap-4 w-[10%]">
          <CgPlayListAdd className="text-4xl" />
          <BsPeopleFill className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
