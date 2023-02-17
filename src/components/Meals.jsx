import styled from "styled-components";
import { useGlobalContext } from "../context"

const Meals = () => {
  const {meals} = useGlobalContext();

  return <StyledMeals>
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
  </StyledMeals>
}

const StyledMeals = styled.section`
  padding: 3rem 0;
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

export default Meals;