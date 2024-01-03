import { PrimeReactProvider } from 'primereact/api';

import { Navbar } from './ui/sections/Navbar/Navbar';

import '/node_modules/primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Hero } from './ui/sections/Hero/Hero';

export const App = () => {
  return (
    <PrimeReactProvider>
      <Navbar/>
      <Hero/>
    </PrimeReactProvider>
  )
}