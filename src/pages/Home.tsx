import Header from "../components/Header";
import ListItems from "../components/ListItems";
import RightBar from "../components/RightBar";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="h-screen flex-1 overflow-y-auto py-2 ">
        <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
          <Header>
            <div className="mb-2">
              {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
              <ListItems />
            </div>
          </Header>
        </div>
      </div>
      <RightBar />
    </>
  );
}
