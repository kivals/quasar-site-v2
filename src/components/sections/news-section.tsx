import Container from "@/components/container";
import SectionTitle from "@/components/section-title";
import News from "@/components/news/news";

export default function NewsSection() {
  return (
    <section className="mb-28">
      <Container>
        <SectionTitle>Новости</SectionTitle>
        <News />
      </Container>
    </section>
  );
}
