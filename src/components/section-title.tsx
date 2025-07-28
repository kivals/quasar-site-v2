import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-5 text-center text-[28px] font-medium xl:text-[40px] 2xl:text-[80px]">
      {children}
    </h2>
  );
}
