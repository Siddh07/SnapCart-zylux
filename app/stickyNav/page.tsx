"use client";

import { House, Search, ShoppingBag, SquareDashed, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: House, label: "House" },
  { href: "/categorypage", icon: SquareDashed, label: "SquareDashed" },

  { href: "/searchPage", icon: Search, label: "search" },
  { href: "/cart", icon: ShoppingBag, label: "ShoppingBag" },

  { href: "/profile", icon: User, label: "User" },
];

export function StickyNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[490px] bg-white z-50 shadow-lg border-t border-gray-100">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-3 py-1"
            >
              <Icon
                size={22}
                className={isActive ? "text-[#ce4002]" : "text-gray-400"}
              />
              <span
                className={`text-[10px] ${isActive ? "text-[#ce4002] font-medium" : "text-gray-400"}`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
