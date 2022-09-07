import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Person from "./Person.js"
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  const [votes, setVotes]: [any, any] = useState([]);
 
  useEffect(() => {
    let getInfo = async () => {
      const response = await fetch('https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json');
      const json = await response.json();
      let voters = json["voting"]
      let temp = []
      for (let i = 0; i < voters.length; i++) {
        temp.push(voters[i])
      }
      setVotes(temp);
    }
    getInfo();  
  }, []);

  const upvote = (name: any, inc: boolean) => {
    for (let i = 0; i < votes.length; i++) {
      if (name === votes[i].name) {
        if (inc) {
          let temp = votes
          temp.splice(i, 1, {
            name: votes[i].name,
            score: votes[i].score + 1,
            image: votes[i].image
          })
          setVotes([...temp])
          console.log(votes[i].score)
        } else if (votes[i].score > 0) {
          let temp = votes
          temp.splice(i, 1, {
            name: votes[i].name,
            score: votes[i].score - 1,
            image: votes[i].image
          })
          setVotes([...temp])
        }
        break;
      }
    }
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} upDateCount={upvote} votee={votes}/>
    </ChakraProvider>
  );
}

export default MyApp;
