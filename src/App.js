import './App.css';

import Navbar from './components/Navbar';
import Cover from './components/Cover';
import About from './components/About';
import Footer from './components/Footer';

import styled from "styled-components";

const StylesTag = styled.div`
  {
    
  }
`;

function App() {
  return (
    <StylesTag>
      <Navbar/>
      <main>
        <Cover/>
        <About/>
      </main>
      <Footer/>
    </StylesTag>
  );
}

export default App;
