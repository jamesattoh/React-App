import '../styles/categories.css'

function Categories({ setActivateCategory, categories, activateCategory }){
    
    return (
        <div className="lmj-categories">
            <select
            value={activateCategory}
            onChange={(e) => setActivateCategory(e.target.value)}
            className="lmj-categories-select"
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}> 
                    {cat}
                    </option>
                ))}
            </select>
            <button onClick={()=>setActivateCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories