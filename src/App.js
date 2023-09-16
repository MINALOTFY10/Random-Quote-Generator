import React, { Fragment, useEffect, useState } from "react";
import RandomQuote from "./components/RandomQuote/RandomQuote";
import UseHttp from "./components/Hooks/use-http";
import LoadingScreen from "./components/UI/LoadingScreen";
import Layout from "./components/Layout/Layout";
import AuthorCard from "./components/RandomQuote/AutherCard";
import AuthorQuotes from "./components/AuhtorQuotes/AuthorQuotes";
import ErrorScreen from "./components/UI/ErrorScreen";

function App() {
  const [randomQuote, setrandomQuote] = useState("");
  const [authorName, setauthorName] = useState("");
  const [genre, setgenre] = useState("");
  const [showAuthorQuotes, setshowAuthorQuotes] = useState(false);

  const { isLoading, error, sendRequest: fetchTasks } = UseHttp();

  useEffect(() => {
    const transformTasks = (data) => {
      setrandomQuote(data[0].quoteText);
      setauthorName(data[0].quoteAuthor);
      setgenre(data[0].quoteGenre);
    };

    fetchTasks(
      {
        url: " https://quote-garden.onrender.com/api/v3/quotes/random",
      },
      transformTasks
    );
  }, []);

  const showAuthorQuote = () => {
    setshowAuthorQuotes(true);
  };

  let content = "";

  if (isLoading) {
    content = <LoadingScreen />;
  }else if(error){
    content =<ErrorScreen errorMessage={"Can't Find Random Quote"}/>
  } else {
    content = (
      <p>
        {showAuthorQuotes ? (
          <AuthorQuotes author={authorName} />
        ) : (
          <div className="Container">
            <RandomQuote>{randomQuote}</RandomQuote>{" "}
            <AuthorCard
              genre={genre}
              authorName={authorName}
              showQuote={showAuthorQuote}
            />
          </div>
        )}
      </p>
    );
  }

  return <Layout>{content}</Layout>;
}

export default App;
