import React from "react";
import { SiPinboard } from "react-icons/si";

export default function KeyNote({
  children,
  text,
}: Readonly<{
  children?: React.ReactNode;
  text: string;
}>) {
  return (
    <div data-aos="fade-up">
      <div className="flex gap-[10px] sm:gap-5">
        <div className="min-h-6 min-w-6">
          <SiPinboard className="text-primary text-2xl rotate-y-180" />
        </div>
        <div>
          <p className="uppercase">{text}</p>
          <div className="uppercase">{children}</div>
        </div>
      </div>
    </div>
  );
}
