$(function() {
	// templates

	var entitySearchDialogTemplate = '<script type="text/html" id="entitySearchDialog"> \
										<div class="modal-body"> \
											<!-- Content --> \
											<div class="row"> \
												<div class="col-lg-12"> \
														<input type="text" class="form-control" id="searchEntityInput" placeholder="Search" data-bind="{value:queryString, onKeyUp: searchEntity}"> \
												</div><!-- /.col-lg-6 --> \
											</div><!-- /.row --> \
											<br> <!-- FIXME --> \
											<div class="row"> \
												<!-- Results --> \
												<div class="col-lg-12"> \
													<div class="panel"> \
														<div class="panel-heading">Results</div> \
														<div class="panel-body cwrc-result-area"> \
															<div class="list-group"> \
																<!-- ko foreach: results --> \
																<a href="#" class="list-group-item" data-bind="{click:$root.currentData.selectResult, css: {active: selected}}" > \
																	<h5 class="list-group-item-heading"> <span data-bind="text:data[\'dc.title\']"></span> - <span data-bind="text:source"></span></h5> \
																	<p class="list-group-item-text"><span data-bind="text:data.id"></span></p> \
																</a> \
																<!-- /ko --> \
															</div> \
														</div> \
													</div> \
												</div> \
											</div> \
											<!--  End of content--> \
										</div> \
										<div class="modal-footer"> \
											<button type="button" class="btn btn-default" data-dismiss="modal" data-bind="click: $root.entitySearchDialog.createEntity">Create</button> \
											<button type="button" class="btn btn-primary" data-dismiss="modal" data-bind="click: $root.entitySearchDialog.returnSelected">Add</button> \
										</div> \
									</script>';
	$("head").append(entitySearchDialogTemplate);

	var dialogContainer = '<div id="cD">	\
							<div class="modal fade" id="cwrcDialog"> \
								<div class="modal-dialog"> \
									<div class="modal-content"> \
										<div class="modal-header"> \
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
											<h4 class="modal-title"><span data-bind="text: currentData.getDialogTitle()"></span></h4> \
										</div> \
										<div data-bind="template: {name: getContentTemplate(), data: currentData}"></div> \
									</div> \
								</div> \
							</div> \
						</div>';

	$("body").append(dialogContainer);
});