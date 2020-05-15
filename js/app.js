import { isAddressMail, isGoodPassword, isGoodDateFormat, average, printMultiplicationTable } from './fonctions.js';

const days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

document.querySelector('#ep-1').addEventListener('click',() => {
    const email = prompt('Saisissez une addresse mail :');
    isAddressMail(email);
});

document.querySelector('#ep-2').addEventListener('click',() => {
    const password = prompt('Saisissez un mot de passe :');
    isGoodPassword(password)
});

document.querySelector('#ep-3').addEventListener('click',() => {
    const name = prompt('Saisissez Votre Nom: ');
    const child = parseInt(prompt('Combien d\'enfants avez vous ?'));
    let message = `${name}, Vous `;
    switch (child) {
        case 0:
            message += 'n\'avez pas d\'enfant';
            break;
        case 1:
            message += `avez ${child} enfant`;
        default:
            message = child > 1 ? message.concat(`avez ${child} enfants`) : 'Le nombre donne est incorrecte';
            break;
    }
    alert(message);
});

document.querySelector('#ep-4').addEventListener('click',() => {
    const date = prompt('Saisissez une date au format jj/MM/AAAA\nExemple:13/05/2005');
    alert(isGoodDateFormat(date) ? 'Format correcte' : 'Format incorrecte');
});

document.querySelector('#ep-5').addEventListener('click',() => {
    const name = prompt('Votre Nom: ');
    const surname = prompt('Votre Prenom: ');
    let sexe = '';
    while (sexe !== 'H' && sexe !== 'F') {
        sexe = prompt('Votre Sexe: (Soit H ou F)');
    }
    const personn = {
        name,
        surname,
        sexe,
        title: sexe === 'H' ? 'M' : 'Mme'
    }
    console.log(personn)
});

document.querySelector('#ep-6').addEventListener('click',() => {
    const number = parseInt(prompt('Saisissez le numero d\'un jour de la semaine!'));
    if (number && number <= 7 && number > 0) {
        alert(`Ce nombre correspond a ${days[number - 1]}`)
    } else {
        alert('Sorry, ce nombre n\'est pas valide..')
    }
});

document.querySelector('#ep-7').addEventListener('click',() => {
   const notes = prompt('Saisissez toutes vos notes\nVeuillez les separer avec des points virgules\nEx:12,5;13;14');
   const notesTab = notes.split(';').map(note => parseInt(note));
   alert(`Votre moyenne est de ${average(notesTab)}`);
});

document.querySelector('#ep-8').addEventListener('click',() => {
    const message = `Veuillez le nom et la moyenne des eleves comme dans l'exemple ci dessous\n
            Dynamo: 19.5, Edwige: 10,Arsene: 14,Lyderic: 7`;
    const students = prompt(message);
    let maxNote = 0;
    let winner = '';
    students.split(',').forEach(item => {
        const [name, note] = item.split(':');
        if (parseFloat(note) > maxNote) {
            winner = name;
            maxNote = note;
        }
    })
    alert(`Le premier de la classe est ${winner} avec ${maxNote}`);
});

document.querySelector('#ep-9').addEventListener('click',() => {
   const number = parseInt(prompt('Saisissez un nombre!'));
   if (number) {
    printMultiplicationTable(number);
   } else {
    alert('Ce n\'est pas un nombre');
   }
});