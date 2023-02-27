import React,{useEffect, useState} from'react'
import Header from'./components/Header'
import Mainboard from'./components/Mainboard'
import Pin from'./components/Pins'
import unsplash from './api/unsplash';
function Home() {
  const[pins,setNewPins]=useState([])
  const getImages=(term) =>{
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params:{
        query:term
      } 
    });
  };
  

  const onSearchSubmit =(term)=>{
    console.log("on search submit",term)
    getImages(term).then((res)=>{
      let results=res.data.results;
      let newPins=[
        ...results,
        ...pins,
      ]

      newPins.sort(function(a,b){
        return Math.max
      });
      setNewPins(newPins);
    })
  }
  const getNewPins=()=>{
    let promises=[];
    let pinData=[];
    let pins=["mountain","lion","japan","korea","northpole"]
    pins.forEach((pinTerm)=>{
      promises.push(
        getImages(pinTerm).then((res)=>{
          let results=res.data.results;
          pinData=pinData.concat(results);
          pinData.sort(function(a,b){
            return 0.5-Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(()=>{
      setNewPins(pinData);
    })
  }
  useEffect(()=>{
  getNewPins();
  },[]);
  return (
    <div>
      <Header onSubmit={onSearchSubmit}/>
     <Mainboard pins={pins}/>
      <Pin />
    </div>
  )
}

export default Home
