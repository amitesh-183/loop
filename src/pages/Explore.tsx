import Sidebar from "../components/sidebar";
import Header from "../components/Header";

const Explore = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full mt-2 mr-2 bg-gradient-to-b from-purple-800/30 to-neutral-950 rounded-lg">
        <Header />
      </div>
    </div>
  );
};

export default Explore;
