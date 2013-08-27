CWRC Dialogs
============

This project aims to provide a set of dialogs to peform lookups, create and edit 4 types of entities for all CWRC applications.

These entities include:

+ person
+ organization
+ place
+ title

Status
------

The current version has a working lookup dialog that queries the solr engine for the person entity.

At this stage, all of the development files need to be included with the applications in the html file where the dialogs will be needed:

> <!-- Dev CWRC Dialogs -->
> <script src="js/CWRCEntityDialog.js"></script>
> <script src="js/CWRCEntitySearchDialog.js"></script>
> <script src="js/CWRCTemplates.js"></script>
> <script src="js/cD-dev.js"></script>
> <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
> <link rel="stylesheet" type="text/css" href="css/cwrcDialogs.css">
> <!-- End of Dev -->

Also, the dialogs depend on the following frameworks:

+ [jQuery](http://jquery.com)
+ [Knockoutjs](http://knockoutjs.com/)
+ [Bootstrap](http://getbootstrap.com/)

A test application is included with the code. This application can be reached by opening the `index.html` file. The test application queries the solr engine and adds entries to a list. The application logic is located on the `app.js` file.

From the `app.js` file we can se that the method `cD.searchPerson` is called to instantiate a person entity search dialog. A callback function is passed to this method to process the selected entity after the add button is clicked; in this case, the result is added to the `people` array.

The remaining functionality is pending.

