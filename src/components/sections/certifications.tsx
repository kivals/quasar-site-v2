import SectionTitle from "@/components/section-title";
import Container from "@/components/container";
import CertificationsCarousel from "@/components/certifications-carousel";

export default function Certifications() {
  return (
    <section className="mb-28">
      <Container>
        <SectionTitle>Свидетельства ФИПС о гос. регистрации</SectionTitle>

        <CertificationsCarousel />
      </Container>
    </section>
  );
}
