import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";

const Dropdown = (props: any) => {

    const [drop, setDropdown]: [boolean, any] = useState(false);

    function delay(time: any) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

    return (
        <Box boxShadow="6px 0 4px -4px #999, -6px 0 4px -4px #999" borderRadius="5px">
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"row",fontSize:"1.3vh"}}>
                    <div style={{marginLeft:"0.5vw"}}>Contestant&nbsp;</div>
                    <div style={{fontWeight:"bold"}}> {props.nam}</div>
                </div>
                <div style={{display:"flex", flexDirection:"row", marginLeft:"0.5vw"}}>
                    <div style={{fontSize:"1.3vh"}}>{props.year}&nbsp;</div>
                    <div style={{fontSize:"1.3vh"}}>Winner</div>
                    {drop ? 
                    //ANIMATION
                        <IconButton 
                            onClick = {() => 
                                setDropdown(false)}
                            border="0px"
                            backgroundColor="#FFFFFF"
                            color="#CECECE"
                            fontSize={"6vh"}
                            aria-label='Drop Down' 
                            fontWeight={"normal"}
                            icon={<ChevronUpIcon />}
                            marginLeft={"18vw"}
                        /> : 
                        <IconButton
                            onClick = {() => setDropdown(true)} 
                            border="0px"
                            backgroundColor="#FFFFFF"
                            color="#CECECE"
                            fontSize={"6vh"}
                            aria-label='Drop Down' 
                            fontWeight={"normal"}
                            icon={<ChevronDownIcon />}
                            marginLeft={"18vw"}
                        />
                    }
                </div>
            </div>
            {drop ? <p className="drop" style={{fontFamily: "sans-serif poppins", fontSize: "1.3vh", paddingBottom:"1vh", marginLeft:"0.5vw"}}>{props.description}</p> : <></>}
        </Box>
    );
};

export default Dropdown;