function CWRCEntitySearchDialog() {
	var self = this;
	self.results = ko.observableArray([]);
	self.selectedData = null;	
	self.ajaxRequest = null;
	self.queryString = ko.observable("");

	// UI Functions
	self.getDialogTitle = function() {
		return "Search person";
	}

	self.getDialogName = function() {
		return "entitySearchDialog";
	}
	self.callback = function(data) {
		
	}
	self.clear = function() {
		self.queryString("");
		self.selectedData = null;
		self.results.removeAll();
	}
	self.searchEntity = function() {
		// TEMP
		self.performSearch($("#searchEntityInput").val());
	};

	// Logic functions

	self.Result = function(data, source) {
		var self = this;
		this.data = data;
		this.source = source;
		this.selected = ko.observable(false);
	}

	self.selectResult = function(result) {
		$.each(self.results(), function(i, entry){
			entry.selected(false) ;
		});
		result.selected(true);
		self.selectedData = result.data;
	};

	self.performSearch = function(queryString) {
		self.results.removeAll();
		self.selectedData = null;	
		if (queryString != "") {
			var url = "http://apps.testing.cwrc.ca/solr/solr_core_default/select";
			if (self.ajaxRequest != null) {
				self.ajaxRequest.abort();
			}
			self.ajaxRequest = $.ajax({
				url: url,				
				dataType: "json",
				data: {
					wt: "json",
					start: 0,
					rows: 400,
					fq: "dc.type:person",
					// sort:"dc.title asc",
					q: queryString,
				}
			}).done(function(data){
				self.ajaxRequest = null;
				var response = data.response;
				$.each(response.docs, function(i, data){
					self.results.push(new self.Result(data, "CWRC"));
				});
			});
		}

	};

	self.createEntity = function() {
		alert("Coming soon!!!");
	}
	self.returnSelected = function() {
		this.callback(self.selectedData);
	};		
}