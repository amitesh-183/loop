import { useState } from "react";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import RightBar from "../components/RightBar";
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
      <div className="h-screen flex-1 overflow-y-auto py-2">
        <div className="bg-gradient-to-b from-purple-800/30 to-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
          <Header>
            {userLogged ? (
              <div className="mb-2">
                {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
                <ListItems />
              </div>
            ) : (
              <div className="mb-2" onClick={open}>
                {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
                <ListItems />
              </div>
            )}
          </Header>
        </div>
      </div>
      <RightBar />
    </>
  );
}
