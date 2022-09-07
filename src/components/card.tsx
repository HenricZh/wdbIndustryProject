import { Text, Box, IconButton, Image } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Card = (props: any): JSX.Element => {

  console.log(props.score)

  return (
    <div> 
      <Box backgroundColor={"#F1EDDF"} w={"26vw"} style={{marginRight: "4vw", marginLeft: "4vw"}}>
        <Image objectFit={"cover"} backgroundPosition={"center"} h={"21vh"} w={"28vw"} src={props.imgSrc}></Image>
        <div style={{display: "flex", flexDirection: "row", textAlign: "left", justifyContent: "space-between", paddingBottom:"3%", marginTop: "2%"}}>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "4%"}}>
          <Text fontSize={"1.5vh"} fontWeight={"Bold"} whiteSpace="nowrap">{props.name}</Text>
          <Text fontSize={"1.5vh"}>Score: {props.score.toLocaleString("en-US")}</Text>   
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <IconButton
            onClick={() => props.updateCount(props.name, true)} 
            aria-label='Up Vote' 
            icon={<ChevronUpIcon />} 
            width={"4vw"} height={"90%"} 
            borderRadius="60"
            fontSize={30}
            fontWeight={"normal"}
            color="Black" 
            backgroundColor={"#EFDCB6"}
            boxShadow={'dark-lg'}
            style={{marginLeft:"5%", marginTop: "2%"}}
          />
          <IconButton 
            onClick={() => props.updateCount(props.name, false)}
            aria-label='Up Vote' 
            icon={<ChevronDownIcon />} 
            width={"4vw"} height={"90%"} 
            borderRadius="60"
            color="Black" 
            fontSize={30}
            fontWeight={"normal"}
            backgroundColor={"#EFDCB6"}
            boxShadow='dark-lg'
            style={{marginLeft:"7%", marginTop: "2%", marginRight: "2vw"}}
          />
        </div>
      </div>
      </Box>
    </div>
  );
};

export default Card;