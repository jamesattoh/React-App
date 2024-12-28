import { useState, useEffect } from 'react'
import '../styles/cart.css'

/**cart représente l'état du panier dans l'application. C'est un tableau qui contient des objets 
représentant les plantes ajoutées au panier. Chaque objet dans ce tableau a des propriétés comme
 name, price, et amount pour indiquer le nom de la plante, son prix unitaire, et la quantité ajoutée au panier.

 son utilisation :

Initialisation : cart est initialisé comme un tableau vide dans le composant App avec useState([]).
Passage en prop : cart est passé en tant que prop aux composants Cart et ShoppingList.
Utilisation dans Cart : Dans Cart, cart est utilisé pour :
	Calculer le total des prix des plantes dans le panier.
	Afficher la liste des plantes dans le panier avec leur nom, prix et quantité.
	Vider le panier en appelant updateCart([]).
**/


function Cart({ cart, updateCart }) {
	//const monsteraPrice = 8
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

	// État pour gérer si le panier est ouvert ou fermé
	const [isOpen, setIsOpen] = useState(true)

	// Récupération des clés des objets du panier
	const items = Object.keys(cart)

	// Calculer le prix total des articles dans le panier
	const total = items.reduce( //reduce reduit le tableau items a une seule valeur
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

    // Mettre à jour le titre du document avec le total des achats
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul> {/*Utilisation de map pour afficher chaque article du panier avec ses détails (name, price, amount)*/}
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}> 
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
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