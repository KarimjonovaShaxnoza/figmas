let cards = document.querySelector(".cards");

const __API = "https://restcountries.com/v3.1/all";

const input = document.querySelector('.search')
let davlatlar

const getData = async () => {
  const res = await fetch(__API);
  const data = await res.json();
  const input = document.getElementById("search");
  
  render(data)
  davlatlar = [...data]

  input.addEventListener("input", (e) => {
    const newData = data.filter(item =>
      item?.name.common?.toLowerCase().includes(e.target.value.toLowerCase())
    );

    render(newData);
  })
}

getData();


function render(arr) {
  cards.innerHTML = "";
  arr.map(item => {
    cards.innerHTML += `
   <div onclick="getMoreInfo('${item.name.common}')"
   class="card">
    <img src=${item.flags.png} alt="">
    
    <div class="text">
    <h2>${item.name.common}</h2>
    </div>
    </div>`;
  });
}

function getMoreInfo(element) {
  let getElementInfo = davlatlar.filter(item => item.name.common == element)
  localStorage.setItem('data', JSON.stringify(getElementInfo))
  window.location.href = './country.html'
}

function darkMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";

  let text = document.querySelector('h1')
  text.style.color = 'white'
}

function lightMode() {
  console.log("lightMode");
  let body = document.querySelector("body");
  body.style.background = "white";

   let text = document.querySelector("h1");
   text.style.color = "black";
}


