import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.25,
        }}
        className="flex flex-row items-center"
      >
        {/*Social Icons */}
        <SocialIcon
          className="icon-hover"
          target="_blank"
          url="https://www.linkedin.com/in/vn-phamviethung/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="icon-hover"
          url="https://github.com/pvhuwung"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="icon-hover"
          url="https://www.facebook.com/PhamVietHungHL"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="icon-hover"
          url="https://www.youtube.com/@pvhuwung"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.25,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <Link
          href="#contact"
          className=" uppercase hidden md:inline-flex text-sm text-gray-400 "
        >
          Get in touch
        </Link>
      </motion.div>
    </header>
  );
}
