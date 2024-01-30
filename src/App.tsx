import { PrimeReactProvider } from 'primereact/api';

import { Navbar } from './ui/sections/Navbar/Navbar';

import { ScrollTop } from 'primereact/scrolltop';

import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primeflex/primeflex.css';

import { Hero } from './ui/sections/Hero/Hero';
import { About } from './ui/sections/About/About';
import { Technologies } from './ui/sections/Technologies/Technologies';
import { Experience } from './ui/sections/Experience/Experience';
import { Footer } from './ui/sections/Footer/Footer';

export const App = () => {
  return (
    <PrimeReactProvider>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Footer/>
      <ScrollTop />
    </PrimeReactProvider>
  )
}