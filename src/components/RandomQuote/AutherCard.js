import classes from "./AutherCard.module.css";

const AuthorCard = (props) => {
  const showAuthorQuote = () => {
    props.showQuote();
  };

  return (
    <div>
      <section className={classes.card} onClick={showAuthorQuote}>
        <p className={classes.author}>{props.authorName}</p>
        <p className={classes.genre}>{props.genre}</p>
      </section>
    </div>
  );
};

export default AuthorCard;
