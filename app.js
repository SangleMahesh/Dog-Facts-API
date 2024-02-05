const URL = "https://dog-api.kinduff.com/api/facts"
const quote = document.querySelector(".quote")
const btn = document.getElementById("Qbtn")

const getFacts = async () => {
    let response = await  fetch(URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    let data =  await response.json()
    
    quote.innerText = data.facts[0]
}

btn.addEventListener("click", getFacts)
