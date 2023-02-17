import { useGlobalContext } from "../context"

const Meals = () => {
  const {meals} = useGlobalContext();

  return <section>
    {meals.map((singleMeal) => {
      const {idMeal:id, strMeal:title, strMealThumb:image} = singleMeal;
      return (
        <article key={id} className='single-meal'>
          <img src={image} className="img" style={{width: '200px'}}/>
          <footer>
            <h5>{title}</h5>
            <button className='like-btn'>click me</button>
          </footer>
        </article>
      );
    })}
  </section>
}

export default Meals;