jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"ru/rosneft/Cost/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"ru/rosneft/Cost/test/integration/pages/Worklist",
		"ru/rosneft/Cost/test/integration/pages/Object",
		"ru/rosneft/Cost/test/integration/pages/NotFound",
		"ru/rosneft/Cost/test/integration/pages/Browser",
		"ru/rosneft/Cost/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ru.rosneft.Cost.view."
	});

	sap.ui.require([
		"ru/rosneft/Cost/test/integration/WorklistJourney",
		"ru/rosneft/Cost/test/integration/ObjectJourney",
		"ru/rosneft/Cost/test/integration/NavigationJourney",
		"ru/rosneft/Cost/test/integration/NotFoundJourney",
		"ru/rosneft/Cost/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});