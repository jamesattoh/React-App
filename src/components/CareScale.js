import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) { //dans l'utilisation il faudra preciser une valeur pour le light/water et
	const range = [1, 2, 3]
	//a chaque fois qu'on veut donner une valeur a une props ou la modifier, il faut créer une new const
	const scaleType = 
		careType === 'light' ? ( //gestion de l'affichage de l'icone de soleil/water selon le string passé à CareScale : light/autre chose
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() => //gestion de popup selon le string pzssé à CareScale et apres un click
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
			/**  cette partie gere l'affichage des gouttes ou soleils
			 * 
			 * scaleValue sera la valeur de light ou water : on itere avec map sur range
			 * a chaque fois que c'est >= a un elem de range on affiche la valeur de scaleType
			 * Et scaleType est soit le soleil ou la goutte d'eau
			 * 
			 * tout ceci sans oublier la key toString vu que c'est un number
			*/
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale