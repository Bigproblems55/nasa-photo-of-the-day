import React,{useState} from "react";
import styled from "styled-components";
import "./App.css";
// import Astros from "./components/Astro/Astros";
import SearchBar from "./components/Searchbar/SearchBar";
import Container from "./components/Container/Container";

const AppStyle = styled.div`
      text-align: center;
`;


function App() {
let [date,setDate] = useState();
let [search,setSearch] = useState(false);
const handleBar = (event)=>{
  setDate(event.target.value)
  console.log('date'+date)
  // Create new Date instance
var d = new Date(date)

// Add a day
d.setDate(d.getDate() + 1)
console.log(d)
}
const handleSearch = ()=>{
  setSearch(true);
}
const handleContainer = () =>{
  setSearch(false);
}
  return (
    <>
    {search && <Container date={date}
    handleContainer={handleContainer}/>}
    <AppStyle>
      
      <SearchBar date={date} 
      handleSearch={handleSearch}
      handleBar={handleBar}/>
    </AppStyle>
    </>
  );
}

export default App;
