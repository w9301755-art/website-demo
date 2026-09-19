document.addEventListener("DOMContentLoaded", async () => {
  const footerContainer = document.getElementById("footer-container");

  if (!footerContainer) return;

  try {
    const response = await fetch("/components/footer.html");

    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    footerContainer.innerHTML = await response.text();

  } catch (error) {
    console.error("Errore nel caricamento del footer:", error);
  }
});
