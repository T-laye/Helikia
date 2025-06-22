"use client";
import Link from "next/link";
import Button from "./ui/Button";
import { MdMenu } from "react-icons/md";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";
import gsap from "gsap";
import { useNavStore } from "../store/variables";
import Logo from "./ui/Logo";
import { useEffect } from "react";

const Header = () => {
  const { closeNav, isNavOpen, openNav } = useNavStore();

  useEffect(() => {
    gsap.fromTo(
      ".li, .logo",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        // ease: "elastic.out(1, 0.4)",
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <header
      className={`z-50 bg-white-background bg-primary h-[65px]  sm:h-[80px] fixed left-0 right-0 top-0`}
    >
      <div
        onClick={closeNav}
        className={`${
          isNavOpen ? "translate-x-0" : "-translate-x-[200%]"
        } fixed sm:hidden bg-[#19100090] duration-300  z-[999] top-0 bottom-0 left-0 right-0 h-screen`}
      ></div>

      <div className="myContainer mx-auto h-full flex justify-center items-center ">
        {/* <Logo /> */}
        <nav
          className={` ${
            isNavOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-[200%]"
          }  max-sm:fixed z-[1000] max-sm:rounded-br-2xl max-sm:rounded-tr-2xl max-sm:bg-white-background max-sm:max-w-xs top-0 left-0 bottom-0 max-sm:w-7/12 max-sm:px-4 duration-300 max-sm:bg-white`}
        >
          <div className=" flex sm:hidden mt-10 mb-5 mobile">
            <Logo h="h-32 -ml-5" />
          </div>
          <ul
            onClick={closeNav}
            className={`${
              isNavOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-[200%]"
            }  flex max-sm:px-5 max-lg:text-lg gap-6 sm:gap-12 sm:text-white max-sm:flex-col duration-300 `}
          >
            <Link href="/#home">
              <li className="mobile li hover:font-medium">Home</li>
            </Link>
            <Link href="/#about" className="">
              <li className="mobile hover:font-medium li">About</li>
            </Link>
            <Link href="/#keyNote">
              <li className="mobile hover:font-medium li">Key notes</li>
            </Link>
            <Link href="/#contact">
              <li className="mobile hover:font-medium li">Contact</li>
            </Link>
          </ul>
          <div className="sm:hidden mobile li mt-10">
            <Button size="sm" theme="primary" type="button" className="w-full">
              Register
            </Button>
          </div>
        </nav>
        <div className="bg-gren-400 w-full sm:hidden">
          <MdMenu
            onClick={openNav}
            size={32}
            className="place-self-end text-white lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
