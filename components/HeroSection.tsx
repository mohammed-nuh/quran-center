"use client";

import Image from "next/image";
import {
  BRAND_COLOR,
  BG_COLOR1,
  BG_COLOR2,
  COLOR2,
  DARK_BG_COLOR,
} from "../config/brand";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br flex flex-col items-stretch justify-start relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, ${BG_COLOR1}, ${BG_COLOR2})`,
      }}
    >
      {/* Sticky, responsive Navbar - shadcn NavigationMenu */}
      <nav className="sticky top-0 w-full z-50 bg-white shadow-lg border-b border-white/20">
        <div className="flex items-center justify-between px-4 navbreak:px-6 py-4 navbreak:py-6">
          <div
            className="font-bold text-2xl tracking-widest"
            style={{ color: "black", fontFamily: "TuskerGrotesk, sans-serif" }}
          >
            Quran Center
          </div>
          {/* Desktop menu (visible at md and above) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#home"
                    className="bg-white text-black font-semibold px-4 py-2 rounded-md mx-1 transition-colors hover:!bg-neutral-900 hover:!text-white focus:!bg-neutral-900 focus:!text-white"
                    style={
                      {
                        backgroundColor: "white",
                        color: "black",
                        "--brand": BRAND_COLOR,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onFocus={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#courses"
                    className="bg-white text-black font-semibold px-4 py-2 rounded-md mx-1 transition-colors hover:!bg-neutral-900 hover:!text-white focus:!bg-neutral-900 focus:!text-white"
                    style={
                      {
                        backgroundColor: "white",
                        color: "black",
                        "--brand": BRAND_COLOR,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onFocus={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    Courses
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="bg-white text-black font-semibold px-4 py-2 rounded-md mx-1 transition-colors hover:!bg-neutral-900 hover:!text-white focus:!bg-neutral-900 focus:!text-white"
                    style={
                      {
                        backgroundColor: "white",
                        color: "black",
                        "--brand": BRAND_COLOR,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onFocus={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#register"
                    className="bg-white text-black font-semibold px-4 py-2 rounded-md mx-1 transition-colors hover:!bg-neutral-900 hover:!text-white focus:!bg-neutral-900 focus:!text-white"
                    style={
                      {
                        backgroundColor: "white",
                        color: "black",
                        "--brand": BRAND_COLOR,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onFocus={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    Registration Form
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#why"
                    className="bg-white text-black font-semibold px-4 py-2 rounded-md mx-1 transition-colors hover:!bg-neutral-900 hover:!text-white focus:!bg-neutral-900 focus:!text-white"
                    style={
                      {
                        backgroundColor: "white",
                        color: "black",
                        "--brand": BRAND_COLOR,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onFocus={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    Why Choose Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#enquiry"
                    className="bg-white text-black font-semibold px-4 py-2 rounded-md mx-1 transition-colors hover:!bg-neutral-900 hover:!text-white focus:!bg-neutral-900 focus:!text-white"
                    style={
                      {
                        backgroundColor: "white",
                        color: "black",
                        "--brand": BRAND_COLOR,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    onFocus={(e) =>
                      (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    Enquiry
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* WhatsApp Chat Now button (desktop, visible at md and above) */}
          <div className="hidden lg:flex items-center ml-4">
            <a
              href="https://wa.me/919999999999?text=Hello%20Quran%20Center!%20I%20would%20like%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md shadow transition-colors"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.205C13.41 27.597 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.332-.205-3.418-.607l-.244-.086-4.646 1.309 1.324-4.527-.159-.234C7.205 18.332 7 17.18 7 16c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9zm5.07-6.29c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.139-.184.277-.713.899-.874 1.084-.16.184-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.374-.824-.735-1.38-1.64-1.542-1.917-.16-.277-.017-.427.122-.565.126-.125.277-.32.416-.48.139-.16.185-.277.277-.462.093-.184.046-.347-.023-.485-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.01c-.17 0-.446.064-.68.3-.233.236-.89.87-.89 2.122 0 1.252.911 2.46 1.037 2.632.126.17 1.793 2.74 4.35 3.735.608.209 1.082.334 1.452.427.61.155 1.166.133 1.606.081.49-.058 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.116-.253-.185-.53-.324z" />
              </svg>
              <span className="hidden lg:inline">Chat Now</span>
            </a>
          </div>
          {/* Hamburger and WhatsApp (mobile, visible below lg) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="flex flex-col gap-1.5 w-9 h-9 justify-center items-center"
              aria-label="Open menu"
              onClick={() => {
                const menu = document.getElementById("mobile-nav-menu");
                if (menu) menu.classList.toggle("hidden");
              }}
            >
              <span className="w-7 h-0.5 bg-black rounded transition-all"></span>
              <span className="w-7 h-0.5 bg-black rounded transition-all"></span>
              <span className="w-7 h-0.5 bg-black rounded transition-all"></span>
            </button>
            {/* WhatsApp Chat Now button (mobile) */}
            <a
              href="https://wa.me/919999999999?text=Hello%20Quran%20Center!%20I%20would%20like%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 rounded-md shadow transition-colors"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.205C13.41 27.597 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.332-.205-3.418-.607l-.244-.086-4.646 1.309 1.324-4.527-.159-.234C7.205 18.332 7 17.18 7 16c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9zm5.07-6.29c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.139-.184.277-.713.899-.874 1.084-.16.184-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.374-.824-.735-1.38-1.64-1.542-1.917-.16-.277-.017-.427.122-.565.126-.125.277-.32.416-.48.139-.16.185-.277.277-.462.093-.184.046-.347-.023-.485-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.01c-.17 0-.446.064-.68.3-.233.236-.89.87-.89 2.122 0 1.252.911 2.46 1.037 2.632.126.17 1.793 2.74 4.35 3.735.608.209 1.082.334 1.452.427.61.155 1.166.133 1.606.081.49-.058 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.116-.253-.185-.53-.324z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Mobile menu (visible below md) */}
        <div
          id="mobile-nav-menu"
          className="hidden w-full bg-white border-t border-gray-200 shadow-lg absolute left-0 top-full z-40 md:hidden"
        >
          <ul className="flex flex-col items-center py-4">
            <li>
              <a
                href="#home"
                className="block w-full text-black font-semibold px-6 py-3 rounded-md mb-1 transition-colors hover:!bg-neutral-900 hover:!text-white"
                style={
                  {
                    backgroundColor: "white",
                    color: "black",
                    "--brand": BRAND_COLOR,
                  } as React.CSSProperties
                }
                onClick={() =>
                  document
                    .getElementById("mobile-nav-menu")
                    ?.classList.add("hidden")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block w-full text-black font-semibold px-6 py-3 rounded-md mb-1 transition-colors hover:!bg-neutral-900 hover:!text-white"
                style={
                  {
                    backgroundColor: "white",
                    color: "black",
                    "--brand": BRAND_COLOR,
                  } as React.CSSProperties
                }
                onClick={() =>
                  document
                    .getElementById("mobile-nav-menu")
                    ?.classList.add("hidden")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block w-full text-black font-semibold px-6 py-3 rounded-md mb-1 transition-colors hover:!bg-neutral-900 hover:!text-white"
                style={
                  {
                    backgroundColor: "white",
                    color: "black",
                    "--brand": BRAND_COLOR,
                  } as React.CSSProperties
                }
                onClick={() =>
                  document
                    .getElementById("mobile-nav-menu")
                    ?.classList.add("hidden")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="block w-full text-black font-semibold px-6 py-3 rounded-md mb-1 transition-colors hover:!bg-neutral-900 hover:!text-white"
                style={
                  {
                    backgroundColor: "white",
                    color: "black",
                    "--brand": BRAND_COLOR,
                  } as React.CSSProperties
                }
                onClick={() =>
                  document
                    .getElementById("mobile-nav-menu")
                    ?.classList.add("hidden")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Registration Form
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="block w-full text-black font-semibold px-6 py-3 rounded-md mb-1 transition-colors hover:!bg-neutral-900 hover:!text-white"
                style={
                  {
                    backgroundColor: "white",
                    color: "black",
                    "--brand": BRAND_COLOR,
                  } as React.CSSProperties
                }
                onClick={() =>
                  document
                    .getElementById("mobile-nav-menu")
                    ?.classList.add("hidden")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#enquiry"
                className="block w-full text-black font-semibold px-6 py-3 rounded-md mb-1 transition-colors hover:!bg-neutral-900 hover:!text-white"
                style={
                  {
                    backgroundColor: "white",
                    color: "black",
                    "--brand": BRAND_COLOR,
                  } as React.CSSProperties
                }
                onClick={() =>
                  document
                    .getElementById("mobile-nav-menu")
                    ?.classList.add("hidden")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = DARK_BG_COLOR)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                Enquiry
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-16 pt-10 md:pt-6 gap-8 md:gap-12 flex-1 scroll-smooth relative pb-[300px] md:pb-0">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start md:items-start justify-center z-10 text-left md:text-left w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Start Your Quranic Journey with{" "}
            <span
              style={{
                color: BRAND_COLOR,
              }}
            >
              Quran Center
            </span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-xl"
            style={{ color: COLOR2 }}
          >
            Learn Quran online with expert teachers, interactive lessons, and a
            peaceful spiritual environment for all ages.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto mb-8">
            <a
              href="#"
              className="text-black font-bold px-8 py-3 rounded-full shadow transition text-base min-h-[44px] text-center w-full md:w-auto"
              style={{ backgroundColor: COLOR2 }}
            >
              Join Now
            </a>
            <a
              href="#"
              className="bg-white/10 font-bold px-8 py-3 rounded-full shadow transition text-base min-h-[44px] text-center w-full md:w-auto"
              style={{ borderColor: BRAND_COLOR, color: COLOR2 }}
            >
              Explore Courses
            </a>
          </div>
        </div>
        {/* Boy Image - absolutely positioned at bottom center on mobile, static on md+ */}
        <div
          className="w-full md:w-auto absolute md:static left-1/2 md:left-auto bottom-0 md:bottom-auto flex justify-center md:justify-end items-end z-0 mt-8 md:mt-0"
          style={{ transform: "translateX(-50%)", minHeight: 0 }}
        >
          <div className="relative md:right-[-45%] md:top-5 drop-shadow-2xl">
            <Image
              src="/boy_holding_quran.png"
              alt="Boy holding Quran"
              width={220}
              height={260}
              className="rounded-t-3xl bg-transparent object-contain w-[220px] h-[260px] md:w-[460px] md:h-[560px] mx-auto md:mx-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
