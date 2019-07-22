const itens = document.querySelectorAll('.item')
const quantidade = document.querySelector('.qtd')

//let lista_add = []

itens.forEach(item =>{
    
    item.addEventListener('click', (event)=>{              
        event.preventDefault
        //lista_add.push(item.textContent)
        //lista = [new Set(lista_add)]  
        //quantidade.firstChild.textContent = parseInt(quantidade.firstChild.textContent) + 1
        console.log(item.firstChild.textContent)  
        var nomeProduto = item.firstChild.textContent;
        Materialize.toast(nomeProduto + ' adicionado', 1100); 
    })
})

// quantidade.forEach((qtd)=>{
//     qtd.addEventListener('click', (event)=>{
        
//         if(qtd.textContent > 0){
//             qtd.textContent = parseInt(qtd.textContent) - 2
//         }
//     })
// })


