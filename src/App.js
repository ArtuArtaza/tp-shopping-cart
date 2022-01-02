import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Products from './components/Products'
import useFetch from './hooks/useFetch'
function App() {

  const url = 'https://fakestoreapi.com/products'
  const {data,isLoading} = useFetch(url)

  return (
    <div className="App">
      <NavigationBar/>
      {
        isLoading 
        ? <h1>Loading...</h1>
        : <Products productsList={data}/>
      }
      
    </div>
  );
}

export default App;
