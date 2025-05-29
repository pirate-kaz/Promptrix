// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Logged in successfully!');
      window.location.href = "chat.html"; // Redirect to chat or dashboard
    })
    .catch((error) => {
      document.getElementById('error').innerText = error.message;
    });
});

// Register (simple version)
function register() {
  const email = prompt("Enter email:");
  const password = prompt("Enter password (6+ characters):");

  if (email && password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => alert("Account created! Please log in."))
      .catch((error) => alert(error.message));
  }
}
