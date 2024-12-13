import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	/**
	 * tout d'abord faire import useState
	 *  on cree une variable inputValue dont la valeur par defaut situee dans  le state local
	 * sera modifiee par des fonctions grace a setInputValue
	 **/
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
            />
		</footer>
	)
}

export default Footer

/**
 * on peut faire des controles assez interessants avec react. Par exemple :
 // Si nous décidons qu'il n'est pas autorisé d'utiliser la lettre "f" nous pouvons déclarer une variable :
 * const isInputError = inputValue.includes('f') 

 //et afficher ou non un message d'erreur en fonction de ce booléen :
 * {isInputError && (
    <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
	)}
onChange={(e) => checkValue(e.target.value)}

//nous pouvons aussi intercepter une mauvaise valeur entrée par l'utilisateur. Pour cela, il faut 
// déclarer une fonction intermédiaire :
 * function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}
// et on applique la modification dans notre fonction callback :

onChange={(e) => checkValue(e.target.value)}
 */