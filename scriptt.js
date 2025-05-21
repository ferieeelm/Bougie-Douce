window.addEventListener("load", () => {
    alert("Bienvenu sur Bougie Douce ! Profitez de nos bougies parfumées pastel.");
}) ;
document.addEventListener('DOMContentLoaded', function ajouterAupanier() {
        const message = document.getElementById("message");
        message.textContent = "Produit ajouté au panier !";
   setTimeout(() => {
    message.textContent = "";
   }, 3000);
    });
     