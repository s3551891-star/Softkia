
import SectionHeading from "../components/SectionHeading";

export default function ExampleSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Technology built around your vision"
          description="Explore thoughtful digital solutions designed around your goals and requirements."
          align="center"
        />
      </div>
    </section>
  );
}
