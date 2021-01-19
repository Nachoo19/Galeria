const galleryContainer = document.getElementById("contenedor");
const galleryItem = document.querySelectorAll(".gallery__image");
console.log(galleryItem)
for(foto in galleryItem){
    console.log(foto);
}
let index = 0;
let item = undefined;
let numFotos = galleryItem.length;

console.log(item)

document.addEventListener("click", e => {
    if(item !== undefined && item.matches(".contenedo__modal")){
        // console.log("Aca se eliminaria el item");
        if(e.target.matches(".gallery__image")){
            galleryContainer.removeChild(item);
            item = undefined;
            
        }
        else if(e.target.matches(".izquierda") && index >= 0 && index < numFotos){
            if(index === 0){
                console.log("Hasta aca llegas pa");
                return;
            }
            console.log(index)
            galleryContainer.removeChild(item);
            item = undefined;
            index--;
            item = nuevoElemento(galleryItem[index]);
            galleryContainer.appendChild(item);
        }
        
        else if(e.target.matches(".derecha") && index >= 0 && index < numFotos){
            if(index === (numFotos-1)){
                console.log("Hasta aca llegas pa");
                return;
            }
            console.log(index)
            galleryContainer.removeChild(item);
            item = undefined;
            index++;
            item = nuevoElemento(galleryItem[index]);
            galleryContainer.appendChild(item);
        }else{
            item = undefined;
            galleryContainer.removeChild(item);
        }
    }
    else{
        if(e.target.matches(".gallery__image")){
            
            console.log(e.target)
            index = obtenerIndex(e.target);
            item = nuevoElemento(e.target);
            console.log(item)
            galleryContainer.appendChild(item)
            console.log("Item agregado con exito");
        }
    }
    
})


const nuevoElemento = (elemento) => {
    // Creacion del contenedor
    if(item !== undefined){
        return null
    }else {
        let container = document.createElement("div");
        container.classList.add("contenedo__modal");
        container.classList.add("zoom");
    
        // Creacion del botones
        let derecha = document.createElement("input");
        derecha.setAttribute("type", "button");
        derecha.value = "→";
        // let flechaDerecha = document.createTextNode("→");
        // // derecha.appendChild(flechaDerecha);
        derecha.classList.add("derecha");
        
    
        let izquierda = document.createElement("input");
        izquierda.setAttribute("type", "button");
        izquierda.value = "←";
        // let flechaIzquierda = document.createTextNode("←");
        // izquierda.appendChild(flechaIzquierda);
        izquierda.classList.add("izquierda");
    
        // Copia del elemento pasado en la funcion
        let item = elemento.cloneNode(true);
    
        // Colocacion de elementos en contenedor
        container.appendChild(item);
        container.appendChild(derecha);
        container.appendChild(izquierda);
        return container;
    }
    
}

const obtenerIndex = (item) => {
    for(let i = 0; i < numFotos; i++){
        if(galleryItem[i] === item){
            return i;
        }
    }
}




































// let num = 0,
// numFotos = galleryItem.length ;
// galleryContainer.addEventListener("click",(event) => {
//     let validar;
//     let derecha = document.querySelector(".derecha");
//     let izquierda = document.querySelector(".izquierda");
//     if(item !== undefined && !validar){
//         if(num < 0){
//             galleryContainer.removeChild(item);
//             item = undefined;
//             num++;
//             console.log("item removido")
//             // item = galleryItem[num]
//             // galleryContainer.appendChild(item)

//         }
//         else if(num >= numFotos){
//             num--;
//             galleryContainer.removeChild(item);
//             item = undefined;
//             item = nuevoElemento(galleryItem[num]);
//             galleryContainer.appendChild(item)
//             console.log("ha llegado al limite")

//             // item = galleryItem[num]
//             // galleryContainer.appendChild(item)
//         }
        
//         else if(num >= 0 || num <= numFotos){
//             if( event.target === derecha){
//                 galleryContainer.removeChild(item);
//                 item = undefined;
//                 ++num;
//                 item = nuevoElemento(galleryItem[num]);
//                 validar = item.firstChild;
//                 galleryContainer.appendChild(item);

                
//             }else if( event.target === izquierda){
//                 galleryContainer.removeChild(item);
//                 item = undefined;
//                 num--;
//                 item = nuevoElemento(galleryItem[num]);
//                 validar = item.firstChild;
//                 galleryContainer.appendChild(item);
                
//             }else if(event.target == validar || event.target !== item){
//                 console.log(event.target)
//                 galleryContainer.removeChild(item);
//                 item = undefined;
//             }else{
//                 console.log(event.target)
//                 galleryContainer.removeChild(item);
//                 item = undefined;

//             }
//         }
        


//     }else {
//         for(let i = 0; i < galleryItem.length; i++){  
//             if(event.target == galleryItem[i]){
//                 num = i;
//                 item = nuevoElemento(galleryItem[i])
//                 validar = item.firstChild;
//                 console.log(validar)
//                 galleryContainer.appendChild(item);
//             }
//         }
//     }
// })

