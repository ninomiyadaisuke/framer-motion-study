import { useEffect, useState } from "react";
// import next Image
import Image from "next/image";
// import next Link
import Link from "next/link";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ headerData, navData }) => {
  // header state
  const [header, setHeader] = useState(false);
  // navMobile state
  const [navMobile, setNavMobile] = useState(false);
  // destructure hero data
  const { logoImgV1, logoImgV2, btnText } = headerData;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  }, []);
  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* logo v1 */}
      <Link href={"/"}>
        <a>
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            width={header ? 120 : 212}
            height={50}
          />
        </a>
      </Link>
      {/* nav & button wrapper - initially hidden */}
      <div className="hidden lg:flex gap-x-[96px] z-[9999]">
        {/* nav */}
        <Nav navData={navData} header={header} />
        {/* btn */}
        <button className="btn">{btnText}</button>
      </div>
      {/* nav menu btn- hide on large screens */}
      <div
        onClick={() => setNavMobile((prev) => !prev)}
        className="lg:hidden cursor-pointer"
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>
      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl  transition-all `}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
