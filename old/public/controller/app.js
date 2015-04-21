/*globals angular, Contacts, Contact*/

(function () {
    'use strict';
    var app = angular.module('contacts', []),
        dateToString = function (date) {
            return (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) + ' / ' +
                (date.getMonth() + 1 < 10 ?  '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + ' / ' +
                (date.getFullYear().toString());
        };

    app.controller('PanelController', function ($scope) {
        $scope.ident = 0;
        //localStorage.clear();
        $scope.listeContacts = function () {
            var i, contacts = new Contacts();
            // TODO : changer le chargement depuis le localStorage vers le chargement depuis le serveur
            contacts.loadLocalStorage();
            for (i = 0; i < contacts.tabContacts.length; i += 1) {
                if (contacts.tabContacts[i].birthdate) {
                    contacts.tabContacts[i].birthDateToggled = dateToString(new Date(contacts.tabContacts[i].birthdate));
                }
            }
            return contacts;
        }();
        this.selectTab = function (setTab) {
            $scope.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return $scope.tab === checkTab;
        };
    });

    app.controller('ListeController', function ($scope) {
        this.listeContacts = $scope.listeContacts.tabContacts;
        this.filtre = 'nom';
        $scope.showAddIcon = false;
        $scope.showAddButton = function () {
            $scope.showAddIcon = true;
        };
        this.filtrer = function (e) {
            if (e === 1) {
                this.filtre = 'nom';
            } else if (e === 2) {
                this.filtre = '-nom';
            }
        };
    });

    app.controller('AddContactController', function ($scope) {
        this.contact = new Contact();
        this.addContact = function () {
            $scope.ident += 1;
            this.contact.setIdent($scope.ident);
            $scope.listeContacts.addContact(this.contact);
            $scope.listeContacts.saveLocalStorage();
            this.contact = new Contact();
            $scope.tab = 1;
        };
    });
})();