const itens = document.querySelectorAll('.collection-item')
const quantidade = document.querySelectorAll('.badge')

let lista_add = []


itens.forEach((item)=>{
    item.addEventListener('click', (event)=>{              
        event.preventDefault()
        lista_add.push(item.textContent)
        lista = [new Set(lista_add)]
        console.log(lista)
    })
})

