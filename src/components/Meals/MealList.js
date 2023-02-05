import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealList.module.css"

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наомі"',
    description:
      "Сир Филадельфія, куріне філе, масаго, помідор, огурець, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососі",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суши з угрем",
    description: "Угорь копчений, соус унагі, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Поке з лососем"',
    description:
      "Рис, лосось, огурець, чука, норі, стружка тунця, соус горіховий",
    price: 7.99,
  },
];



const MealList = (props) =>{

  const meallist = DUMMY_MEALS.map(meal=><MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)

  return <section className={styles.meals}>
    <Card>
    <ul>
      {meallist}
    </ul>
    </Card>
  </section>
}

export default MealList