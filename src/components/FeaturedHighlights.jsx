function FeaturedHighlights() {
  const highlights = [
    {
      title: "Advanced Manufacturing",
      copy:
        "Smart robotics, sustainable material workflows, and digital precision quality checks across each assembly stage.",
    },
    {
      title: "Connected Cabin Tech",
      copy:
        "Integrated voice control, real-time telemetry, and immersive digital interfaces focused on modern driver comfort.",
    },
    {
      title: "Safety by Design",
      copy:
        "Predictive assistance systems, reinforced architecture, and over-the-air software updates for evolving protection.",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {highlights.map((item) => (
        <div key={item.title} className="glass-panel p-6">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{item.copy}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedHighlights;
