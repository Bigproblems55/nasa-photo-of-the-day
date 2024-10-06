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
let [endDate,setEnddate] = useState();
let [search,setSearch] = useState(false);

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}


const handleBar = (event)=>{
  setDate(event.target.value)
  console.log('date'+date)
  
}
const handleSearch = ()=>{
  var d = new Date(date)

// Add a day
d.setDate(d.getDate() + 2) 
setEnddate(formatDate(d));
  setSearch(true);
}
const handleContainer = () =>{
  console.log('handlcontainer')
  setDate(null);
  setEnddate(null);
  setSearch(false);
}
  return (
    <>
    {search && date && endDate && <Container endDate={endDate}date={date}
    handleContainer={handleContainer}/>
    }
    {
      !search && <AppStyle>
      
      <SearchBar date={date} 
      handleSearch={handleSearch}
      handleBar={handleBar}/>
    </AppStyle>
    }
    
    </>
  );
}

export default App;
