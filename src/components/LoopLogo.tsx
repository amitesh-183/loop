import { Link } from "react-router-dom";
import loop from "../assets/images/loop.png";

const LoopLogo = () => {
  return (
    <Link to={"/"} className="flex justify-center items-center gap-2">
      <div className="text-3xl py-6 font-bold text-center">L</div>
      <img src={loop} alt="loop-logo" className=" w-14 h-14" />

      <div className="text-3xl py-6 font-bold text-center">P</div>
    </Link>
  );
};

export default LoopLogo;
