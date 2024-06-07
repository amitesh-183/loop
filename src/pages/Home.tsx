import { useState } from "react";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import Sidebar from "../components/sidebar";
import ReminderModal from "../components/ReminderModal";
import { useAuth } from "../context/UserContext";
// import HeroCarousel from "../components/HeroCarousel";
// import Explore from "../components/Music/Explore";

// import aiMusic1 from "../assets/images/ai-section/ai_music_1.webp";
// import aiMusic2 from "../assets/images/ai-section/ai_music_2.webp";
// import aiMusic4 from "../assets/images/ai-section/ai_music_4.webp";
// import aiMusic5 from "../assets/images/ai-section/ai_music_5.webp";

// const data = [
//   {
//     id: 1,
//     poster: aiMusic1,
//   },
//   {
//     id: 2,
//     poster: aiMusic2,
//   },
//   {
//     id: 3,
//     poster: aiMusic4,
//   },
//   {
//     id: 4,
//     poster: aiMusic5,
//   },
// ];

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
      <div className="">
        <div className=" overflow-hidden rounded-xl my-2 mr-2 bg-gradient-to-b from-purple-800/30 to-neutral-950">
          <Header />
          <div className="h-[87vh] overflow-y-auto pb-20">
            {/* <HeroCarousel /> */}
            {userLogged ? (
              <div className="px-3">
                {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
                <ListItems start={0} end={5} title="Latest Music" />
                {/* <div>
                  <h4 className="py-4 text-3xl font-semibold">AI Music</h4>
                  <div className="flex md:gap-6 sm:gap-4 gap-2 justify-around">
                    {data?.length > 0
                      ? data.map((item) => (
                          <div key={item.id}>
                            <img
                              src={item.poster}
                              alt=""
                              className="xl:h-[200px] lg:h-[300px] md:h-[220px] sm:h-[200px] h-[100px] xl:w-[80px] lg:w-[200px] md:w-[180px] sm:w-[160px] w-[100px]  rounded-lg object-cover"
                            />
                          </div>
                        ))
                      : ""}
                  </div>
                </div> */}
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
      </div>
      {/* <RightBar /> */}
    </>
  );
}
