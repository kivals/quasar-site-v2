import Container from "@/components/container";
import SectionTitle from "@/components/section-title";
import News from "@/components/news/news";

export default function NewsSection() {
  return (
    <section id="news" className="pt-[80px] lg:pt-8.5 mb-5 lg:mb-28">
      <Container>
        <div className="hidden lg:block">
          <SectionTitle>Новости</SectionTitle>
        </div>
        <News />
      </Container>
    </section>
  );
}
