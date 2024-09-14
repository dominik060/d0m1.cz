import AboutMe from "@/components/aboutme/AboutMe";
import Footer from "@/components/aboutme/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HrFullWidth from "@/components/HrFullWidth";

export default function Home() {
  return (
    <main className="col flex min-h-screen w-screen items-center overflow-hidden bg-white text-left dark:bg-black">
      <div className="mx-auto flex min-h-screen w-full max-w-[80rem] flex-col gap-0 border-x-2 border-none border-current px-8 text-current sm:px-16 hr-line:border-solid">
        <Header className="h-[69vh] sm:h-[90vh]">
          <Hero />
        </Header>
        <HrFullWidth />
        <section id="aboutme">
          <AboutMe />
        </section>
        <Footer />
      </div>
    </main>
  );
}
