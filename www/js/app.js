const itens = document.querySelectorAll('.collection-item')
const quantidade = document.querySelectorAll('.badge')

//let lista_add = []

itens.forEach((item)=>{
    item.addEventListener('click', (event)=>{              
        event.preventDefault
        //lista_add.push(item.textContent)
        //lista = [new Set(lista_add)]   
        item.childNodes[1].textContent = parseInt(item.childNodes[1].textContent) + 1
        console.log(item.childNodes[1].textContent)  
        var nomeProduto = item.firstChild.textContent;
        Materialize.toast(nomeProduto + ' adicionado', 1100); 
    })
})


