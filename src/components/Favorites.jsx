import styled from "styled-components";
import { useGlobalContext } from "../context";

const Favorites = () => {
  const {favorites, selectMeal, removeFromFavorites} = useGlobalContext();

  return <Favorite>
    <div className="favorites-content">
      <h5>Favorites</h5>
      <div className="favorites-container">
        {favorites.map((item) => {
          const {idMeal:id, strMeal:title, strMealThumb:image} = item;
          return <div key={id} className='favorite-item'>
            <img src={image} alt={title} className='favorites-img img' onClick={() => selectMeal(id, true)}/>
            <button className="remove-btn" onClick={() => removeFromFavorites(id)}>remove</button>
          </div>
        })}
      </div>
    </div>
  </Favorite>
}

const Favorite = styled.section`
  background: var(--black);
  color: var(--white);
  padding: 1rem 0;

  .favorites-content {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;

    .favorites-container {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;

      .favorite-item {
        text-align: center;

        .favorites-img {
          width: 60px;
          border-radius: 50%;
          border: 5px solid var(--white);
          cursor: pointer;
        }

        .remove-btn {
          margin-top: 0.25rem;
          background: transparent;
          border: transparent;
          color: var(--white);
          cursor: pointer;
          font-size: 0.5rem;
          transition: var(--transition);

          &:hover {
            color: var(--red-dark);
          }
        }
      }
    }
  }
`;

export default Favorites;