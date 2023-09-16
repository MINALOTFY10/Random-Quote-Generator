import { Fragment } from "react";
import RandomQuote from "../RandomQuote/RandomQuote";
import classes from "./AuthorQuotesList.module.css";

const AuthorQuotesList = (props) => {
  return (
    <Fragment>
      <h1 className={classes["author-name"]}>{props.author}</h1>
      <ul>
        {props.quotes.map((item) => (
          <RandomQuote key={item.id}>{item.quote}</RandomQuote>
        ))}
      </ul>
    </Fragment>
  );
};

export default AuthorQuotesList;
