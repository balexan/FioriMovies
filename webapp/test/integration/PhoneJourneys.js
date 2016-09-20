jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"movies/sap/com/test/integration/NavigationJourneyPhone",
		"movies/sap/com/test/integration/NotFoundJourneyPhone",
		"movies/sap/com/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});