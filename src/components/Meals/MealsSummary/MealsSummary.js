import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./MealsSummary.module.css";
import bgImg from "../../../assets/meals.jpg";

const MealsSummary = () => {
  return (
    <React.Fragment>
      <div
        className={styles.summaryWrapper}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Card appendClass={styles.summaryContainer}>
          <header>
            <p className={styles.summaryTextHeader}>
              Delicious Food, Delivered To You
            </p>
          </header>
          <div className={styles.summaryContent}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              deserunt culpa fugit a quibusdam.
            </p>

            <p>
              Sed quasi, eveniet eius unde sapiente quas corporis molestiae
              maxime, reprehenderit saepe amet numquam ab ullam.
            </p>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default MealsSummary;
