import logo from "@/public/logo.png";
import { Star } from "lucide-react";
import Image from "next/image";
import { InputBasic } from "../search/page";

export function Nav() {
  return (
    <nav className=" px-4 py-3 bg-white shadow-md relative ">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start ">
          <div
            className="border-grey-100 border-5 rounded-lg inline-flex ml-8
     mb-2"
          >
            <Image src={logo} alt="SnapCart Logo" width={50} height={40} />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-start   ml-30 -mt-17">
        <span className="text-lg font-extrabold text-[#1A1A1A] ">
          SnapCart - Fresh Groceries Delivered
        </span>
        <span className="text-sm text-gray-600">
          Fresh groceries delivered nationwide
        </span>
        <div className="flex flex-row items-center gap-1 text-xs pt-2 text-gray-500">
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          4.9(196)
        </div>
      </div>
      <div className="ml-8 pt-7">
        <InputBasic />
      </div>
    </nav>
  );
}
