import { useState } from "react"

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const add = (num = 1) => {
    setCount(count + num);
  }

  const substract = (num = 1) => {
    setCount(count - num)
  }

  return {
    count,
    add,
    substract
  }
} // Importante, la palabra use precediendo el nombre

export default useCounter