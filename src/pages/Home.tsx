import { useState } from "react";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import Sidebar from "../components/sidebar";
import ReminderModal from "../components/ReminderModal";
import { useAuth } from "../context/UserContext";
import HeroCarousel from "../components/HeroCarousel";
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
      <div className="">
        <div className=" overflow-hidden rounded-xl my-2 mr-2 bg-gradient-to-b from-purple-800/30 to-neutral-950">
          <Header />
          <div className="h-[87vh] overflow-y-auto">
            <HeroCarousel />
            {userLogged ? (
              <div className="px-3">
                {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
                <ListItems start={0} end={5} title="Latest Music" />
                <div>
                  <h4 className="py-4 text-3xl font-semibold">AI Music</h4>
                  <div className="flex gap-6 justify-around">
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/musician-playing-electric-guitar_23-2151414312.jpg?t=st=1716040258~exp=1716043858~hmac=a05c4123e533dc29bb05efc469b68b5cdf543bef0bbe702dcf17bd909a0db565&w=740"
                        alt=""
                        className="h-[360px] w-[240px] rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/musician-playing-electric-guitar_23-2151414213.jpg?t=st=1716040309~exp=1716043909~hmac=780363bdab9c08cd8f7ef98d7758dd81efd53ed18d192364e171bb95f3a233bb&w=740"
                        alt=""
                        className="h-[360px] w-[240px] rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/medium-shot-woman-djing-with-augmented-reality-glasses_23-2151425481.jpg?t=st=1716040338~exp=1716043938~hmac=c68ae88cd1796c85fb98aac7cb811f486a71153504e5ce74654a32d2065dc2fe&w=740"
                        alt=""
                        className="h-[360px] w-[240px] rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/medium-shot-talented-woman-singing_23-2151194130.jpg?t=st=1716040404~exp=1716044004~hmac=ee2b4d11e6f0373d4b7f717ae165ede1ed3ed2b90d7560d970f85390d60c77a5&w=740"
                        alt=""
                        className="h-[360px] w-[240px] rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src="https://img.freepik.com/free-photo/people-dancing-surrounded-by-bright-neon-lights-party-with-virtual-reality-headset_23-2151419865.jpg?t=st=1716040446~exp=1716044046~hmac=6d68e4418418b2fc0f28407187353dc18178d8a68d90315e7a3fa163952f35cf&w=740"
                        alt=""
                        className="h-[360px] w-[240px] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
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
