/*globals Observable, model*/

function Controller(model, view) {
    'use strict';
    this.model = model;
    this.view = view;
    Observable.call(this);
}

Controller.prototype.update = function (obj, msg) {
    'use strict';
    switch (msg) {
    case "mod":
        model.changeContact(obj);
        break;
    case "delete":
        model.removeContact(obj);
        break;
    case "add":
        model.addContact(obj);
        break;
    }
};