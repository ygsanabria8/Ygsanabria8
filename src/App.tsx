import { PrimeReactProvider } from 'primereact/api';

import { Navbar } from './ui/sections/Navbar/Navbar';

import '/node_modules/primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Hero } from './ui/sections/Hero/Hero';
import { About } from './ui/sections/About/About';
import { Technologies } from './ui/sections/Technologies/Technologies';

export const App = () => {
  return (
    <PrimeReactProvider>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
    </PrimeReactProvider>
  )
}