import React from "react";
import styled from "styled-components";
import "./App.css";
// import Astros from "./components/Astro/Astros";
import SearchBar from "./components/Searchbar/SearchBar";
import Container from "./components/Container/Container";

const AppStyle = styled.div`
      text-align: center;
`;

function App() {
  return (
    <>
    <Container />
    <AppStyle>
      
      <SearchBar />
    </AppStyle>
    </>
  );
}

export default App;
