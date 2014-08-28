function View(model){
	this.model = model;
	Observable.call(this);
}

View.prototype = Object.create(Observable.prototype);
View.prototype.constructor = View;

View.prototype.display = function() {
	for (var i = 0; i < this.model.tabContacts.length; i++){
		var truc = $('<p></p>').text(this.model.tabContacts[i].getNom());
	}
	$('#divListeContacts').html(truc);
};

View.prototype.update = function(obj, msg) {
	this.display();
};