import React ,{useState} from 'react'
import FilterVintageIcon from '@mui/icons-material/FilterVintage'
import IconButton from '@mui/material/IconButton'
import styled from'styled-components'
import SearchIcon from '@mui/icons-material/Search'
function Header(props) {
  const[input,setInput]=useState("");
  const onSearchSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit(input);
    
  }
  return (
    <Wrapper>
        <LogoWrapper>
           <IconButton>
            <FilterVintageIcon />
            </IconButton>
           </LogoWrapper>
           <HomeButton>
            Explore
           </HomeButton>
           <SearchWrapper>
            <SearchBarWrapper>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <form>
                <input type="text" onChange={(e)=> setInput(e.target.value)}/>
                <button type="submit" onClick={onSearchSubmit}></button>
              </form>
            </SearchBarWrapper>
           </SearchWrapper>
    </Wrapper>
    
  )
}

export default Header

const Wrapper=styled.div`
 display:flex;
 align-items: center;
 height: 56px;
 padding: 12px 4px 4px 16px;
 background-color: white;
 color: white;
 `
 const LogoWrapper =styled.div`
  .MuiSvgIcon-root{
    color:red;
    font-size:32px;
    cursor: pointer;
  }
 `
 const HomeButton=styled.div`
  display:flex;
  height:48px;
  min-width:123px;
  align-items:center;
  justify-content:center;
  border-radius: 24px;
  cursor:pointer;
  background-color:black;
  font-weight:1000;
  font-size:20px;
  a{
    text-decoration:none;
    color:black;
    font-weight:1000;
  }`
  const SearchWrapper=styled.div`
   flex:1;
   padding-left:10px;
   padding-right:10px;
   `
   const SearchBarWrapper=styled.div`
   background-color:#efefef;
   display:flex;
   height:48px;
   weight:100%;
   border-radius:50px;
   border:none;
   padding-left:10px;
   form{
    display:flex;
    flex:1;
   }
   form>input{
    background-color:transparent;
    border:none;
    width:100%;
    margin-left:5px;
    font-size:16px;
   }
   form>button{
    display:none;
   }
   input:focus{
    outline:none;
   }`
   