import Image from "next/image";
import { MdMenu, MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <div className="max-w-sm mx-auto">
        {/* header */}
        <div className="bg-gray-100 h-12 flex items-center justify-between sticky top-0">
          <div className="ml-4 mr-6">
            <MdMenu size={24} />
          </div>
          <div className="text-lg">Tada Todo</div>
          {/* add user image on right */}
          <div className="ml-6 mr-4">
            <MdAccountCircle size={24} />
          </div>
        </div>
        {/* body */}
        <div className="bg-white h-screen">Body</div>
        {/* footer */}
        <div className="bg-gray-100 h-16 flex items-center justify-between sticky bottom-0">
          <div className="ml-4 mr-6">Footer</div>
        </div>
      </div>
    </>
  );
}
