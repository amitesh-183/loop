import { FaFolder, FaMusic, FaPodcast } from "react-icons/fa";
import Box from "./Box";
import { FaHeart, FaRadio } from "react-icons/fa6";
import { SiLoop } from "react-icons/si";
import { LuListPlus } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";
// import { Link } from "react-router-dom";
import LoopLogo from "./LoopLogo";
import { Link } from "react-router-dom";

interface sidebarProps {
  hidden?: string;
}

export default function Sidebar({ hidden }: sidebarProps) {
  const sideBarData = [
    {
      title: "Discover",
      subparts: [
        {
          title: "podcasts",
          redirect: "/podcast",
          icon: <FaPodcast />,
        },
        {
          title: "Radio",
          redirect: "/radio",
          icon: <FaRadio />,
        },
        {
          title: "New Releases",
          redirect: "/new-releases",
          icon: <FaMusic />,
        },
      ],
    },
    {
      title: "Playlists",
      subparts: [
        {
          title: "Loop Originals",
          redirect: "/loop-originals",
          icon: <SiLoop />,
        },
        {
          title: "your Playlist",
          redirect: "/playlist",
          icon: <MdPlaylistPlay />,
        },
        {
          title: "Liked Songs",
          redirect: "/liked-songs",
          icon: <FaHeart />,
        },
        {
          title: "Create Playlist",
          redirect: "/create-playlist",
          icon: <LuListPlus />,
        },
        {
          title: "Local Audio",
          redirect: "/local-music",
          icon: <FaFolder />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-full">
      <div
        className={` min-w-[270px] w-auto ${
          hidden ? hidden : "hidden bg-black p-2"
        }  md:flex max-w-[600px]  h-screen flex-col  gap-y-2`}
      >
        <Box className="overflow-y-auto h-full bg-gradient-to-b from-purple-800/30 to-neutral-950 rounded-lg">
          {/* <Link to={"/"} className="flex justify-center items-center gap-2">
            <div className="text-3xl py-6 font-bold text-center">L</div>
            <img src={loop} alt="loop-logo" className=" w-14" />

            <div className="text-3xl py-6 font-bold text-center">P</div>
          </Link> */}
          <LoopLogo />
          <div className="flex flex-col gap-y-1">
            {sideBarData.map((item) => (
              <div className="py-2 px-10 " key={item.title}>
                <div className="text-xl py-3 font-bold">{item.title}</div>

                {item.subparts.map((subItem) => (
                  <div className=" text-base " key={subItem.title}>
                    <Link
                      to={subItem.redirect}
                      className="flex  items-center cursor-pointer gap-x-4 hover:bg-gray-50 hover:bg-opacity-10 px-4 py-2 rounded-lg"
                    >
                      <div className="scale-125">{subItem.icon}</div>
                      <div className=""> {subItem.title}</div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
            <button className="bg-[#FFCA6E] text-black font-semibold w-4/6 mx-5  py-2 rounded-md">
              Friends Playlists
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
