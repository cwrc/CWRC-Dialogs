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

The current version has a working lookup dialog that queries the CWRC repository and the VIAF data source.

In order to use the CWRC Dialogs the file `cD.js` needs to be included like any other javascript framework.

Also, the dialogs depend on the following frameworks and APIs:

+ [jQuery](http://jquery.com)
+ [jQueryUI](http://jqueryui.com) - For dragging modals
+ [Knockoutjs](http://knockoutjs.com/)
+ [Bootstrap](http://getbootstrap.com/)
+ [Bootstrap datepicker](http://www.eyecon.ro/bootstrap-datepicker/)
+ [CWRC API](https://github.com/cwrc/CWRC-ccm-rest-api)

A test application is included with the code. This application can be reached by opening the `index.html` file. The test application queries the solr engine and adds entries to a list. The application logic is located on the `app.js` file.

From the `app.js` file you can see that the CWRC dialogs need to be initialized for the cwrc api to work. You can initialize it with the `initializeWithLogin` or `initializeWithCookie` methods.

The interface as opened to the user includes:

+ initializeWithCookie
+ initializeWithLogin
+ popCreatePerson
+ popCreateOrganization
+ popSearchPerson
+ popCreate 
+ popSearch

The objects `popCreate` and `popSearch` provide key base access to the create and search dialogs respectively using the entity names as keys (person, organization etc.) 

When opening the search dialog on can pass different options to the call function that will modify the behaviour of the dialog.

+ success - a function to be called when selecting an entry
+ error - a function to call when an error occurs
+ buttons - this array defines custom butons with ther actions, each entry in the array takes the form of an object with a `label` string and an `action` in the form of the function to be run on click.

The data return has the following format:

+ name - name of entry as defined in the repository
+ id - id corresponding to the entry in the repository
+ data - raw data of the entry in text format as provided by the repository
