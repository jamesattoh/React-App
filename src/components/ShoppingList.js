import { plantList } from '../datas/plantList'
import { useState } from 'react';
import PlantItem from './PlantItem';
import Categories from './Categories';
import '../styles/shoppingList.css'


function ShoppingList({ cart, updateCart }) {
    // Déclaration de l'état pour la catégorie activée
    const [activateCategory, setActivateCategory] = useState('')
    /**
     * la méthode reduce pour parcourir plantList et créer un tableau categories 
     * qui contient toutes les catégories de plantes, sans doublons. Voici ce 
     * qui se passe en détail : acc commence comme un tableau vide [].
     * Pour chaque plante dans plantList, si acc contient déjà la catégorie 
     * de cette plante (acc.includes(plant.category)), alors acc reste inchangé.
     *  Sinon, la catégorie de cette plante est ajoutée à acc (acc.concat(plant.category)).
     * 
     * reduce – Réduire un tableau à une seule valeur
     * -----Prend deux arguments : Une valeur accumulée (ce que reduce calcule) et L'élément actuel du tableau.
        Retourne une nouvelle version de la valeur accumulée.
        ex : const total = numbers.reduce((acc, current) => acc + current, 0);
        /acc : c'est le total (au début, 0)
        /current : c'est chaque nombre du tableau
     * 
     * includes – Vérifie si un tableau ou une chaîne contient une valeur :retourne true si la valeur est trouvée, sinon false
     * 
     * concat – Combiner des tableaux : ne modifie pas les tableaux d'origine et retourne un nouveau tableau.
     * 
     * forEach – Parcourir un tableau. EX : numbers.forEach((num) => {
        -                                       total += num;
        -                                    });

     */
    // Génération des catégories uniques à partir de plantList. Ce tableau est ensuite passé en prop au composant Categories.
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), //de facon unique on aura les categories
		[]
	)
    
/**
La fonction addToCart permet d'ajouter une plante au panier (cart).

* Recherche de la plante dans le panier :

La fonction prend deux arguments : name (le nom de la plante) et price (le prix de la plante).
Elle cherche si la plante avec le nom donné (name) est déjà présente dans le panier en utilisant la méthode find sur le tableau cart.
Si la plante est déjà dans le panier :

* Si la plante est trouvée (currentPlantSaved n'est pas undefined), elle filtre le panier pour exclure cette plante en utilisant la 
méthode filter. Ensuite, elle met à jour le panier (updateCart) en ajoutant la plante avec la quantité (amount) incrémentée de 1.

* Si la plante n'est pas dans le panier :
Si la plante n'est pas trouvée (currentPlantSaved est undefined), elle met à jour le panier (updateCart) en ajoutant la nouvelle 
plante avec une quantité (amount) de 1.
*/
    function addToCart(name, price) {
        // Chercher si la plante est déjà dans le panier
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
            // Si la plante est déjà dans le panier, filtrer le panier pour exclure cette plante
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
            // Mettre à jour le panier en ajoutant la plante avec la quantité incrémentée de 1
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
            // Si la plante n'est pas dans le panier, ajouter la nouvelle plante avec une quantité de 1
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    /**
     * À partir d’une liste de données,  map()   permet de créer une liste de composants React
     * 
     * La prop key est indispensable dans les listes de composants
     * 
     * categories.map((cat) => (<li key={cat}>{cat}</li>)) génère une liste <ul> 
     * avec un élément <li> pour chaque catégorie dans categories, avec lol comme clé
     * *****
     * plantList.map((plant) => (<li key={plant.id}>{plant.name}</li>)) génère une 
     * autre liste <ul> avec un élément <li> pour chaque plante dans plantList, avec plant.id comme clé
     * 
     * && précède un élément JSX précise que l'élément ne sera généré que si la condition est respectée.
     */
	return (
		<div className='lmj-shopping-list'>
            {/* Utilisation du composant Categories */}
			<Categories 
                categories={categories} // Tableau des catégories disponibles
                setActivateCategory={setActivateCategory} // Fonction pour mettre à jour la catégorie activée
                activateCategory={activateCategory} // Catégorie actuellement activée
            />

            {/* Affichage des plantes filtrées par catégorie */}
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, light, water, price, category }) => 
                    !activateCategory || activateCategory === category ? (
                        <div key={id}>
                            <PlantItem 
                                cover={cover}
                                name={name}
                                light={light}
                                water={water}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>

                        </div>

				    ):null
                )}
			</ul>
		</div>
	)
}

export default ShoppingList