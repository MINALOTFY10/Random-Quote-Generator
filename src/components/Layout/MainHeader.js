import classes from "./MainHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  const generateRandomHanlder = () => {
    window.location.reload();
  };

  return (
    <header className={classes.header}>
      <div className={classes["random-button"]} onClick={generateRandomHanlder}>
        <h1>random</h1>
        <FontAwesomeIcon icon={faShuffle} className={classes.icon} />
      </div>
    </header>
  );
};

export default MainHeader;
