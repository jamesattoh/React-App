import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem';
import '../styles/shoppingList.css'


function ShoppingList() {
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
        ex : onst total = numbers.reduce((acc, current) => acc + current, 0);
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

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), //de facon unique on aura les categories
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
				{plantList.map(({id, cover, name, light, water}) => (

                        <PlantItem 
                            id={id}
                            cover={cover}
                            name={name}
                            light={light}
                            water={water}
                        />

				))}
			</ul>
		</div>
	)
}

export default ShoppingList