import Navbar from './components/Navbar';
import HeroQuicker from './components/HeroQuicker.jsx';
import Hero from './components/Hero';
import Project from './components/Project';
import Prototype from './components/Prototype';
import Statistics from './components/Statistics';
import VideoSection from './components/VideoSection';

import Test from './components/Test';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />

      <section id="home">
        <HeroQuicker />
        <Hero />

      </section>


      <section id="projeto">
        <Project />
      </section>

      <section id="figma">
        <Prototype />
      </section>

      <section id="statistics">
        <Statistics />
      </section>

      <section id="video">
        <VideoSection />
      </section>

      {/*}
      <Test />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      {*/}

      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
