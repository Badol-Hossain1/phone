// https://openapi.programming-hero.com/api/phones?search=iphone

const phone = async () => {
    toggle(true)
  let input = document.getElementById("input").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
  const data = await fetch(url);
 
  const res = await data.json();
  display(res);
};

const display = (e) => {
  const main = document.getElementById("main");
  main.innerText = "";
  console.log(e.data);
  e.data = e.data.slice(0, 5);
const none = document.getElementById('none')
  {
    e.data.length === 0 ?  none.classList.remove('d-none'):none.classList.add('d-none')
  }
  if(!e.data.length){
    toggle(false)
  }
  e.data.forEach((phone) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="col">
    <div class="card">
      <img style="width: 18rem" src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${phone.phone_name} </h5>
        <p class="card-text">${phone.slug}</p>
      </div>
    </div>
  </div>
    
    `;

    toggle(false)
    main.appendChild(div);
  
  });
};


const toggle = (isLoading)=> {
const loader = document.getElementById('loader')
if(isLoading){
    loader.classList.remove('d-none')
}else{
    loader.classList.add('d-none')
}
}