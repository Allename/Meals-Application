import { useState } from "react";
import styled from "styled-components"
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState('');

  const {setSearchTerm} = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text) {
      setSearchTerm(text);
      setText('');
    }
  }

  return <StyledSearch>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="type favorite meal"
        value={text}
        onChange={handleChange}
        className='form-input'
      />
      <button type="submit" className='btn'>Search</button>
      <button type="submit" className='btn btn-hipster'>Surprise Me!</button>
    </form>
  </StyledSearch>
}

const StyledSearch = styled.header`
  height: 5rem;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: var(--view-width);
    max-width: var(--max-width);
    display: flex;
    gap: 0.5rem;
    flex-flow: row wrap;

    .form-input {
      max-width: 200px;
      padding: 0.375rem 0.75rem;
      border-radius: var(--borderRadius);
      background: var(--backgroundColor);
      border: 1px solid var(--gray-200);

      &::placeholder {
        font-family: inherit;
        color: var(--grey-400);
      }
    }

    .btn {
      font-size: 0.75rem;
    }
  }
`;

export default Search;