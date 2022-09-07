import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Card from "../components/card";
import NavBar from "../components/nav-bar";
import Person from "./Person.js";


const Voting: NextPage = (props: any) => {
  
  return (
  <div style={{overflow:"hidden"}}>
    <NavBar />
    <div style={{marginTop: "8vh", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
      {props.votee.map((item: Person) => {
        return <div style={{marginBottom:"5vh"}}>
                <Card score={item.score} name={item.name} imgSrc={item.image} updateCount={props.upDateCount} /> 
              </div>
      })}
    </div>
  </div>
  );
};

export default Voting;
