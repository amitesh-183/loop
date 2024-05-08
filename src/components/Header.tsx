import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { useAuth } from "../context/UserContext";
import axios from "axios";
import Cookie from "js-cookie";
import toast from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
export default function Header({ children, className }: HeaderProps) {
  // const { userLogged, setUserLogged } = useContext(UserContext);
  const { userLogged, setUserLogged }: any = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout");
      setUserLogged(false);
      Cookie.remove("token");
      toast.success("User logged out successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={twMerge(`h-fit  p-6`, className)}>
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
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white justify-center items-center hover:opacity-75 transition">
            <HiHome className="text-black" size={25} />
          </button>
          <button className="rounded-full p-2 bg-white justify-center items-center hover:opacity-75 transition">
            <BiSearch className=" text-black" size={25} />
          </button>
        </div>
        {userLogged ? (
          <>
            <div>
              <Button
                onClick={handleLogout}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center gap-x-4">
            <>
              <div>
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
