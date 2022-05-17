import React, { useState, useEffect } from "react";

function FCoffee({ firstName }) {
//   const [count, setCount] = useState(0);
  const [coffeList, setCoffeList] = useState();
  const [temperature , setTemperature] = useState('hot');
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((response) => response.json()) // .json return data
      // .then(setCoffeList)
      .then((data) => setCoffeList(data))
      .catch(console.error);
  }, [temperature]);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

  console.log({ coffeList });

  return (
    <>
      <h1> Coffee List (F)</h1>
      <p>Hello {firstName}</p>
      <button onClick={()=> setTemperature('hot')}>HOT</button>
      <button onClick={()=> setTemperature('iced')}>ICED</button>
      {/* <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click Me</button> */}
      {!coffeList ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2> Coffees</h2>
          {coffeList.map((coffee) => {
            return <p key={coffee.id}> {coffee.title}</p>;
          })}
        </>
      )}
    </>
  );
}

export default FCoffee;

// function components is better than class components. If useful to k`now the class component so you can rewrite them``
