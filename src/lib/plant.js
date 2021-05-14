const icons = {
    "sun-high": "../assets/images/icons/sun-high.svg",
    "sun-low": "../assets/images/icons/sun-low.svg",
    "sun-no": "../assets/images/icons/sun-no.svg",
    "water-daily": "../assets/images/icons/water-daily.svg",
    "water-regulary": "../assets/images/icons/water-regulary.svg",
    "water-rarely": "../assets/images/icons/water-rarely.svg",
    "toxic": "../assets/images/icons/toxic.svg",
    "pets": "../assets/images/icons/pets.svg"
}


const Plant = {
    render(plant) {
        return `
        <div class="plant plant--${plant.staff_favorite ? 'favorite' : ''}">
            <div class="plant__content">
                <div class="plant__image" style="background: url('${plant.url}') no-repeat center; background-size: contain;"></div>
                <div class="plant__name">${plant.name}</div>
                <div class="plant__price">$${plant.price}</div>
                <div class="plant__icons">
                    ${plant.toxicity ? `<img src=${icons["toxic"]} alt="Toxicity Icon">` : ""}
                    <img src="${icons[`sun-${plant.sun}`]}" alt="Sun Icon">
                    <img src="${icons[`water-${plant.water}`]}" alt="Water Icon">
                    ${plant.pets ? `<img src="${icons["pets"]}" alt="Pet Icon">` : ""}
                    </div>
            </div>
        </div>
    `
    }
}

export default Plant;