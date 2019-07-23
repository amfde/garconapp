const itens = document.querySelectorAll('.item')
const quantidade = document.querySelectorAll('.qtd')

//let lista_add = []

itens.forEach((item, index) =>{  
    item.addEventListener('click', (event)=>{              
        event.preventDefault
        //lista_add.push(item.textContent)
        //lista = [new Set(lista_add)]  
        //quantidade.firstChild.textContent = parseInt(quantidade.firstChild.textContent) + 1
        // colecao.forEach(cl =>{
        //     valor = cl.lastElementChild.lastElementChild.firstChild.textContent
        //     cl.lastElementChild.lastElementChild.firstChild.textContent = parseInt(cl.lastElementChild.lastElementChild.firstChild.textContent) + 1
        //     console.log(valor)
        // })         
        quantidade[index].children[0].textContent = parseInt(quantidade[index].children[0].textContent) + 1 
        let nomeProduto = item.firstChild.textContent
        Materialize.toast(nomeProduto + ' adicionado', 1100); 
    })
})

quantidade.forEach((qtd, index)=>{
    qtd.addEventListener('click', (event)=>{ 
        console.log(qtd.children)   
        if(qtd.firstChild.textContent > 0){
            qtd.firstChild.textContent = parseInt(qtd.firstChild.textContent) - 1
            let nomeProduto = itens[index].firstChild.textContent
            Materialize.toast(nomeProduto + ' removido', 1100);
        }
    })
})


