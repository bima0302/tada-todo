import Image from "next/image";
import { MdMenu, MdAccountCircle, MdEventNote } from "react-icons/md";

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
        <div className="container">
          {/* make input form to make new todo */}
          <form class="rounded-lg bg-white p-10 shadow-lg">
            <div class="mb-4 flex items-center">
              <input
                type="text"
                class="w-full rounded-lg border border-gray-400 p-2"
                placeholder="What needs to be done?"
              />
              <button class="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
                <MdEventNote size={24} />
              </button>
            </div>
          </form>
        </div>
        {/* footer */}
        <div className="bg-gray-100 h-16 flex items-center justify-between sticky bottom-0">
          <div className="mx-auto">Build With &hearts; by Bima Setyo</div>
        </div>
      </div>
    </>
  );
}
