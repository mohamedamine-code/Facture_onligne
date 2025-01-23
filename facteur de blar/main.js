function calculerPrix() {
    let largeur = parseFloat(document.getElementById("width").value);
    let hauteur = parseFloat(document.getElementById("height").value);
    let type = document.getElementById("type").value.toLowerCase();
    let couleur = document.getElementById("color").value.toLowerCase();
    let typeBlar = parseInt(document.getElementById("typeBlar").value);

    if (isNaN(largeur) || isNaN(hauteur) || largeur <= 0 || hauteur <= 0) {
        document.getElementById("result").textContent = "Veuillez entrer des dimensions valides.";
        return;
    }

    let prixParM2 = 600;
    let surface = largeur * hauteur;
    let prixSurf = surface * prixParM2;

    let prixCouleur = 0;
    let prixType = 0;
    let prixTypeBlar = 0;

    switch (couleur) {
        case "noir":
            prixCouleur = 20;
            break;
        case "blanc":
            prixCouleur = 25;
            break;
        case "gris":
            prixCouleur = 30;
            break;
        case "faux bois":
            prixCouleur = 40;
            break;
        default:
            document.getElementById("result").textContent = "Couleur non disponible.";
            return;
    }

    prixType = (type === "carré") ? 30 : 40;
    prixTypeBlar = (typeBlar === 6) ? 10 : 20;

    let prixTotal = prixSurf + prixCouleur + prixType + prixTypeBlar;
    document.querySelector("#result").textContent = `Le prix total est : ${prixTotal.toFixed(3)} TND.`;
}
