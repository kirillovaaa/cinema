import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import Hero from "./components/Hero";
import Forum from "./components/Forum";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Films from "./components/Films";

const App = () => (
  <div>
    <Header />
    <main>
      <Section id="hero">
        <Hero />
      </Section>

      <Section id="films">
        <Films />
      </Section>

      <Section id="news">
        <News />
      </Section>
      <Forum />
    </main>
    <Footer />
  </div>
);

export default App;
