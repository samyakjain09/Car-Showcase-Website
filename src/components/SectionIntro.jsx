function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="mb-10 max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export default SectionIntro;
