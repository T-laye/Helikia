import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import Link from "next/link";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-16 pb-[40px] sm:pb-[62px]  sm:mt-[80px] hero_bg text-white"
    >
      <div className="myContainer pt-[20px] sm:pt-[40px]">
        <div className="flex gap-1 items-center">
          <div className="h-[67px] sm:h-[100px]" data-aos="flip-left">
            <Image
              src="/images/yaya_logo.svg"
              alt="Yaya Logo"
              height={400}
              width={400}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="text-sm sm:text-lg" data-aos="fade-up">
            Prince Of Peace Area Headquarters
          </h3>
        </div>

        <div>
          <h1
            data-aos="fade-in"
            data-aos-delay="200"
            className="text-2xl font-bold mt-2 leading-[170%] sm:text-5xl sm:mt-6 max-w-4xl"
          >
            YOUTH WORD AND PRAYER RETREAT,2025 [HELIKIA]
          </h1>
          <div
            data-aos="fade-up"
            className="flex gap-1 items-center mt-5 flex-wrap sm:gap-3 sm:mt-10"
          >
            <Link
              href="https://www.instagram.com/rccg_princeofpeace?igsh=dHcyODV0NXByZTNw"
              target="_blank"
            >
              <FaInstagram className="text-2xl sm:text-3xl" />
            </Link>
            <Link
              href="https://www.instagram.com/rccg_princeofpeace?igsh=dHcyODV0NXByZTNw"
              target="_blank"
            >
              <BiLogoFacebookCircle className="text-2xl sm:text-3xl" />
            </Link>
            <p className="sm:text-xl">Prince of Peace Area</p>
          </div>

          <Button
            
            size="md"
            className="mt-[22px] sm:mt-[42px]"
          >
            Register
          </Button>
        </div>
      </div>
    </section>
  );
}
