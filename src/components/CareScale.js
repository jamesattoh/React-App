import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	//a chaque fois qu'on veut donner une valeur a une props ou la modifier, il faut créer une new const
	const scaleType = 
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
			/** 
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