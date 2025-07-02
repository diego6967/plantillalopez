document.addEventListener("DOMContentLoaded",()=>{
const endpoint= '/data/datos.json'
const getproductos= async () =>{
    try {Response = await fetch (endpoint)
        datos =await Response.json()
        console.log(datos)
        mostrarproductos(datos)
}
catch (error){
    console.error();
}
}
getproductos()


const cotenedorProd = document.querySelector('section.productos')
const mostrarproductos = datos => {
    datos.forEach(item => {
        const card = document.createElement ('div')
        card.className ='card'
        card.innerHTML = `  <div class="top">
                        <img src="images/productos/arandanos.jpg" alt="">
                        <p class="titProd">${item.tittle}</p>
                        <p class="descrpcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus natus </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1560</span> <button class="favorito"><i
                                    class="fa-solid fa-heart"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>`

        cotenedorProd.appendChild(card)
    });
}

})