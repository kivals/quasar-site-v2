import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/section-title";
import { ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { productsData } from "@/data/products";

export function Products() {
  return (
    <section
      id="products"
      className="mt-8.5 mb-5 lg:mb-12 lg:bg-[url('/images/bg/product-bg.png')] xl:mt-19"
    >
      <Container>
        <SectionTitle>Продукты</SectionTitle>

        <div className="flex flex-col gap-y-8">
          {productsData.map(({ title, text, fullText, img }, index) => (
            <ProductItem
              key={index}
              title={title}
              bg={img}
              text={text}
              fullText={fullText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductItem({
  title,
  bg,
  text,
  fullText,
}: {
  title: string;
  text: string;
  fullText: string;
  bg: string;
}) {
  return (
    <article
      className="relative flex h-[190px] items-center justify-center rounded-[30px] bg-white bg-cover bg-center bg-no-repeat p-4 md:block md:h-auto md:pr-[20px] md:pb-[50px] md:pl-[40px] lg:pr-[30px] lg:pb-[100px] lg:pl-[60px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h4 className="mb-4 text-center font-semibold md:pt-[20%] md:text-[50px] lg:text-start lg:text-[60px]">
        {title}
      </h4>
      <p className="hidden text-left text-[28px] md:block md:text-[24px] lg:text-[34px]">
        {text}
      </p>
      <ProductModalWindow title={title} text={fullText} />
    </article>
  );
}

function ProductModalWindow({ title, text }: { title: string; text: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button className="text-primary mt-5 hidden cursor-pointer bg-transparent pl-0 font-semibold shadow-none hover:bg-transparent md:block md:text-[20px] lg:text-[24px] xl:text-[32px]">
            Подробнее
          </Button>
          <div className="absolute top-0 left-0 h-full w-full lg:hidden"></div>
        </div>
      </DialogTrigger>

      <DialogContent className="text-[18px] md:text-[24px] lg:text-[28px] flex h-[80vh] flex-col lg:max-w-[1000px]">
        <DialogTitle className="mb-4 text-center font-semibold md:text-[50px] lg:text-start lg:text-[60px]">
          {title}
        </DialogTitle>
        <div className="relative h-full">
          <p className="absolute top-0 bottom-0 overflow-x-scroll">{text}</p>
        </div>
        <DialogFooter className="bg-background absolute bottom-0 left-0 w-full p-4 shadow-lg sm:justify-start">
          <DialogClose asChild>
            <Button className="bg-[#1E1E1E] font-semibold w-[200px] rounded-[20px] text-white h-[70px]">
              <ChevronLeft className="size-6" />
              <span className="text-[24px]">назад</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
