/*global Contacts, View, Controller*/

(function () {
    'use strict';
    var m = new Contacts(),
        view = new View(m),
        controller = new Controller(m, view);
    view.attachObserver(controller);
    m.attachObserver(view);
})();