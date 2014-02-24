
$(function(){
	// var opts = {
	//	success: function(data) {
	//		$("#entityXMLContainer").text(data);
	//	},
	//	error : function(errorThrown) {
	//		$("#entityXMLContainer").text("");
	//	}
	// };

	// cD.popPersonDialog(opts);
	// cD.popOrganizationDialog(opts);

	cD.initializeWithLogin('mark_test', 'P4ssw0rd!');

	
	$("#addPerson").click(function(){
		$("#entityXMLContainer").text("");
		var opts = {
			success: function(result) {
				
				
				if(result.response.error){
					alert(result.response.error);
					$("#entityXMLContainer").text("");
				}else{
					$("#resultHeader").text("Person entity " + result.response.pid);
					$("#entityXMLContainer").text(result.data);
				}
			},
			error : function(errorThrown) {
				$("#entityXMLContainer").text("");
				$("#resultHeader").text("Entity ");
			}
		};
		cD.popCreatePerson(opts);
	});

	$("#addOrganization").click(function(){
		$("#resultHeader").text("Entity ");
		$("#entityXMLContainer").text("");
		var opts = {
			success: function(result) {
				if(result.response.error){
					alert(result.response.error);
					$("#entityXMLContainer").text("");
				}else{
					$("#resultHeader").text("Organization entity " + result.response.pid);
					$("#entityXMLContainer").text(result.data);
				}
			},
			error : function(errorThrown) {
				$("#entityXMLContainer").text("");
				$("#resultHeader").text("Entity ");
			}
		};
		cD.popCreateOrganization(opts);
	});


	$("#searchPerson").click(function(){
		$("#resultHeader").text("Entity ");
		$("#entityXMLContainer").text("");

		var customAction = function(data) {
			alert("custom 1");
		};

		var customAction2 = function(data) {
			alert("custom 2");
		};

		var opts = {
			success: function(result) {
				$("#resultHeader").text("Added");
				$("#entityXMLContainer").text(JSON.stringify(result));
			},
			error : function(errorThrown) {
				$("#entityXMLContainer").text("");
				$("#resultHeader").text("Entity ");
			},
			buttons : [
				{
					label : "Custom action",
					action : customAction
				},
				{
					label : "Custom action 2",
					action : customAction2
				},
			]
		}

		cD.popSearchPerson(opts);
	});


	$("#searchOrganization").click(function(){
		$("#resultHeader").text("Organization ");
		$("#entityXMLContainer").text("");

		var opts = {
			success: function(result) {
				$("#resultHeader").text("Added");
				$("#entityXMLContainer").text(JSON.stringify(result));
			},
			error : function(errorThrown) {
				$("#entityXMLContainer").text("");
				$("#resultHeader").text("Entity ");
			}
		}

		cD.popSearchOrganization(opts);
	});

	$("#clear-button").click(function(){
		$("#entityXMLContainer").text("");
		$("#resultHeader").text("Entity ");
	});

});