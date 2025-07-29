import Container from "@/components/container";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
import ConsultForm from "@/components/consult-form";

export default function Consultation() {
  return (
    <section className="mb-28 lg:bg-[url('/images/bg/consult-bg.png')]">
      <Container>
        <SectionTitle>Проконсультируйтесь со cпециалистом</SectionTitle>
        <div className="flex gap-8">
          <div className="hidden lg:flex w-[36%] flex-col items-center gap-y-5 rounded-[30px] bg-white px-10 py-20 text-center drop-shadow-lg">
            <span className="text-[40px]">Мы свяжемся с Вами</span>
            <Image
              className="h-[107px] w-[30px]"
              src="/images/down_line.png"
              width="30"
              height="107"
              alt="Стрелка вниз"
            />
            <span className="text-[40px]">Обсудим Вашу задачу</span>
            <Image
              className="h-[107px] w-[30px]"
              src="/images/down_line.png"
              width="30"
              height="107"
              alt="Стрелка вниз"
            />
            <span className="text-[40px] font-semibold">
              Найдем лучшее решение
            </span>
          </div>
          <div className="flex-1 rounded-[30px] bg-white px-4 lg:px-20 py-4 lg:py-6 drop-shadow-lg">
            <ConsultForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
