(function(){
	var app = angular.module('contacts', []);

	//var listeContacts = new Contacts();
	//var ident = 0;

	app.controller('PanelController', function ($scope) {
		$scope.tab = 1;
		$scope.ident = 0;
		//localStorage.clear();
		$scope.listeContacts = function(){
			var contacts = new Contacts();
			console.log(contacts.loadLocalStorage());
			return contacts;
		}();
		this.selectTab = function(setTab){
			$scope.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return $scope.tab === checkTab;
		};
	});

	app.controller('ListeController', function ($scope) {
		this.listeContacts = $scope.listeContacts.tabContacts;
		this.filtre = 'nom';
		this.filtrer = function(e){
			if (e === 1){
				this.filtre = 'nom';
			} else if (e === 2) {
				this.filtre = '-nom';
			}
		};
	});

	app.controller('AddContactController', function ($scope) {
		this.contact = new Contact();		
		this.addContact = function(){
			$scope.ident += 1;
			this.contact.setIdent($scope.ident);
			$scope.listeContacts.addContact(this.contact);
			$scope.listeContacts.saveLocalStorage();
			this.contact = new Contact();
			$scope.tab = 1;
		};
	});
})();