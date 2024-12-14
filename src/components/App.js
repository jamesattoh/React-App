import Banner from "./Banner";
import logo from "../assets/logo.png"
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import '../styles/banner.css'
import '../styles/layout.css'


function App() {
  return (
    <div>
      
      <h2>Hello Ici Dolgen 🔥</h2>

			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			<div className='lmj-layout-inner'>
          <Cart />
          <ShoppingList />
			</div>

			<Footer />

    </div>
  )

}

export default App;
