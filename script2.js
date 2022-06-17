let adicionar = document.querySelector("#adicionar")
let remover = document.querySelector("#remover")
let card = document.querySelector("#cardbody")
let card1 = document.querySelector("#card1")
let card2 = document.querySelector("#card2")
const url = "https://swapi.dev/api/starships/9/?format=json"
async function carregarDados(){
   
    try {
        let resultado = await fetch(url)
    
        const dados = await resultado.json()
        
       
            
            
            const tdNave= document.createElement("h5")
            
            
            
            tdNave.textContent = dados.name
            card.textContent = dados.model
            
            
           console.log(dados) 
            card.appendChild(tdNave)

    } catch (error) {
        console.log("O seguinte erro aconteceu", error)
    }
    

   
}
adicionar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    card1.classList.add("mx-auto")
    card2.classList.add("card")
    card.classList.add("card-body")
    carregarDados()

       

    
    
    
   // console.log(card.children)
})
remover.addEventListener('click', (evento)=>{
    evento.preventDefault()
    card.classList.remove("card-body")
    card2.classList.remove("card")
    card.textContent=""
})
