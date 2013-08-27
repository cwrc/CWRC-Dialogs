$(function() {
	cD = new function(){

		var self = this;

		self.viewports = {
			entitySearchDialog : new CWRCEntitySearchDialog(),
			entityDialog : new CWRCEntityDialog()
		}

		self.viewports.currentData = self.viewports.entitySearchDialog;

		self.viewports.getDialogTitle = function() {
			return self.viewports.currentData.getDialogTitle();
		}

		self.viewports.getContentTemplate = function() {
			return self.viewports.currentData.getDialogName();
		}

		self.searchPerson = function(callback) {
			self.viewports.entitySearchDialog.clear();
			self.viewports.entitySearchDialog.callback = callback;
			self.viewports.currentData = self.viewports.entitySearchDialog;
			$("#cwrcDialog").modal({show: true});
		}

		var init = function() {
			ko.bindingHandlers.onKeyUp = {
				init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
					ko.utils.registerEventHandler(element, 'keyup', function(evt) {				
						valueAccessor().call(viewModel);
					});
				}
			};

			ko.applyBindings(self.viewports, document.getElementById('cD'));

			options = {
				show: false,
				keyboard: true,
				backdrop: false,
				maxHeight: 500,
				// loading: true,
			}
			$("#cwrcDialog").modal(options);
		};
		init();
	};
})