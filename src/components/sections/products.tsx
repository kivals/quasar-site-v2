import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/section-title";

export function Products() {
  return (
    <section id="products" className="mt-8.5 mb-12 lg:bg-[url('/images/bg/product-bg.png')] xl:mt-19">
      <Container>
        <SectionTitle>Продукты</SectionTitle>

        <div className="flex flex-col gap-y-8">
          <ProductItem title="ЦПСО" bg="/images/bg/bg1.png">
            Цифровая платформа сервисного обслуживания (ЦПСО) –
            автоматизированная система (ГОСТ 34.003-90), состоящая из комплекса
            средств автоматизации и участников (пользователей), реализующая
            информационную технологию эксплуатации и ремонта изделий,
            позволяющая пользователям рационально и полноценно эксплуатировать
            приобретенное/внедренное/разработанное под заказ изделие (особенно
            технически сложное) или услугу.
          </ProductItem>
          <ProductItem title="СОКОЛ" bg="/images/bg/bg2.png">
            Платформа видеоаналитики для контроля за правильностью действий
            персонала -система компьютерного зрения Сокол позволяет организовать
            интеллектуальное наблюдение, основанное на технологии искусственного
            интеллекта, позволяющее в режиме реального времени осуществлять
            анализ и контроль за поведением объекта.
          </ProductItem>
          <ProductItem
            title="Единая платформа дистанционного контроля здоровья"
            bg="/images/bg/bg2.png"
          >
            Единая платформа дистанционного контроля здоровья - модульная
            платформа, предназначенная для организации единой среды по сбору
            медицинских данных из различных источников информации (МИС, ЛИС,
            периферийное и лабораторное оборудование, носимые устройства) и
            формированию объективной картины по состоянию здоровья пациента.
          </ProductItem>
        </div>
      </Container>
    </section>
  );
}

function ProductItem({
  title,
  children,
  bg,
}: {
  title: string;
  children: string;
  bg: string;
}) {
  return (
    <article
      className="p-4 flex h-[190px] items-center justify-center rounded-[30px] bg-white bg-cover bg-center bg-no-repeat md:block md:h-auto md:pr-[20px] md:pb-[50px] md:pl-[40px] lg:pr-[30px] lg:pb-[100px] lg:pl-[60px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h4 className="mb-4 font-semibold md:pt-[20%] md:text-[50px] text-center lg:text-start lg:text-[60px]">
        {title}
      </h4>
      <p className="hidden text-left text-[28px] md:block md:text-[24px] lg:text-[34px]">
        {children}
      </p>
      <Button className="text-primary mt-5 hidden cursor-pointer bg-transparent pl-0 font-semibold shadow-none md:block md:text-[20px] lg:text-[24px] xl:text-[32px]">
        Подробнее
      </Button>
    </article>
  );
}
