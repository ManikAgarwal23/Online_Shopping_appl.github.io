//Glue between View and Model
//Controller performs UI from I/O
import productOperations from "../services/product-operations.js";
async function loadPizzas(){
    const pizzas=await productOperations.loadProducts();
    console.log('Pizzas are ', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

/*
{ <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="Images/pizza.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                      </div>
                </div> }
*/

                
function preparePizzaCard(pizza){
    const outputDiv= document.querySelector('#output');
    const colDiv= document.createElement('div');
    colDiv.className= 'col-4';
    const cardDiv= document.createElement('div');
    cardDiv.className= 'card';
    cardDiv.style= "width: 18rem;";
    colDiv.appendChild(cardDiv);
    const img= document.createElement('img');
    img.src= pizza.url;
    img.className= 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody= document.createElement('div');
    cardBody.className= 'card-body';
    cardDiv.appendChild(cardBody);
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const pTag=document.createElement('p');
    pTag.className='card-text';
    pTag.innerText=pizza.desc;
    const button =document.createElement('button');
    button.innerText='Add to Cart';
    button.className='btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
}