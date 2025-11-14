import Navbar from "../components/Navbar";
import SimpleCard from "../components/SimpleCard";
import FeatureCard from "../components/FeatureCard";
import Particles from "./Particles";
import Step1 from "../assets/step_3.png";
import Step2 from "../assets/step_2.png";
import Step3 from "../assets/step_1.png";

import React from "react";
import FAQs from "../components/FAQItem";
import FooterPanel from "../components/Footer";

export default function Hero() {
const features = [
  {
    key: "script-generator",
    title: "Multilingual Script Generator",
    desc: "Create tailored scripts in multiple languages for outreach and communication.",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2.4"/>
        <path d="M7 8h10M7 12h9M7 16h7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    key: "article-blog",
    title: "Article & Blog Generator",
    desc: "Produce structured articles, blogs, and summaries with adjustable tone.",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="2.4"/>
        <path d="M8 8h9M8 12h7M8 16h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    key: "social-post",
    title: "Social Media Post Generator",
    desc: "Generate platform-optimized captions, hashtags, and bite-sized posts.",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="2.4"/>
        <path d="M7 10h8M7 14h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    key: "poster-maker",
    title: "Poster Maker",
    desc: "Design clean, AI-assisted posters using templates and generated text.",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="3" width="16" height="18" rx="4" stroke="currentColor" strokeWidth="2.4"/>
        <path d="M8 8h9M8 12h7M8 16h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    key: "edu-content",
    title: "Educational Content",
    desc: "Generate notes, explainers, and structured academic material instantly.",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 6l8-3 8 3v11l-8 3-8-3V6z" stroke="currentColor" strokeWidth="2.4"/>
        <path d="M12 9v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    key: "ad-scripts",
    title: "Ad Script Generator",
    desc: "Create persuasive ad copy optimized for clarity, impact, and conversions.",
    icon: (
      <svg className="w-8 h-8 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="7" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="2.4"/>
        <path d="M7 12h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
        <path d="M17 4v16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];



  return (
    <>
      <Navbar />
      {/* hero section  */}
      <div style={{ width: "100%", height: "100vh", position: "relative" ,background:"#060010"}}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={800}
          particleSpread={15}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
        <div className="heroTxt">
          <div className="w-full text-center mt-20 px-4">
            {/* Heading */}
            <h1
              className="
        text-white
        font-extrabold
        text-4xl
        sm:text-5xl
        md:text-5xl
        leading-tight
        tracking-tight
      "
            >
              Automate High-Volume Content Creation Instantly
            </h1>
            <p
              className="
        text-white
        font-light
        text-lead
        sm:text-sm
        md:text-sm
        leading-tight
        tracking-tight
      "
            >
              AI-driven platform that generates scripts, articles, social posts,
              and graphics tailored for your audience—fast, multilingual, and
              scalable
            </p>
            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              {/* Get Started button */}
              <button
                className="
            px-8 py-3
            bg-white
            text-black
            font-medium
            rounded-full
            shadow-sm
            hover:bg-white/50
            transition
            cursor-pointer
          "
              >
                Get Started
              </button>

              {/* Learn More button */}
              <button
                className="
                cursor-pointer
            px-8 py-3
            rounded-full
            font-medium
            text-white/70
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:bg-white/10 hover:text-white
            transition
          "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How to section */}
      <section className="py-20" style={{ background: "white" }}>
        <div class="text-center max-w-2xl mx-auto my-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            How It Works !!
          </h2>
          <p class="text-gray-400 mt-3 text-base sm:text-lg">
            A streamlined workflow for fast, scalable content creation.
          </p>
        </div>

        <div class="col-3 p-2  flex items-center justify-center">
          <SimpleCard
            img={Step1}
            Title={"1. Choose Your Content Type"}
            Disc={
              "Select what you want to generate—scripts, articles, social posts, or graphics.Pick your language, tone, and target audience."
            }
          />
          <SimpleCard
            img={Step2}
            Title={"2. Provide a Short Input"}
            Disc={
              "Enter a topic, description, or keywords.The system analyzes context, trends, and audience patterns"
            }
          />
          <SimpleCard
            img={Step3}
            Title={"3. Generate & Customize"}
            Disc={
              "Instantly receive ready-to-use content.Refine, translate, or bulk-generate variations with one click."
            }
          />
        </div>
      </section>

      {/* Features Section  */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            OUR FEATURES
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Unlock the full potential of your content creation
          </p>
        </header>

        <div className="bg-white/80 p-8 rounded-3xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard
                key={f.key}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Faqs Section  */}
      <FAQs />

      {/* Footer Section  */}
      <FooterPanel /> 
    </>
  );
}
