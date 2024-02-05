const quote = document.querySelector(".quote")
const btn = document.getElementById("Qbtn")
const URL = "https://dog-api.kinduff.com/api/facts"
let imgData, data
const preload = async () => {
    try {
        const [imgResponse, factsResponse] = await Promise.all([
            fetch("https://random.imagecdn.app/1440/2160/"),
            fetch(URL)
        ]);

        const [img, fact] = await Promise.all([
            imgResponse,
            factsResponse.json()
        ]);
        imgData = img
        data = fact
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
preload()
const getFacts = () => {
    document.body.style.backgroundImage = `url(${imgData.url})`;
    quote.innerText = data.facts[0];
}

btn.addEventListener("click", getFacts)
btn.addEventListener("click", preload)
