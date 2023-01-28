
import './App.css';
import { useState } from "react"
 const arr = [
   "Anjali",
   "Abhishek",
   "Mohit",
   "Raghvendra",
   "sambit",
   "abcd",
   "cde",
   "zaa",
 ];

function App() {

  const [name, setName] = useState([]);

  const [res, setRes] = useState([]);
  
  const handleSearch = (e) => {
    setName(arr);
    
    const searchName = name.filter((el) => {
      return el.toLowerCase().includes(e.target.value);
    })
    setRes(searchName)
  }
  const debounce = (fun, d) => {
    let timer;
    return function () {
      let context = this
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(context, arguments);
      },d)
    }
  };
  const debounceSearch = debounce(handleSearch,500) 
  return (
    <div className="App">
      <input type="text" onInput={debounceSearch} />
      {res === 0 ? (
        <p>no search result</p>
      ) : (
        res.map((el, id) => {
          return <div key={id}>{el}</div>;
        })
      )}
    </div>
  );
}

export default App;
