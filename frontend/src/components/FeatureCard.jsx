import React from "react";

/**
 * FeatureCard - reusable card component
 * Props:
 *  - icon: React node (SVG)
 *  - title: string
 *  - desc: string
 */
export default function FeatureCard({ icon, title, desc }) {
  return (
    <article
      className="
        flex flex-col items-start gap-4
        bg-gradient-to-br from-cyan-200/70 via-sky-200/50 to-violet-200/60
        rounded-2xl
        p-6
        shadow-md
        hover:shadow-xl hover:-translate-y-1
        transition-transform duration-250
      "
    >
      <div className="rounded-full bg-white/20 p-3 inline-flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="text-sm text-slate-600">{desc}</p>
    </article>
  );
}