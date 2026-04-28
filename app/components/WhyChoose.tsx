"use client";

export default function WhyChoose() {
  return (
    <section className="py-24">
      <div className="container-custom grid gap-10 md:grid-cols-2">
        <h2 className="text-4xl font-black md:text-6xl">
          Why <span className="gradient-text">Choose Growpep</span>
        </h2>

        <div className="space-y-4">
          {[
            "Premium UI/UX Design",
            "Conversion-Focused Strategy",
            "SEO Optimized Structure",
            "Fast Performance",
            "Client-Centric Approach",
          ].map((item) => (
            <div key={item} className="glass-card p-4 rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}