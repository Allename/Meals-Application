import styled from "styled-components";
import { useGlobalContext } from "../context"
import {BsHandThumbsUp} from 'react-icons/bs';

const Meals = () => {
  const {meals, loading, selectMeal, addToFavorites} = useGlobalContext();

  if(loading) {
    return <Loading>
      <h4>Loading....</h4>
    </Loading>
  }

  if(meals.length < 1) {
    return <NoMeals>
      <h4>No meals matched your search term. Please try again</h4>
    </NoMeals>
  }

  return <StyledMeals>
    {meals.map((singleMeal) => {
      const {idMeal:id, strMeal:title, strMealThumb:image} = singleMeal;
      return (
        <article key={id} className='single-meal'>
          <img src={image} className="img" alt={title} onClick={() => selectMeal(id)}/>
          <footer>
            <h5>{title}</h5>
            <button className='like-btn' onClick={() => addToFavorites(id)}><BsHandThumbsUp/></button>
          </footer>
        </article>
      );
    })}
  </StyledMeals>
}

const sharedStyles = `
  padding: 3rem 0;
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Loading = styled.section`
  ${sharedStyles}
`;

const NoMeals = styled.section`
  ${sharedStyles}
`;

const StyledMeals = styled.section`
  ${sharedStyles}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .single-meal {
    background: var(--white);
    color: var(--textColor);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);

    &:hover {
      box-shadow: var(--shadow-4);
    }

    .img {
      height: 15rem;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
      cursor: pointer;
    }

    footer {
      padding: 1rem 1.5rem;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-between;

      h5 {
        padding: 0;
        margin: 0;
      }

      .like-btn {
        background: transparent;
        border: transparent;
        font-size: 1.5rem;
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          color: var(--red-dark);
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export default Meals;