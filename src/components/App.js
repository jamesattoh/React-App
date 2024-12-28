import { useState, useEffect } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png"
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import '../styles/layout.css'


function App() {
  // Initialiser le panier avec les données de localStorage
  const savedCart = localStorage.getItem('cart') //Récupération des données du panier depuis localStorage sous la clé cart
  let initialCart = [];
  try {
    initialCart = savedCart ? JSON.parse(savedCart) : [] //Si savedCart contient des données, elles sont parsées (converties en objet JavaScript) avec JSON.parse
  } catch (error) {
    console.error("Error parsing saved cart data:", error);
  }
  const [cart, updateCart] = useState(initialCart) //Initialisation de l'état du panier
  
  /** Sauvegarder le panier à chaque modification
    useEffect est un hook qui permet d'exécuter du code après le rendu du composant.
    Le tableau de dépendances [cart] indique que l'effet doit être exécuté chaque fois que cart change.
    À chaque modification de cart, les nouvelles données du panier sont stringifiées avec JSON.stringify
    et sauvegardées dans localStorage sous la clé 'cart'
   */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)) //JSON.stringify convertit en une chaîne JSON
  }, [cart]);
  return (
    <div>

			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			<div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
			</div>

			<Footer />

    </div>
  )

}

export default App;
