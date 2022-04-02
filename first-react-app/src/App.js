import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'John ';
  const lastName = 'Wick';
  const age = 35;
  const job = 'Team Principal';

  const getFullName = (firstName, lastName) => {
    return `${firstName}, ${lastName}`
  }

  const inputPlaceholder = 'Enter your details';

  const detailsInputbox = <input placeholder={inputPlaceholder} autocomplete />;

  const mArr = [1, 2, 3, 4];

  const mObj = {
      firstName: 'Toto',
      lastName: 'Obj',
      age: 26,
      job: 'Hacker'
  };

  return (
    <div className="App">
      <div className="blogCard">
      <h3>{getFullName(mObj.firstName, mObj.lastName)} </h3>
       <p> Age: {mObj.age} </p>
       <p>Job: {mObj.job}</p>

       {detailsInputbox}

       {/* {mArr} */}
       {
         mArr[0] > 1 ? "True" : "False"
       }
      </div>
    </div>
  );
}

export default App;
