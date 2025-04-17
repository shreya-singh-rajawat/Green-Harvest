document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          // Directly redirect on success, no popup
          window.location.href = "success.html";
        } else {
          // Show error only if login fails
          console.error("Login failed:", result.message);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    });
  });
  