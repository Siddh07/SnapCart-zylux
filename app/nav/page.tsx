import logo from "@/public/logo.png";
import { Star } from "lucide-react";
import Image from "next/image";
import { InputBasic } from "../search/page";

export function Nav() {
  return (
    <nav className=" px-0 py-3 bg-white shadow-md relative    ">
      <div className="pt-7 ">
        <div className="flex flex-row   ">
          <div className="flex flex-col items-start ">
            <div
              className="border-grey-100 border-5 rounded-lg inline-flex ml-8
  "
            >
              <Image
                src={logo}
                alt="SnapCart Logo"
                width={70}
                height={70}
                className="     "
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-start   ml-35 -mt-20   ">
          <span className="text-lg font-extrabold text-[#1A1A1A]  ">
            SnapCart - Fresh Groceries Delivered
          </span>
          <span className="text-sm text-black-600">
            Fresh groceries delivered nationwide
          </span>
          <div className="flex flex-row items-center gap-1 text-sm pt-2 text-[#b45309] ">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            4.9(196)
          </div>
        </div>
      </div>

      <div className="ml-8 pt-7 mr-4">
        <InputBasic />
      </div>
    </nav>
  );
}
