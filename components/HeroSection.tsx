"use client";
import Image from "next/image";
import { BRAND_COLOR, BG_COLOR1, BG_COLOR2, COLOR2 } from "../config/brand";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br flex flex-col items-stretch justify-start relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, ${BG_COLOR1}, ${BG_COLOR2})`,
      }}
    >
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6 md:py-8 bg-[rgba(35,35,35,0.5)] backdrop-blur-md border-b border-white/20 rounded-b-3xl shadow-lg z-10 relative">
        <div
          className="font-bold text-2xl tracking-widest"
          style={{
            color: BRAND_COLOR,
            fontFamily: "TuskerGrotesk, sans-serif",
          }}
        >
          Zikr
        </div>
        {/* Hamburger for mobile */}
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-20"
        >
          <span className="w-7 h-0.5 bg-white rounded transition-all"></span>
          <span className="w-7 h-0.5 bg-white rounded transition-all"></span>
          <span className="w-7 h-0.5 bg-white rounded transition-all"></span>
        </label>
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          <li>
            <a
              href="#"
              className="text-white text-base font-medium transition"
              style={
                {
                  "--tw-text-opacity": "1",
                  color: undefined,
                  transition: "color 0.2s",
                } as any
              }
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_COLOR)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-base font-medium transition"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_COLOR)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-base font-medium transition"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_COLOR)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Teachers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-base font-medium transition"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_COLOR)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-base font-medium transition"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_COLOR)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Blog
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="hidden md:inline-block text-black font-bold px-7 py-2 rounded-full shadow transition text-base ml-8"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          Join Now
        </a>
        {/* Mobile menu */}
        <div className="fixed md:hidden top-0 left-0 w-full h-full bg-[rgba(35,35,35,0.85)] backdrop-blur-lg z-30 transition-all duration-300 ease-in-out hidden peer-checked:flex flex-col items-center pt-28">
          <ul className="flex flex-col gap-8 text-center">
            <li>
              <a
                href="#"
                className="text-white text-lg font-semibold transition"
                style={
                  {
                    "--tw-text-opacity": "1",
                    color: undefined,
                    transition: "color 0.2s",
                  } as any
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = BRAND_COLOR)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-semibold transition"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = BRAND_COLOR)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-semibold transition"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = BRAND_COLOR)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Teachers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-semibold transition"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = BRAND_COLOR)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg font-semibold transition"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = BRAND_COLOR)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="mt-10 text-black font-bold px-7 py-3 rounded-full shadow transition text-lg w-4/5 mx-auto"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Join Now
          </a>
        </div>
      </nav>
      {/* Hero Content */}
      <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-16 pt-3 md:pt-6 gap-8 md:gap-12 flex-1 md:flex-row flex-col">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start md:items-start justify-center z-10 text-left md:text-left w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Start Your Quranic Journey with{" "}
            <span
              style={{
                color: BRAND_COLOR,
                fontFamily: "TuskerGrotesk, sans-serif",
              }}
            >
              Zikr
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
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Join Now
            </a>
            <a
              href="#"
              className="bg-white/10 font-bold px-8 py-3 rounded-full shadow transition text-base min-h-[44px] text-center w-full md:w-auto"
              style={{ borderColor: BRAND_COLOR, color: BRAND_COLOR }}
            >
              Explore Courses
            </a>
          </div>
        </div>
        {/* Boy Image */}
        <div className="flex-1 flex items-end justify-end md:items-end md:justify-end w-full md:w-auto relative z-0 mt-8 md:mt-0">
          <div className="relative md:right-[-40px] md:top-5 drop-shadow-2xl">
            <Image
              src="/boy_holding_quran.png"
              alt="Boy holding Quran"
              width={350}
              height={420}
              className="rounded-t-3xl bg-transparent object-contain w-[220px] h-[260px] md:w-[450px] md:h-[550px] mx-auto md:mx-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
