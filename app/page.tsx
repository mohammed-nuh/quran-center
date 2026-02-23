import HeroSection from "../components/HeroSection";
import { Skiper49 } from "../components/skiper49";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import { RegistrationForm } from "../components/RegistrationForm";
import { EnquiryForm } from "../components/EnquiryForm";
import { BG_COLOR1, BRAND_COLOR, COLOR2, DARK_BG_COLOR } from "@/config/brand";
import { BookIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="courses">
        <Skiper49 />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <section id="register" className="py-16 bg-transparent text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-widest text-center rounded-3xl px-8 py-4 shadow-lg mb-10 flex items-center gap-3"
          style={{
            fontFamily: "TuskerGrotesk, sans-serif",
            background: BG_COLOR1,
            display: "inline-block",
          }}
        >
          <BookIcon
            size={40}
            style={{ color: COLOR2 }}
            className="inline-block mr-3"
          />
          <span style={{ color: "#fff", background: "transparent" }}>
            Registration{" "}
          </span>
          <span
            style={{
              color: BRAND_COLOR,
              borderRadius: "0.25em",
            }}
          >
            FORM
          </span>
        </h2>
        <RegistrationForm />
      </section>
      <div id="why">
        <WhyChooseUs />
      </div>
      <section id="enquiry" className="py-16 bg-transparent text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-widest text-center rounded-3xl px-8 py-4 shadow-lg mb-10 flex items-center gap-3"
          style={{
            fontFamily: "TuskerGrotesk, sans-serif",
            background: BG_COLOR1,
            display: "inline-block",
          }}
        >
          <BookIcon
            size={40}
            style={{ color: COLOR2 }}
            className="inline-block mr-3"
          />
          <span style={{ color: "#fff", background: "transparent" }}>
            Enquiry{" "}
          </span>
          <span
            style={{
              color: BRAND_COLOR,
              borderRadius: "0.25em",
            }}
          >
            FORM
          </span>
        </h2>
        <EnquiryForm />
      </section>
      {/* Footer */}
      <footer
        style={{ background: DARK_BG_COLOR, color: "white" }}
        className="w-full text-center py-3 text-sm font-semibold"
      >
        © {new Date().getFullYear()} Quran Center. All rights reserved.
      </footer>
    </div>
  );
}
