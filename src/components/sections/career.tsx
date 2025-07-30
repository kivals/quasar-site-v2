import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

export default function Career() {
  return (
    <section className="mb-28">
      <SectionTitle>Карьера</SectionTitle>
      <div className="items-center bg-[url('/images/bg/career-bg.jpg')] bg-center bg-no-repeat py-[44px] lg:py-[88px]">
        <Container>
          <div className="flex flex-col items-center">
            <p
              className="mb-10 text-center text-[22px] font-semibold text-white lg:text-[40px] xl:text-[50px] 2xl:text-[60px]">
              Мы гордимся каждым сотрудником и делаем всё, чтобы работа приносила
              удовольствие
            </p>
            <Button
              className="bg-primary cursor-pointer rounded-[15px] py-8 font-semibold text-white lg:flex lg:text-lg xl:text-xl">
              Ознакомиться с вакансиями
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
