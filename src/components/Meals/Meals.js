import React from "react";
import MealsAvailable from "./MealsAvailable/MealsAvailable";
import MealsSummary from "./MealsSummary/MealsSummary";
import styles from "./Meals.module.css";

const Meals = () => {
  return (
    <React.Fragment>
      <div className={styles.meal}>
        <MealsSummary></MealsSummary>
      </div>
      <MealsAvailable></MealsAvailable>
    </React.Fragment>
  );
};

export default Meals;
