import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Dropdown from "../components/dropdown";
import NavBar from "../components/nav-bar";
import Bio from "./Person.js";

const Victors = () => {

  const [victor, setVictors]: [any, any] = useState([]);
 
  useEffect(() => {
    let getInfo = async () => {
      const response = await fetch('https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json');
      const json = await response.json();
      let victors = json["victors"]
      let temp = []
      for (let i = 0; i < victors.length; i++) {
        temp.push(victors[i])
      }
      setVictors(temp);
    }
    console.log(victor)
    getInfo();  
  }, []);

  return (
    <>
      <div style={{overflow:"fixed"}} >
        <NavBar />
        <div style={{display: "flex", flexDirection:"row"}}>
          <Box w="52vw" h="100vh" backgroundColor={"#F1EDDF"}>
            <div style={{position: "fixed", fontFamily: "sans-serif poppins", marginLeft: "5vw", marginTop: "13vh", width:"42vw", display: "flex", flexDirection:"column"}}>
              <div style={{width:"42vw", fontWeight:"bold", fontSize: "4vh"}}>Past Victors</div>
              <p style={{width:"39vw", marginTop: "1.5vh", fontFamily: "sans-serif poppins", fontSize: "3vh"}}>The Grand Cheese Race has been the most elite sporting event for thousands of years. Every year, each country sends one honorable representative to compete for the Double Gloucester cheese.</p>
              <p style={{width:"38vw", marginTop: "2.5vh", fontFamily: "sans-serif poppins", fontSize: "3vh"}}>To remember all of the legendary victors, we keep a list of the past winners and a description of their victory.</p>
            </div>
          </Box>
          <Box w="48vw" overflow={"hidden"}>
            <div style={{fontFamily: "sans-serif poppins", fontSize: "4vh", fontWeight:"bold", marginLeft: "12vw", marginTop: "13vh", width:"42vw"}}>Scores</div>
            <div style={{position: "fixed", fontFamily: "sans-serif poppins", fontSize: "4vh", marginLeft: "12vw", marginTop: "2vh", width:"27vw"}}>
              {victor.map((item: Bio) => {
                return <div>
                        <Dropdown nam={item.name} year={item.year} description={item.description} /> 
                      </div>
              })}
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Victors;
