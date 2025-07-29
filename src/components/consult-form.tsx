import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ConsultForm() {
  return (
    <form action="">
      <div className="placeholder:text-[18px]xlg: flex flex-col gap-y-5">
        <Input
          className="h-[50px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[18px] font-normal placeholder:text-[18px] lg:h-[80px] lg:text-[32px] lg:placeholder:text-[32px]"
          type="text"
          placeholder="Имя"
        />
        <Input
          className="h-[50px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[18px] font-normal placeholder:text-[18px] lg:h-[80px] lg:text-[32px] lg:placeholder:text-[32px]"
          type="tel"
          placeholder="Телефон"
        />
        <Input
          className="h-[50px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[18px] font-normal placeholder:text-[18px] lg:h-[80px] lg:text-[32px] lg:placeholder:text-[32px]"
          type="email"
          placeholder="Email"
        />
        <Textarea
          className="h-[50px] rounded-[20px] rounded-bl-[0px] border-[1.5px] border-[#354389] text-[18px] font-normal placeholder:text-[18px] lg:h-[210px] lg:text-[32px] lg:placeholder:text-[32px]"
          placeholder="Сообщение"
        />
        <div className="flex items-center gap-3">
          <Checkbox className="size-[24px] lg:size-[30px]" id="terms" />
          <Label
            className="inline text-start text-[18px] font-normal lg:text-[28px]"
            htmlFor="terms"
          >
            Согласен с{" "}
            <a
              className="cursor-pointer underline"
              href="/docs/PD.pdf"
              target="_blank"
            >
              Политикой конфиденциальности
            </a>
          </Label>
        </div>

        <Button
          disabled={true}
          className="bg-primary h-[54px] cursor-pointer rounded-[20px] font-semibold text-white lg:flex lg:h-[85px] lg:text-lg xl:text-xl 2xl:text-[32px]"
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}
