import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function Contact() {
  return (
    <section className="pt-20 pb-16">
      <div data-aos="zoom-in" className="w-full myContainer">
        <Image
          alt="Helikia flyer"
          src="/images/program_flyer.png"
          height={500}
          width={500}
          className="w-full object-contain  max-w-[600px] mx-auto"
        />
      </div>

      <section id="contact" className="bg-primary/80 text-white mt-20">
        <div className="myContainer pt-7">
          <h2 className="text-center">Contact</h2>
          <p className="text-center text-sm mt-5 max-w-[400px] mx-auto sm:text-base">
            We are so glad to have you
            <br />
            <br />
            Join the WhatsApp group of the Youth Word & Prayer Retreat below for
            more update on the Retreat.
          </p>
          <Button
            size="sm"
            theme="secondary"
            className="mx-auto mt-[30px] mb-7 sm:mb-10"
          >
            Join
          </Button>
        </div>
        <hr className="text-white" />
        <div className="myContainer flex flex-col items-center pt-5 pb-7 sm:pt-10 sm:pb-10 sm:text-xl">
          <div className="flex flex-col gap-4">
            <Link href="tel:+2348148822113" className="flex items-center gap-6">
              <FaPhone className="text-xl rotate-y-180" />
              <span>0814 882 2113</span>
            </Link>
            <Link
              href="mailto:rccgpopyaya@gmail.com"
              className="flex items-center gap-6"
            >
              <AiOutlineMail className="text-xl rotate-y-180" />
              <span>rccgpopyaya@gmail.com</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="myContainer">
        <h2 className="text-center mt-10">Socials</h2>
        <div className="flex gap-2 items-center mt-3 flex-wrap sm:gap-3 sm:mt-10 text-primary justify-center">
          <Link
            href="https://www.instagram.com/rccg_princeofpeace?igsh=dHcyODV0NXByZTNw"
            target="_blank"
          >
            <FaInstagram className="text-[34px] sm:text-4xl" />
          </Link>
          <Link
            href="https://www.instagram.com/rccg_princeofpeace?igsh=dHcyODV0NXByZTNw"
            target="_blank"
          >
            <BiLogoFacebookCircle className="text-[34px] sm:text-4xl" />
          </Link>
        </div>
      </section>
    </section>
  );
}
