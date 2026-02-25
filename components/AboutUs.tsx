"use client";
import {
  BG_COLOR1,
  BG_COLOR2,
  BRAND_COLOR,
  COLOR1,
  COLOR2,
} from "../config/brand";

export default function AboutUs() {
  return (
    <section
      className="w-full py-16 px-4 md:px-0 flex justify-center items-center"
      style={{
        background: `linear-gradient(135deg, ${BG_COLOR1}, ${BG_COLOR2})`,
      }}
    >
      <div
        className="max-w-3xl w-full text-center rounded-3xl shadow-lg p-8 md:p-12"
        style={{ background: BG_COLOR1, border: `1.5px solid ${BRAND_COLOR}` }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center rounded-3xl px-8 py-4 shadow-lg mb-10 flex items-center gap-3"
          style={{
            display: "inline-block",
            color: "#fff",
          }}
        >
          About Us
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: COLOR2 }}
        >
          We provide structured and result-oriented online Quran education for
          students of all ages. With a focus on correct pronunciation, proper
          Tajweed, and strong memorization techniques, our goal is to help every
          student build confidence and develop a lifelong connection with the
          Holy Quran.
          <br />
          <br />
          Our teaching approach is simple, patient, and personalized, ensuring
          that each student progresses comfortably and effectively.
        </p>
      </div>
    </section>
  );
}
