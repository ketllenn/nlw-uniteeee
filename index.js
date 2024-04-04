
let participantes = [
    {
        nome: "Diego Fernandes",
        email: "diego@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 00)
    },
    {
        nome: "Ketty Silva",
        email: "ketty@gmail.com",
        dataInscricao: new Date(2024, 2, 25, 16, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 00)
    },
    {
        nome: "Fulano de Tal",
        email: "fulano@example.com",
        dataInscricao: new Date(2024, 3, 1, 10, 30),
        dataCheckIn: new Date(2024, 3, 1, 12, 15)
    },
    {
        nome: "Ciclano da Silva",
        email: "ciclano@example.com",
        dataInscricao: new Date(2024, 3,1, 14, 45),
        dataCheckIn: null
    },
    {
        nome: "Beltrano Oliveira",
        email: "beltrano@example.com",
        dataInscricao: new Date(2024, 1, 8, 9, 20),
        dataCheckIn: null
    },
    {
        nome: "José Pereira",
        email: "jose@example.com",
        dataInscricao: new Date(2024, 1, 12, 18, 30),
        dataCheckIn: null
    },
    {
        nome: "Maria Almeida",
        email: "maria@example.com",
        dataInscricao: new Date(2024, 1, 15, 11, 50),
        dataCheckIn: null
    },
    {
        nome: "João Oliveira",
        email: "joao@example.com",
        dataInscricao: new Date(2024, 1, 19, 15, 10),
        dataCheckIn: new Date(2024, 1, 22, 12, 30)
    },
    {
        nome: "Ana Santos",
        email: "ana@example.com",
        dataInscricao: new Date(2024, 2, 22, 12, 20),
        dataCheckIn: new Date(2024, 2, 26, 9, 45)
    },
    {
        nome: "Pablo Lima",
        email: "pablo@example.com",
        dataInscricao: new Date(2024, 1, 25, 9, 40),
        dataCheckIn: new Date(2024, 1, 29, 17, 15)
    }
];

console.log(participantes);


const criarNovoParticipante = (participante) => {
const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

if(participante.dataCheckIn ==null){
dataCheckIn = `
<button
data-email="${participante.email}"
onclick="fazerCheckIn(event)"
>
Corfirmar check-in
</button>
`
}

return `

<tr>
    <td>
      <strong>
      ${participante.nome}
      </strong>
      <br> 
      <small>
     ${participante.email}
      </small>
      </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
`
}

const atualizarLista = (participantes) => {
  let output =""
for(let participante of participantes) {
  output = output + criarNovoParticipante(participante)
}

document 
.querySelector('tbody')
.innerHTML =output
}
atualizarLista(participantes)
 
 const adicionarParticipante = (event) => {
 event.preventDefault()

const dadosDoFormulario = new FormData(event.target)

const participante = {
    nome: dadosDoFormulario.get('nome'),
    email:dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
}

const participanteExiste = participantes.find(
    (p) => {
  return p.email == participante.email
    }
)

if(participanteExiste) {

alert('Email já cadastrado!')
return }

participantes = [participante,...participantes]
atualizarLista(participantes)

event.target.querySelector('[name=nome]').value =""
event.target.querySelector('[name=email]').value =""
 }

const fazerCheckIn = (event) => {
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o Check-In?'

    if(confirm(mensagemConfirmacao) == false) {
        return
    }

   // encontrar o participante dentro da lista

const participante = participantes.find ((p)=>{
    return p.email == event.target.dataset.email 
})
   // atualizar o chech-in do participante
   
participante.dataCheckIn = new Date()

   //atualizar a lista do participante
atualizarLista(participantes)
}