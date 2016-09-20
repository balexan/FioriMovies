jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Movies in the list
// * All 3 Movies have at least one Actors

sap.ui.require([
	"sap/ui/test/Opa5",
	"movies/sap/com/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"movies/sap/com/test/integration/pages/App",
	"movies/sap/com/test/integration/pages/Browser",
	"movies/sap/com/test/integration/pages/Master",
	"movies/sap/com/test/integration/pages/Detail",
	"movies/sap/com/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "movies.sap.com.view."
	});

	sap.ui.require([
		"movies/sap/com/test/integration/MasterJourney",
		"movies/sap/com/test/integration/NavigationJourney",
		"movies/sap/com/test/integration/NotFoundJourney",
		"movies/sap/com/test/integration/BusyJourney",
		"movies/sap/com/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});