import Banner from "./Banner";
//import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png"
import '../styles/banner.css'

function App() {
  return (
    <div>
      <h2>Hello Ici Dolgen 🔥</h2>

      <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo'/>
          <h1 className='lmj-title'> La maison jungle </h1>
      </Banner>
      <ShoppingList />
      {/* <Cart /> */}
    </div>
  )

}

export default App;
