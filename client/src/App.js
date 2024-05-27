
import './App.css';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page1 from './components/page1';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
import FAQPage from './components/Page10';
import ContactPage from './components/ContactPage';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="App">
   <Page1 />
   <Page2 />
   <Page3 />
   <Page4 />
   <Page5 />
   <Page6 />
   <Page7 />
   <Page8 />
   <Page9 />
  <FAQPage />
  <ContactPage />
  <FooterPage />
    </div>
  );
}

export default App;
