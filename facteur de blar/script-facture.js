// Load orders and customer data from localStorage
let commandes = JSON.parse(localStorage.getItem("commandes")) || [];
let commandes_formulaires = JSON.parse(localStorage.getItem("commandes_formulaires")) || [];
let tableBody = document.getElementById("table-body");
let custommer = document.querySelector(".custommer");

// Populate customer information
commandes_formulaires.forEach(cmd => {
    let customerInfo = document.createElement("div");
    customerInfo.innerHTML = `
        <h5>Nom: ${cmd.nom}</h5>
        <h5>Prénom: ${cmd.prenom}</h5>
        <h5>Date: ${cmd.date}</h5>
    `;
    custommer.appendChild(customerInfo);
});

// Populate the orders table
commandes.forEach((cmd, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${cmd.designation}</td>
        <td>${cmd.largeur}</td>
        <td>${cmd.hauteur}</td>
        <td>${cmd.type}</td>
        <td>${cmd.couleur}</td>
        <td>${cmd.typeBlar}</td>
        <td>${parseFloat(cmd.prixTotal).toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
});

// Calculate and display the total price
let total = commandes.reduce((acc, cmd) => acc + (parseFloat(cmd.prixTotal) || 0), 0);
document.getElementById("prixTotal").innerText = total.toFixed(2);

// Reset functionality
function reset() {
    // Clear data in localStorage
    localStorage.removeItem("commandes");
    localStorage.removeItem("commandes_formulaires");
    // Clear table and customer information
    tableBody.innerHTML = '';
    custommer.innerHTML = '';
}
