import { House, Search, ShoppingBag, SquareDashed, User } from 'lucide-react';
import Link from 'next/link';


export function StickyNav() {
  return (
    <div className="sticky bottom-0 z-50 bg-white text-gray-500 w-full shadow-[0_-1px_4px_rgba(0,0,0,0.08)]">
      <span className="flex flex-row justify-around w-full px-6 py-3">
      
        <House size={24} className="text-[#da7041] cursor-pointer" />
  
        <SquareDashed size={24} className="hover:text-[#da7041] cursor-pointer" />
        <Search size={24} className="hover:text-[#da7041] cursor-pointer" />
  <ShoppingBag size={24} className="hover:text-[#da7041] cursor-pointer" />
   


  <Link href="/profile" >
  <User size={24} className="hover:text-[#da7041] cursor-pointer" />
  </Link>
        
      </span>
    </div>
  );
}