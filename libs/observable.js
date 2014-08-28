function Observable(){
	this.observers = [];
}

Observable.prototype.attachObserver = function(obs){
	this.observers.push(obs);
};
Observable.prototype.notify = function(obj, msg){
	for (var obs in this.observers){
			this.observers[obs].update(obj, msg);
	}
};