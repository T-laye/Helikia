import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ h = "h-12" }: { h: string }) => {
  return (
    <Link href="/" className={`mobile ${h}`}>
      <Image
        src="/images/yaya_logo_no_bg.svg"
        height={100}
        width={100}
        className="h-full w-full object-contain"
        alt="Yaya Logo"
      />
    </Link>
  );
};

export default Logo;
