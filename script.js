const name = prompt("Qual è il tuo nome?");
const lastName = prompt("Qual è il tuo cognome?");
const favColor = prompt("Qual è il tuo colore preferito?");

const newPwd = `La tua nuova password è ${name.replaceAll(' ','')}${lastName.replaceAll(' ','')}${favColor.replaceAll(' ','')}76`
document.getElementById('pwd').innerHTML = newPwd;
