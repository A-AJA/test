// Attend que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les éléments <h3>
    const elementsH3 = document.querySelectorAll("h3");

    // Ajoute des événements à chaque <h3>
    elementsH3.forEach((h3) => {
        // Change la couleur du texte quand la souris passe dessus
        h3.addEventListener("mouseenter", function() {
            this.style.color = "black";
        });

        // Remet la couleur initiale quand la souris quitte l'élément
        h3.addEventListener("mouseleave", function() {
            this.style.color = "";
        });

        // Ajoute un effet "zoom" au clic
        h3.addEventListener("click", function() {
            this.classList.toggle("clicked");
        });
    });

    // Sélectionne les boutons et la boîte de message
    const buttonAfficher = document.getElementById("message"); // Bouton "Afficher"
    const buttonMasquer = document.getElementById("masquer"); // Bouton "Masquer"
    const messagebox = document.getElementById("boitemessage"); // Zone de message

    // Vérifie si les éléments existent avant d'ajouter des événements
    if (buttonAfficher && buttonMasquer && messagebox) {
        // Affiche le message quand on clique sur "Afficher"
        buttonAfficher.addEventListener("click", function() {
            messagebox.innerHTML = "Vous venez de visiter ma présentation!"; // Contenu du message
            messagebox.classList.add("visible"); // Ajoute la classe CSS pour afficher le message
        });

        // Cache le message quand on clique sur "Masquer"
        buttonMasquer.addEventListener("click", function() {
            messagebox.classList.remove("visible"); // Supprime la classe CSS pour cacher le message
        });
    } else {
        console.error("Erreur : Un des éléments HTML est introuvable.");
    }
});
