import React, { useEffect, useState } from "react";
import { Header, QuoteCard } from "../components";

const Home = () => {
  const [data, setData] = useState(null);
  const [randomQuote, setRandomQuote] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = "https://quote-garden.onrender.com/api/v3/quotes?limit=500&genre=knowledge";

  useEffect(() => {
    async function fetchQuotes() {
      try {
        setError(null);
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed fetching...");
        }
        const resData = await res.json();
        setData(resData);
        console.log(resData)
        const random = resData.data[Math.floor(Math.random() * 500)];
        setRandomQuote(random);
        console.log(random);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchQuotes();
  }, []);

  const generateRandom = () => {
    const random = data.data[Math.floor(Math.random() * 200)];
    setRandomQuote(random);
  };

  let content;

  if (error) content = <p>Error</p>;
  if (loading) content = <h1>Loading....</h1>;
  if (data) {
    content = <QuoteCard quote={randomQuote} />;
  }

  return (
    <>
      <div className="container max-w-5xl mx-auto">
        <Header onClick={generateRandom} />
        <div className=" mx-auto px-3  min-h-[70vh] grid place-items-center">
          {content}
        </div>
      </div>
    </>
  );
};

export default Home;
