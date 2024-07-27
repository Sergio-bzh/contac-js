import {Contact} from "../models/Contact.js";

let listContacts = [];



const contact = new Contact("dominique", "anne", "0789654234"); ///* Instanciation d'un contact */
listContacts.push(contact); ///* Push du contact dans le tableau */

/* START OK OK OK OK */
/* # # # # # # # # AJOUTER # # # # # # # # */
function ajouterContact(nom, prenom, telephone){

    const monContact = new Contact(nom, prenom, telephone);

    listContacts.push(monContact);
}
ajouterContact("Sergio", "NUNEZ", "0102030405");
ajouterContact("Anne", "CHOULET", "0102030405");
ajouterContact("Dominique", "CARRASCO", "0102030405");
// console.log(listContacts);

/* # # # # # # # # AFFICHER # # # # # # # # */
function afficherContacts(listContacts){
    for(let i=0; i<listContacts.length; i++){
        let contact = listContacts[i];
        contact = {
            nom: listContacts[i].nom,
            prenom: listContacts[i].prenom,
            telephone: listContacts[i].telephone
        };
        console.log(contact);
    }
    // return console.log(contact);
}
afficherContacts(listContacts)


/* # # # # # # # # SUPPRIMER # # # # # # # # */
/*
function supprimerContact(index){

    let nom = listContacts.splice(index, 1);
    nom = nom.join("");

    return "Le contact "+ nom + " a bien été supprimé, et il reste encore : " + listContacts;
}
supprimerContact(1);
*/

/* # # # # # # # # A # # # # # # # # */
/* END OK OK OK OK */

function rechercherContact(prenom) {

    for(let i = 0; i<listContacts.length; i++){
        if(prenom == listContacts[i]){
            prenom = listContacts[i];
        }
    }
    return prenom;
}
rechercherContact("anne");

// console.log(listContacts);
