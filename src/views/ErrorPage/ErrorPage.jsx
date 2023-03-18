import { useState } from "react";
import { Link } from "react-router-dom";
import useCounter from "../../hooks/useCounter";
import useWindowSize from "../../hooks/useWindowSize";

const ErrorPage = () => {
  const { count, add, substract } = useCounter()
  const { width, height } = useWindowSize()

  return (
    <div>
      <h1>Ops something ocurred!</h1>
      <h3>404</h3>

      <p>You may want to see our <Link to="products">products</Link>!</p>
      { width >= 768 && <p>Count: {count}</p> }
      <button onClick={() => add(2)}>Add</button>

      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  )
}

export default ErrorPage;