import { useState } from 'react'
import '../styles/cart.css'

function Cart() {
	const monsteraPrice = 8
    /**
     *  on peut créer un state cart . Avec  useState  , nous devons  déclarer
     *  en même temps une fonction pour mettre à jour ce state ( updateCart  ),
     *  et lui attribuer une valeur initiale, qui sera ici de 0 :
     * les crochets  [] ici, ça s'appelle la décomposition,
     * useState   nous renvoie une paire de valeurs dans un tableau de 2 éléments,
     *  que nous récupérons dans les variables  cart   et  updateCart 
     * 
     * J'aurais tout aussi bien pu faire :
     * const [coucou, cavabien] = useState(0)

     */
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart