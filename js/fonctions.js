/**
 * Retourne un message d'erreur si l'addreesse mail demande est invalide
 */
export function isAddressMail (email) {
    // const email = prompt('Saississez une addresse mail: ');
    const emailRegex = /.*@.*\..*/;
    if (emailRegex.test(email)) {
        alert('Addresse mail Correct');
    } else {
        alert('Addresse mail Invalide');
    }
}

/**
 * Teste si un mot de passe demande contient au moins 8 caracteres,une majuscule et un chiffre
 * @param {String} password - mot de passe a evaluer
 */
function isGoodPassword (password) {
    let message = '';
    message += /.{8,}/.test(password) ? '':'Il doit contenir au minimum 8 caractere \n'; 
    message += /[A-Z]/.test(password) ? '':'Il doit contenir une lettre majuscule \n';
    message += /\d/.test(password) ? '':'Il doit contenir au moins un chiffre !';

    if (message !== '') {
        alert(`Mot de Passe Invalide\n${message}`);
    } else {
        alert('Mot de Passe Valide');
    }
}

/**
 * Retourne un boolean indiquant Si la date est bien au format jj/MM/AAAA
 * @param {String} date 
 * @returns {Boolean}
 */
function isGoodDateFormat(date) {
    return /\d{2}\/\d{2}\/\d{4}/.test(date);
}

/**
 * Calcul la moyenne d'un eleve
 * @param {Number[]} notes 
 */
function average (notes) {
    const sum = notes.reduce((a,b) => a + b);
    console.log(notes)
    console.log(sum)
    return (sum / notes.length).toFixed(2);
}

/**
 * Affiche la Table de multiplication d'un nombre
 * @param {Number} number 
 */
function printMultiplicationTable (number) {
    let message = '';
    for (let i = 0; i < 10; i++) {
        message += `${number} x ${i} = ${number * i} \n`;
    }
    console.log(message)
}

/**
 * Retourne Vrai si le nombre est pair et false sinon
 * @param {Number} number 
 * @returns {Boolean} 
 */
function isEven (number) {
    return number % 2 === 0 ;
}

export { isGoodPassword , isGoodDateFormat, average, printMultiplicationTable}