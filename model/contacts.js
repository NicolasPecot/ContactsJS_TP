function Contacts(){
	this.tabContacts = [];
}

Contacts.prototype = Object.create(Observable.prototype);
Contacts.prototype.constructor = Contacts;

Contacts.prototype.addContact = function(contact) {
	this.tabContacts.push(contact);
	this.notify();
};
Contacts.prototype.removeContact = function(contact) {
	return this.tabContacts.splice(this.tabContacts.indexOf(contact), 1);
	this.notify();
};
Contacts.prototype.changeContact = function(contact) {
	for (var c in this.tabContacts){
		if (this.tabContacts[c].getIdent() == contact.getIdent()){
			this.tabContacts[c] = contact;
		}
	}
	this.notify();
};
Contacts.prototype.saveLocalStorage = function() {
	localStorage.clear();
	var jsonified;
	localStorage.setItem('taille', this.tabContacts.length);
	for (var c in this.tabContacts){
		jsonified = JSON.stringify(this.tabContacts[c]);
		localStorage.setItem("contact"+c, jsonified);
	}
};
Contacts.prototype.loadLocalStorage = function() {
	var taille = localStorage.getItem('taille');
	var c;
	for (var i = 0; i < taille; i++){
		var jsonified = localStorage.getItem('contact'+i);
		c = JSON.parse(jsonified);
		var contact = new Contact();
		contact.ident = c.ident;
		contact.nom = c.nom;
		contact.prenom = c.prenom;
		contact.tel = c.tel;
		contact.email = c.email;
		contact.birthdate = c.birthdate;
		console.log(contact);
		this.addContact(contact);
	}
};
