import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function InputBasic() {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        placeholder="Search?"
        className="pl-10 
  bg-[#f5f5f5]  text-black  rounded-full
  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 
  
h-12

  "
      />
    </div>
  );
}
