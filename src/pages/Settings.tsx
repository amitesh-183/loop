import { RxCross2 } from "react-icons/rx";

const Settings = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-10">
        {/* tabs */}
        <div className="col-span-4">
          <h2>Settings</h2>
        </div>
        {/* modules */}
        <div className="relative col-span-8">
          <h2>Account Settings</h2>
          <div className="absolute top-10 right-8">
            <RxCross2 className="w-10 h-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
