import Header from "./components/Header";
import Hero from "./components/Hero";

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
      <main id="main">
        {/* <About />
        <Resume />
        <Portfolio />
        <Study />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
