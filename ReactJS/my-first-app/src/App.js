//traditionally == html page but in react=== component
const App = () => {
  //basic syntax
  const element = <h2> Namaste </h2>;
  //Embedding expressions
  const name = "ReactJS Developer";
  const element2 = (
    <h1>
      Namaste {name} {2 + 2}
    </h1>
  );
  //JSX as an operation
  const element3 = (
    <div>
      <h1> Jai Bajrangbali </h1>
      <h2> It is {new Date().toLocaleTimeString()} </h2>
    </div>
  );
  //   return element3; -> can be written like this or ..
  return (
    <div>
      <h1> Jai Bajrangbali </h1>
      <h2> It is {new Date().toLocaleTimeString()} </h2>
    </div>
  );
};

export default App;
