/*globals Observable,$*/

function View(model) {
    'use strict';
    this.model = model;
    Observable.call(this);
}

View.prototype = Object.create(Observable.prototype);
View.prototype.constructor = View;

View.prototype.display = function () {
    'use strict';
    var i, truc;
    for (i = 0; i < this.model.tabContacts.length; i++) {
        truc = $('<p></p>').text(this.model.tabContacts[i].getNom());
    }
    $('#divListeContacts').html(truc);
};

View.prototype.update = function (obj, msg) {
    'use strict';
    console.log(obj + msg);
    this.display();
};