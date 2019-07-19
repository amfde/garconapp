const item = document.querySelector('.collection-item')

item.addEventListener('click', (event)=>{
    event.preventDefault()
    alert('Item Clicado!')
})