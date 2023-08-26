import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header, QuoteCard } from "../components";

const Author = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [quotes,setQuotes] = useState(null);
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false); 

  const url = `https://quote-garden.onrender.com/api/v3/quotes?author=${params.author}`;
  useEffect(() => {
    async function fetchQuotesByAuthor() {
      try {
        setError(null);
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed fetching...");
        }
        const resData = await res.json();
        setQuotes(resData.data);
      
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchQuotesByAuthor();
  }, []);
 const navigateToHome = ()=>{
  navigate('/')
 }

  let content;

  if (error)  content = <p>Error</p>;
  if (loading) content = (<div className="grid place-items-center  min-h-[70vh]"> 
    <h1 className="">Loading....</h1>;
  </div>)
  
  if (quotes) {
    content = (
      <div className=" px-3 min-h-[70vh]">
        <Header onClick={navigateToHome}/>
        <div className="px-8 max-w-3xl mx-auto py-4 flex justify-between items-center ">
          <h2 className="text-2xl font-semibold capitalize">
            {params.author}
          </h2>
          <Link to="..">
            <i className="fa-solid fa-arrow-left-long"></i>
          </Link>
        </div>
        {quotes.map((quote) => (
          <QuoteCard key={quote._id} showAuthor={false} quote={quote} />
        ))}
      </div>
    );
  }
  return (
    <div className="container max-w-5xl mx-auto ">{content}</div>
  );
};

export default Author;
