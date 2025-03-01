import { ArrowRight } from "lucide-react";
import Image from "next/image";
import bg from "../../public/assets/Images/bg.webp";

export default function ClippedCard() {
  return (
    <div className="relative flex items-center space-x-4 shadow-lg p-6 w-[400px] rounded-xl border border-gray-200">
      {/* Left Image with Mask */}
      <div className="w-16 h-16">
        <img
          src={bg.src}
          alt="Icon"
          className="custom-card object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg leading-tight">
          Explore great neighborhoods
        </h2>
        <p className="text-gray-500 text-sm">
          Explore video tours, in-depth research, and articles on 20,000 neighborhoods.
        </p>
      </div>

      {/* Right Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
        <ArrowRight className="text-gray-600" />
      </div>
    </div>
  );
}
