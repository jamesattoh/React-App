function Cart(){
    const prixMontsera = 8
    const prixLierre = 10
    const prixBouquet = 15

    return (
        <div>
            <h2>Le panier</h2>
            <ul>
                <li>Montsera : { prixMontsera } € </li>
                <li> Lierre : { prixLierre } €</li>
                <li> Bouquet : { prixBouquet } €</li>
            </ul>
            Total : {prixMontsera + prixLierre + prixBouquet } €
        </div>
    )
}

export default Cart