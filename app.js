// https://openapi.programming-hero.com/api/phones?search=iphone

const phone = async () => {
    const input = document.getElementById('input').value
  const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
  const data = await fetch(url);
  input = ''
  const res = await data.json();
  display(res);
};

const display = (e) => {
    const main = document.getElementById('main')
    main.innerHTML = ''
  console.log(e.data);
  e.data.forEach(phone => {
    const div = document.createElement('div')

    div.innerHTML=`
    <div class="col">
    <div class="card">
      <img style="width: 18rem" src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${phone.phone_name} </h5>
        <p class="card-text">${phone.slug}</p>
      </div>
    </div>
  </div>
    
    `
    main.appendChild(div)
    console.log(phone.phone_name);
  })
};
phone();
