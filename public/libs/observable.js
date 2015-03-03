function Observable() {
    'use strict';
    this.observers = [];
}

Observable.prototype.attachObserver = function (obs) {
    'use strict';
    this.observers.push(obs);
};
Observable.prototype.notify = function (obj, msg) {
    'use strict';
    var obs;
    for (obs in this.observers) {
        this.observers[obs].update(obj, msg);
    }
};