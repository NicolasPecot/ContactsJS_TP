(function(){
	var m = new Contacts(); // modele
	var view = new View(m);
	var controller = new Controller(m, view);

	view.attachObserver(controller);
	m.attachObserver(view);
})();