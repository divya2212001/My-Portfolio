const SectionHeading = ({ label, eyebrow }) => (
  <div className="section-heading">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{label}</h2>
  </div>
);

export default SectionHeading;
