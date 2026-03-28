const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.api-ninjas.com/v2/randomquotes?category=all";

async function getquote(url) {
    try {
        const response = await fetch(url, {
            headers: {
                "X-Api-Key": "XtayU3o8cFfWAFLz3yXpxbtbx4xO0xDVuN4Brxh3"
            }
        });

        const data = await response.json();

        console.log(data); // debug

        quote.innerHTML = data[0].quote;
        author.innerHTML = data[0].author;

    } catch (error) {
        quote.innerHTML = "Failed to load quote.";
        author.innerHTML = "";
        console.error(error);
    }
}
getquote(api_url)
function tweet(){
    window.open("https://twitter.com/intent/tweet?text" + quote.innerHTML+ "--- by" + author.innerHTML, "Tweet Window", "width=600, height=300");
}