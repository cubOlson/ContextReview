import coffeeBean from "./mockData/coffeeBeans.json";
import  SetCoffeeBean from './components/SetCoffeeBean';
import SelectedCoffeeBean from './components/SelectedCoffeeBean';

function App() {
  return (
    <>
      <SelectedCoffeeBean />
      <SetCoffeeBean coffeeBeans={coffeeBean}/>
      <h1>Welcome to Coffee App</h1>
    </>
  );
}

export default App;
