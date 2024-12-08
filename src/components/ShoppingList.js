import { plantList } from '../datas/plantList'

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
     * categories.map((cat) => (<li key={cat}>{cat}</li>)) génère une liste <ul> 
     * avec un élément <li> pour chaque catégorie dans categories, avec lol comme clé
     * *****
     * plantList.map((plant) => (<li key={plant.id}>{plant.name}</li>)) génère une 
     * autre liste <ul> avec un élément <li> pour chaque plante dans plantList, avec plant.id comme clé
     */
	return (
		<div>
			<ul>
				{categories.map((lol) => (
					<li key={lol}>{lol}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList