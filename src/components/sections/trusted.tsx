import Container from "@/components/container";
import SectionTitle from "@/components/section-title";
import TrustedBlocks from "@/components/trusted/trusted-blocks";

export function Trusted() {
  return (
    <section className="mt-8.5 2xl:mt-19">
      <Container>
        <SectionTitle>Нам доверяют</SectionTitle>

        <TrustedBlocks />
      </Container>
    </section>
  );
}
