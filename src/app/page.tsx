import AboutMe from "@/components/aboutme/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HrFullWidth from "@/components/HrFullWidth";

export default function Home() {
  return (
    <main className="col flex min-h-screen w-screen items-center overflow-hidden bg-white text-left dark:bg-black">
      <div className="mx-auto flex min-h-screen w-full max-w-[80rem] flex-col gap-0 border-x-2 border-current text-current">
        <Header className="h-[90vh]">
          <Hero />
        </Header>
        <HrFullWidth />
        <section id="contact">
          <AboutMe />
        </section>
      </div>
    </main>
  );
}
