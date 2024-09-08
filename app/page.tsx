import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Study from "./components/Study";

export default function Home() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <Header />
      <Hero />
      {/*  */}
      <main id="main" className="">
        <About />
        <Skills />
        <Resume />
        {/* <Portfolio /> */}
        <Study />
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
