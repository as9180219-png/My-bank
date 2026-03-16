‎const loginBtn = document.getElementById("loginBtn");
‎const createAccountBtn = document.getElementById("createAccountBtn");
‎
‎loginBtn.addEventListener("click", () => {
‎    const email = document.getElementById("email").value;
‎    const password = document.getElementById("password").value;
‎    const pin = document.getElementById("pin").value;
‎
‎    if((email === "jeanjacquebmB2026@gmail.com" && password === "bonjour2026@") || pin === "98982026") {
‎        alert("Connexion réussie !");
‎        window.location.href = "dashboard.html";
‎    } else {
‎        alert("Email, mot de passe ou PIN incorrect !");
‎    }
‎});
‎
‎createAccountBtn.addEventListener("click", () => {
‎    alert("Création de compte simulée !");
‎});
‎
