import { CgMenuRight } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { useAuth } from "../context/UserContext";
import axios from "axios";
import Cookie from "js-cookie";
import toast from "react-hot-toast";
import { useEffect } from "react";
import LoopLogo from "./LoopLogo";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
export default function Header({ children, className }: HeaderProps) {
  // const { userLogged, setUserLogged } = useContext(UserContext);
  const { userLogged, setUserLogged }: any = useAuth();
  const navigate = useNavigate();
  const token = Cookie.get("token");

  const handleLogout = async (): Promise<void> => {
    try {
      await axios.get("https://loop-server.onrender.com/api/auth/logout");
      setUserLogged(false);
      Cookie.remove("token");
      toast.success("User logged out successfully");
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    // console.log(userLogged);
  }, [userLogged]);

  return (
    <div className={twMerge(`h-fit  md:p-6 px-4`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden lg:flex gap-x-2 w-[30%] text-black items-center relative">
          <input
            type="search"
            placeholder="Search Music"
            className="bg-zinc-900 outline-none text-gray-300 rounded-2xl px-4 py-3 w-full pl-14"
          />
          <BiSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
            size={25}
          />
        </div>
        <div className="hidden md:flex items-center gap-x-10 text-white text-xl font-medium">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            Explore
          </Link>
          <Link to="/" className="">
            Music
          </Link>
        </div>
        <div className="md:hidden">
          <LoopLogo />
        </div>

        {userLogged && token ? (
          <>
            <div className=" w-52 text-right md:block hidden">
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 bg-gray-800/10 p-1 text-sm/6 rounded-full font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700/20 data-[open]:bg-gray-700/20 data-[focus]:outline-1 data-[focus]:outline-white">
                  <img
                    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile-Pic"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <div className="">
                    <h3>Arjun</h3>
                  </div>
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-75"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <MenuItems
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-purple-600/30 backdrop-blur-sm p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                  >
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                        <CgProfile className="size-4 fill-white/30" />
                        Profile
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                        <AiOutlineSetting className="size-4 fill-white/80" />
                        Settings
                      </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                        <MdLightMode className="size-4 fill-white/80" />
                        theme
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                        onClick={handleLogout}
                      >
                        <HiOutlineLogout className="size-4 fill-white/30" />
                        Logout
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
            <div className="md:hidden block">
              <CgMenuRight className="text-3xl" />
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center gap-x-4">
            <>
              <div className="md:block hidden">
                <Link to="/register">
                  <Button
                    onClick={() => {}}
                    className="bg-transparent text-neutral-300 font-medium"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
              <div>
                <Link to={"/login"}>
                  <Button
                    onClick={() => {}}
                    className="bg-white px-6 py-2 font-medium"
                  >
                    Log in
                  </Button>
                </Link>
              </div>
            </>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
