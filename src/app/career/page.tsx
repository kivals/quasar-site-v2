import { Header } from "@/components/sections/header";
import SectionTitle from "@/components/section-title";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-40 flex items-center justify-center">
        <SectionTitle>
          Страница находится в разработке
        </SectionTitle>
      </main>
    </div>
  );
}
