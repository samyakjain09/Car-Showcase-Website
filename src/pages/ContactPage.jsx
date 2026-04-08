import SectionIntro from "../components/SectionIntro";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <section className="page-shell pb-20">
      <SectionIntro
        eyebrow="Get In Touch"
        title="Talk to our specialists"
        copy="The contact experience is intentionally clean, accessible, and modular. It is ready for later backend integration if you decide to extend the project beyond frontend scope."
      />
      <ContactForm />
    </section>
  );
}

export default ContactPage;
