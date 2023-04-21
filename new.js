import React,{useState, useEffect} from 'react';

export default function New() {
    const[quotes,setQuotes]=useState(" Hello ");
    const[author,setAuthor]=useState("World");
    useEffect(()=> { 
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    },[]);
    let fetchNewQuotes=()=>{
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    }
  return (
    <div className="quotes">
    <h2><b>{quotes}</b></h2>
    <small>-{author}-</small><br /><br /><br/>
    <button className='btn'  onClick={fetchNewQuotes}> New Quotes</button><br/>
    <a  href={`https://twitter.com/intent/tweet?text=${quotes}-${author}`} target="-blank" rel="noopener noreferrer" ><img className="twitt" src=''/>TWITTER</a>
   
    </div>
  )
}