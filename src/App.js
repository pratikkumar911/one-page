import {useState, useEffect} from "react";
import {getRandomQuote} from "./api";
import Header from './components/Header/Header';
import QuoteSection from './components/Quote/Quote';
import GlobalStyle from './GlobalStyle';
import Links from './components/Links/Links';
import styled from "styled-components";
import Artwork from "./components/Artwork/Artwork";

function App() {
  const [currentQuote, setCurrentQuote] = useState();

  useEffect(() => {
    getRandomQuote().then((data)=>setCurrentQuote(data));
  },[]);

  return (
    <Wrapper>
      <GlobalStyle/>
      <Artwork/>
      <Container>
        <Header/>
        <Links/>
        {currentQuote && (
          <QuoteSection content = {currentQuote.content} author = {currentQuote.author}/>
        )}
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding:10rem;
  display:flex;
  justify-content: space-between;
  height:100vh;
  background-color: var(--bg-color);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:2;
  justify-content: space-between;
`;