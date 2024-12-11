import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import CareScale from "./CareScale";
import { plantList } from "../datas/plantList";

function App() {
  return (
    <div>
      <h2>Hello Ici Dolgen 🔥</h2>
      <Banner />
      <ShoppingList />
      <Cart />
      <CareScale scaleValue={plantList.light} />
    </div>
  )

}

export default App;
