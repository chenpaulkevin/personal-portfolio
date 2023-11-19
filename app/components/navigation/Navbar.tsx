import React from "react";
import Image from "next/image";

//Components:
import MenuButton from "./MenuButton";

function Navbar() {
  return (
    <>
      <nav className="flex px-6 md:px-8 lg:px-0 text-primary justify-between items-center mt-8 container mx-auto">
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            priority
            style={{ width: "92px", height: "auto" }}
          ></Image>
        </div>
        <div>
          <MenuButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
