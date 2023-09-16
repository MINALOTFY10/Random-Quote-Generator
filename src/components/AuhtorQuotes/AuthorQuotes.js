import UseHttp from "../Hooks/use-http";
import { useEffect, useState } from "react";
import AuthorQuotesList from "./AuthorQuotesList";
import LoadingScreen from "../UI/LoadingScreen";
import ErrorScreen from "../UI/ErrorScreen";

const AuthorQuotes = (props) => {
  let content = "";
  const [loadedQuotes, setLoadedQuotes] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = UseHttp();

  useEffect(() => {
    const transformTasks = (data) => {
      const loadedQuotes = [];

      for (const quoteObj of data) {
        loadedQuotes.push({ id: quoteObj._id, quote: quoteObj.quoteText });
      }

      setLoadedQuotes(loadedQuotes);
    };

    fetchTasks(
      {
        url: `https://quote-garden.onrender.com/api/v3/quotes?author=${props.author}`,
      },
      transformTasks
    );
  }, []);

  if (isLoading) {
    content = <LoadingScreen />;
  } else if (error) {
    content = <ErrorScreen errorMessage={"Can't Find Random Quote"} />;
  } else {
    content = <AuthorQuotesList quotes={loadedQuotes} author={props.author} />;
  }
  
  return <div>{content}</div>;
};

export default AuthorQuotes;
