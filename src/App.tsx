/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Itinerary } from './components/Itinerary';
import { Videos } from './components/Videos';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 scroll-smooth p-4 md:p-6 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-4 mt-24">
        <Hero />
        <About />
        <Experience />
        <Itinerary />
        <Videos />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
