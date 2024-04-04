fronteditor.dev/nlw-unite
# HTML


*HYPERTEXT*

*MARKUP*
- TAG
- ATRÍBUTOS
*LANGUAGE*

# CSS

#JAVASCRIPT

```js
///variaveis
const mensagem = "Oi, tudo bem?"
//tipos de dados
//number
//string
//funcao
alert (mensagem)

const participante = {
  nome:"Ketty Silva",
  email:"ketty@gmail.com",
  dataInscricao: new Date (2024,2,22,19,20),
  dataCheckIn: new Date (2025,2,25,22,00)
}

let participantes = [
{
nome:"Ketty Silva",
email:"ketty@gmail.com",
dataInscricao: new Date (2024,2,22,19,20),
dataCheckIn: new Date (2025,2,25,22,00)
},
]

for(let participante of participantes) {
  output = output + criarNovoParticipante(participante)
}

//condicional 
if(participante.dataCheckIn == null){
dataCheckIn = `
<button
data-email="${participante.email}"
onclick="fazerCheckIn(event"
>
Corfirmar check-in
</button>
`
}



css

body, table, input, button {
 font: 300 16px/140% sans-serif;
}
body {
  background-color: #121214;
  color:white;
}

table {
  padding: 32px;
  border: 1px solid red;
  margin: 32px;
}

//padrão CSS 
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}