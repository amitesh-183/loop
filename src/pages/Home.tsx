import { useState } from "react";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import Sidebar from "../components/sidebar";
import ReminderModal from "../components/ReminderModal";
import { useAuth } from "../context/UserContext";
// import Explore from "../components/Music/Explore";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { userLogged }: any = useAuth();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <ReminderModal isOpen={isOpen} close={close} />
      <Sidebar />
      <div className=" h-[100dvh] flex-1 overflow-y-auto">
        <div className=" overflow-hidden rounded-xl my-2 mr-2 bg-gradient-to-b from-purple-800/30 to-neutral-950">
          <Header />
          {userLogged ? (
            <div className="px-3">
              {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
              <ListItems />
            </div>
          ) : (
            <div className="mb-2 rounded-lg" onClick={open}>
              {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
              <ListItems />
            </div>
          )}
        </div>
      </div>
      {/* <RightBar /> */}
    </>
  );
}
