$(function(){

	var AppViewModel = function() {
		self = this;
		self.people = ko.observableArray([]);

		self.clearAll = function() {
			self.people.removeAll();
		}

		self.addPerson = function() {
			cD.searchPerson(function(data){
				if (data != null) {
					self.people.push(data);	
				}				
			});
		}

		self.removePerson = function(person) {
			self.people.remove(person);
		}
	}

	ko.applyBindings(new AppViewModel(), document.getElementById('AppContainer'))

})