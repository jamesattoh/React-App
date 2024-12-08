import { plantList } from '../datas/plantList'
import '../styles/shoppingList.css'

function ShoppingList() {
    /**
     * la méthode reduce pour parcourir plantList et créer un tableau categories 
     * qui contient toutes les catégories de plantes, sans doublons. Voici ce 
     * qui se passe en détail : acc commence comme un tableau vide [].
     * Pour chaque plante dans plantList, si acc contient déjà la catégorie 
     * de cette plante (acc.includes(plant.category)), alors acc reste inchangé.
     *  Sinon, la catégorie de cette plante est ajoutée à acc (acc.concat(plant.category)).
     */

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

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
		<div>
			<ul>
				{categories.map((lol) => (
					<li key={lol}>{lol}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name} 
                        {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                    </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList