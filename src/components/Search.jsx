import styled from "styled-components"

const Search = () => {
  return <StyledSearch>
    <form>
      <input 
        type="text"
        placeholder="type favorite meal"
        className='form-input'
      />
      <button type="submit">Search</button>
      <button type="submit" className='btn btn-hipster'>Surprise Me!</button>
    </form>
  </StyledSearch>
}

export default Search;