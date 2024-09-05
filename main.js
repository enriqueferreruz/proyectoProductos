const divData = document.getElementById("divData")
const divCard = document.getElementById("cards")
const divBtn = document.getElementById("btnProducts")

function getData() {
    const promesa= fetch ("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then ( (response) => {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }
        )
        .catch ((error)=> console.log("Problema con el JSON", error)
        )    }

    )
    .catch((err)=> console.log("Existió un problema con la solicitud", err))

}
// divBtn.addEventListener("click" function button(products) {

    
// })
function createCards(products) {
    console.log(products.length);
    console.log(products[0].name);
    //crear una Card por cada producto con datos name, description, image, price; usando forEach/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    divCard.innerHTML ="";

    products.forEach(products => {
        const cardHTML=`<div class="card col-3" style="width: 18rem;">
                <img src="${products.image}" class="card-img-top" alt="${products.name}">
                <div class="card-body">
                    <h5 class="card-title">${products.name}</h5>
                    <p class="card-text">${products.description}</p>
                    <p class="card-text"><strong>Price:</strong> $${products.price}</p>
                </div>
            </div>`;
      divCard.innerHTML += cardHTML
        }
);
   //////////////////////LOGRADO//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////777

    
    
}
getData()
