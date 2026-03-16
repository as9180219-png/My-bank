‎const soldeEl = document.getElementById("solde");
‎const toggleSolde = document.getElementById("toggleSolde");
‎
‎toggleSolde.addEventListener("click", () => {
‎    soldeEl.style.visibility = (soldeEl.style.visibility === "hidden") ? "visible" : "hidden";
‎});
‎
‎function openSection(sectionId) {
‎    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
‎    document.getElementById(sectionId).classList.remove("hidden");
‎}
‎
‎function logout() {
‎    alert("Déconnexion…");
‎    window.location.href = "index.html";
‎}
‎
‎/* ---------------- Paramètres ---------------- */
‎function changerMotDePasse() { alert("Fonction de changement de mot de passe !"); }
‎function changerPIN() { alert("Fonction de changement de PIN !"); }
‎function ajouterCarte() { alert("Ajouter une carte bancaire !"); }
‎function supprimerCarte() { alert("Supprimer une carte bancaire !"); }
‎function ajouterCompte() { alert("Ajouter un compte secondaire !"); }
‎function supprimerCompte() { alert("Supprimer un compte secondaire !"); }
‎function contacterSupport() { alert("Contactez le service client : support@banquepro.com"); }
‎
