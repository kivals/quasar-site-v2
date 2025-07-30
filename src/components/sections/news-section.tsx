import Container from "@/components/container";
import SectionTitle from "@/components/section-title";
import News from "@/components/news/news";

export default function NewsSection() {
  return (
    <section id="news" className="mb-28">
      <Container>
        <div className="hidden lg:block">
          <SectionTitle>Новости</SectionTitle>
        </div>
        <News />
      </Container>
    </section>
  );
}
