import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import HomePage from './Components/HomePage';
import { MantineProvider } from '@mantine/core';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


//pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.js'

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App">
      <MantineProvider>
   
    <HomePage/>
    </MantineProvider>
    </div>
  );
}

export default App;
