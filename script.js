const quotes = [
    "Jabili",
    "KFC",
    "Kuroda",
    "Mcdo",
    "Chooks",
  ];
   
  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteButton = document.getElementById("quoteButton");
   
  quoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });