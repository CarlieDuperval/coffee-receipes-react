import React, { useState, useEffect } from "react"; // useState and useEffect are the hooks import from react

function FCoffee({ firstName }) { // We are defining our react component
//   const [count, setCount] = useState(0);
  const [coffeList, setCoffeList] = useState(); // destructuring props or create state variable
  const [temperature , setTemperature] = useState('hot'); // create state variable // anytime you want to make change in Usestate
  useEffect(() => {  // useEffect will always run when the component Mount, is listening for a change and when temperature is change it runs again
    fetch(`https://api.sampleapis.com/coffee/${temperature}`) // send the get request to hit the api to ask for coffe hot because we set temperature to hot
      .then((response) => response.json()) // .json return data .json return a promise we need to handle the error
      // .then(setCoffeList)
      .then((data) => setCoffeList(data)) // Return the data 
      .catch(console.error); // cath the error from line 8 to eleven ( from fetch  to .then)
  }, [temperature])

//   const handleClick = () => {
//     setCount(count + 1);
//   };

  console.log({ coffeList });

  return ( // all react components always return valid jsx
  //is a fragment all react component need parent
    <>                 
      <h1> Coffee List (F)</h1> 
      <p>Hello {firstName}</p>
      <button onClick={()=> setTemperature('hot')}>HOT</button>
      <button onClick={()=> setTemperature('iced')}>ICED</button>
      {/* <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click Me</button> */}
      {!coffeList  // if coffee list list is false 
      ? 
      <h2>Loading...</h2> // When waiting for coffe list to display Loading
        : 
        <>
          <h2> Coffees</h2>
          {coffeList.map((coffee) => { // once we have the coffe list we can map trought it
            return <p key={coffee.id}> {coffee.title}</p>; // return the caffe list
          })}
        </>
      }
    </>
  );
}

export default FCoffee; // we can export only one default export 

// function components is better than class components. If useful to k`now the class component so you can rewrite them``
