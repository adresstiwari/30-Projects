const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

// Function to fetch and display quote
async function getQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  console.log(data)

  quoteText.textContent = `"${data.content}"`;
  authorText.textContent = `~ ${data.author}`;
  tweetBtn.href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
    data.content
  )}" - ${encodeURIComponent(data.author)}`;
}

// Event listener
newQuoteBtn.addEventListener("click", getQuote);

// Load initial quote
getQuote();
