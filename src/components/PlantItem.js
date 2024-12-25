import CareScale from "./CareScale"
import '../styles/plantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

//cette fonction se charge de l'affichage de chaque plante: l'image, le nom, light et water
function PlantItem({cover, name, light, water, price}){
    return(
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}

export default PlantItem