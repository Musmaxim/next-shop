import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import { FaRegHeart } from "react-icons/fa";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { FaRegUser } from "react-icons/fa";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="h-[8vh] sticky z-[1] bg-slate-300 shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={140} />
        </Link>
        <div className="flex items-center space-x-6">
          <SearchBox />
          <FaRegHeart cursor={"pointer"} size={24} />
          <ShoppingCartButton />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <FaRegUser cursor={"pointer"} size={24} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
