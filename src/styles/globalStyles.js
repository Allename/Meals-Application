import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  :root {
    /* colors */
    --primary-100: #e6f0ff;
    --primary-200: #b4d3fe;
    --primary-300: #82b6fd;
    --primary-400: #5098fc;
    --primary-500: #03449d;
    --primary-600: #034caf;
    --primary-700: #02367d;
    --primary-800: #01214b;
    --primary-900: #000b19;

    /* grey */
    --grey-50: #f8fafc;
    --grey-100: #f1f5f9;
    --grey-200: #e2e8f0;
    --grey-300: #cbd5e1;
    --grey-400: #94a3b8;
    --grey-500: #64748b;
    --grey-600: #475569;
    --grey-700: #334155;
    --grey-800: #1e293b;
    --grey-900: #0f172a;

    /* rest of the colors */
    --black: #222;
    --white: #fff;
    --red-light: #f887da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;

    /* fonts */
    --small-text: 0.875rem;
    --extra-small-text: 0.7rem;

    /* rest of the vars */
    --backgroundColor: var(--white);
    --backgroundColor: var(--grey-100);
    --textColor: var(--grey-900);
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;
    --view-width: 90vw;

    /* box shaodw */
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  body {
    background: var(--backgroundColor);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-weight: 400;
    line-height: 1.75;
    color: var(--textColor);
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 40rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    margin-bottom: 1.38rem;
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small,
  .text-small {
    font-size: var(--small-text);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  /* buttons */
  .btn {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }

  .btn:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }

  .btn-hipster {
    color: var(--primary-500);
    background: var(--primary-200);
  }

  .btn-hipster:hover {
    color: var(--white);
    background: var(--black);
  }

  .btn-block {
    width: 100%
  }
`;