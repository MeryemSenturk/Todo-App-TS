import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main"

/**
 * @description Generates high-quality documentation for code by returning an HTML
 * fragment containing a single `Main` element.
 * 
 * @returns { HTML element, specifically `<div>` elements } a div element containing
 * a main component.
 * 
 * 	The `<div>` tag is present, indicating that there is a block-level element in the
 * HTML code.
 * 
 * 	The `<Main>` tag is contained within the `<div>`, signifying that the content
 * following the `<Main>` tag belongs to an HTML element inside a larger container
 * HTML element (`<div>`).
 * 
 * 	In summary, the `App` function returns HTML code containing a block-level element
 * with an embedded HTML element.
 */
function App() {
  return (
<div>
<Main/>
</div>
  );
}

export default App;
