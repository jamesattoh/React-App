import '../styles/categories.css'

// Déclaration du composant Categories
function Categories({ setActivateCategory, categories, activateCategory }){

    /*Le composant Categories.js  prend trois props :
    setActivateCategory : Une fonction pour mettre à jour la catégorie activée.
    categories : Un tableau de catégories disponibles.
    activateCategory : La catégorie actuellement activée.*/  

    return (
        <div className="lmj-categories">
            {/* Menu déroulant pour sélectionner une catégorie */}
            <select
            value={activateCategory} // Valeur actuelle de la catégorie activée
            onChange={(e) => setActivateCategory(e.target.value)} // Met à jour la catégorie activée lors d'un changement
            className="lmj-categories-select"
            >   
                {/* Option par défaut vide */}
                <option value=''>---</option>
                {/* Génération dynamique des options de catégories */}
                {categories.map((cat) => (
                    <option key={cat} value={cat}> 
                        {cat}
                    </option>
                ))}
            </select>
            {/* Bouton pour réinitialiser la catégorie activée */}
            <button onClick={()=>setActivateCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories