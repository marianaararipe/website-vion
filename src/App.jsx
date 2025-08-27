import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Prototype from './components/Prototype';

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

      <Hero />

      <Project />

      <Prototype />







      <Test />

      <Highlights />

      <Model />

      <Features />

      <HowItWorks />

      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
