import { Header } from "@/src/shared";
import { Banner } from "@/src/shared/ui/Banner/Banner";

export default function Home() {
  return (
    <main className="min-w-full">
      <div>
        <Header />
        <Banner />
      </div>
    </main>
  );
}
