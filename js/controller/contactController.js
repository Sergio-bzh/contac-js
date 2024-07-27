import {Contact} from "../models/Contact.js";

let listContacts = [];



const contact = new Contact("dominique", "anne", "0789654234"); ///* Instanciation d'un contact en appellant la classe */
listContacts.push(contact); ///* Push du contact dans le tableau listContacts */

/* START OK OK OK OK */
/* # # # # # # # # AJOUTER # # # # # # # # */
function ajouterContact(nom, prenom, telephone){

    const monContact = new Contact(nom, prenom, telephone); ///* la variable monContact n'existe qu'à l'intérieur de la procédure */

    listContacts.push(monContact);  ///* Je n'ai pas utilisé le mot return (procédure) */
}
ajouterContact("NUNEZ", "Sergio", "0102030405"); ///* Instanciation d'un contact en appellant la fonction ajouterContact() */
ajouterContact("CHOULET", "Anne", "0102030405");
ajouterContact("CARRASCO", "Dominique", "0102030405");
// console.log(listContacts);

/* # # # # # # # # AFFICHER # # # # # # # # */
function afficherContacts(listContacts){
    for(let i=0; i<listContacts.length; i++){
        let contact = listContacts[i];
         ///* Je détaille l'objet contact pour l'affichage */
        contact = {
            nom: listContacts[i].nom,
            prenom: listContacts[i].prenom,
            telephone: listContacts[i].telephone
        };
        console.log(contact);
    }
    return contact;
}
afficherContacts(listContacts)

/* # # # # # # # # SUPPRIMER # # # # # # # # */
function supprimerContact(index){

    let nom = listContacts.splice(index, 1);
    console.log(nom[0])
    return console.log("Le contact " +" avec l'indice " +index+" ("+nom[0].prenom+" "+nom[0].nom+ ") a bien été supprimé.");
}
supprimerContact(1);
console.log(listContacts);


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
