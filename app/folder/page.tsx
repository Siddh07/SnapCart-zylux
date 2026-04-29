import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mb-90">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Your one-stop online grocery store. Fresh products delivered to your
          doorstep.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="text-orange-600 w-5 h-5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">+1 (800) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-orange-600 w-5 h-5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">support@snapcart.test</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-orange-600 w-5 h-5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">123 Market Street, New York, NY 10001</span>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-400 w-full max-w-md mt-6" />
<div className="my-1 mb-15 ">
    <span className=" text-[#778282]">© 2026 SnapCart. All Rights Reserved.


</span>
</div>


    </div>
  );
}