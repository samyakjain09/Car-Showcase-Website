import SectionIntro from "../components/SectionIntro";
import TestDriveForm from "../components/TestDriveForm";

function TestDrivePage() {
  return (
    <section className="page-shell pb-20">
      <SectionIntro
        eyebrow="Schedule Visit"
        title="Experience the Veltrix lineup firsthand"
        copy="This frontend-only booking interface demonstrates form validation, reusable components, and a premium responsive layout suited to a production-ready automotive website."
      />
      <TestDriveForm />
    </section>
  );
}

export default TestDrivePage;
