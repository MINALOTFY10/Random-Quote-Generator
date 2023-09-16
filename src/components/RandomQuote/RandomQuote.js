import classes from "./RandomQuote.module.css";

const RandomQuote = (props) => {
  return (
    <div>
      <section className={classes.section}>
        <p>{props.children}</p>
      </section>
    </div>
  );
};

export default RandomQuote;
