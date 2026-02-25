"use client";
import {
  BG_COLOR1,
  BG_COLOR2,
  BRAND_COLOR,
  COLOR1,
  COLOR2,
} from "../config/brand";
import { CheckCircle2, Clock, User, Monitor } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 className="w-8 h-8" style={{ color: BRAND_COLOR }} />, // 2 Days Free Trial
    title: "2 Days Free Trial",
    description:
      "We offer a 2-day free trial so you can experience our teaching style before enrolling. This helps you understand our method, interaction, and lesson structure with no commitment.",
  },
  {
    icon: <Clock className="w-8 h-8" style={{ color: BRAND_COLOR }} />, // Flexible Timing
    title: "Flexible Timing",
    description:
      "Schedule your classes at a time that suits you. We offer convenient time slots to match your daily routine, whether you are a student, working professional, or homemaker.",
  },
  {
    icon: <User className="w-8 h-8" style={{ color: BRAND_COLOR }} />, // Suitable for All Ages
    title: "Suitable for All Ages",
    description:
      "Our courses are designed for everyone — kids, adults, working professionals, and senior citizens. No matter your age, you can start your Quran journey with confidence.",
  },
  {
    icon: <Monitor className="w-8 h-8" style={{ color: BRAND_COLOR }} />, // One-to-One Online Classes
    title: "One-to-One Online Classes",
    description:
      "We provide personalized one-on-one online sessions. No matter where you are in the world, you can join our classes and receive individual attention for better learning and faster progress.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-16 px-4 md:px-0 flex justify-center items-center"
      style={{
        background: `linear-gradient(135deg, ${BG_COLOR2}, ${BG_COLOR1})`,
      }}
    >
      <div
        className="max-w-5xl w-full rounded-3xl shadow-lg p-8 md:p-12 text-center"
        style={{ background: BG_COLOR2, border: `1.5px solid ${BRAND_COLOR}` }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center rounded-3xl px-8 py-4 shadow-lg mb-10 flex items-center gap-3"
          style={{
            display: "inline-block",
            color: "#fff",
          }}
        >
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center bg-[rgba(35,35,35,0.7)] rounded-2xl p-6 h-full shadow-md border border-white/10"
            >
              <div style={{ "--brand": BRAND_COLOR } as React.CSSProperties}>
                {feature.icon}
              </div>
              <h3
                className="text-xl font-semibold mt-4 mb-2"
                style={{ color: COLOR2 }}
              >
                {feature.title}
              </h3>
              <p className="text-base" style={{ color: COLOR1 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
