function Controller(model, view){
	this.model = model;
	this.view = view;
	Observable.call(this);
}

Controller.prototype.update = function(obj, msg) {
	switch (msg) {
		case "mod" :
			model.changeContact(obj);
			break;
		case "delete" :
			model.removeContact(obj);
			break;
		case "add" :
			model.addContact(obj);
			break;
	}
};