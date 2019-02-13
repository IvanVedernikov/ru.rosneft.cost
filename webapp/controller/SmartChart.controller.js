sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageBox',
	'sap/ui/fl/FakeLrepConnector',
	'sap/ui/core/util/MockServer',
	'sap/m/Image',
	'sap/m/Text',
	'sap/m/FlexItemData',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
], function (Controller, MessageBox, FakeLrepConnector, MockServer, Image, Text, FlexItemData, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ru.rosneft.Cost.controller.SmartChart", {

		onInit: function () {
			// enable 'mock' variant management
			// FakeLrepConnector.enableFakeConnector("mockserver/component-test-changes.json");

			// var oMockServer = new MockServer({
			// 	rootUri: "sapuicompsmartchart/"
			// });
			// this._oMockServer = oMockServer;
			// oMockServer.simulate("mockserver/metadata.xml", "mockserver/");
			// oMockServer.start();

			// // create and set ODATA Model
			// this._oModel = new sap.ui.model.odata.ODataModel("sapuicompsmartchart", true);
			// this.getView().setModel(this._oModel);

			//set maxHeight for categoryAxis in Cost to allow longer labels being fully displayed
			// var oSmartChart = this.getView().byId("smartChartGeneral");
			// var oVizChart = oSmartChart.getChart();
			// oVizChart.setVizProperties({
			// 	categoryAxis: {
			// 		layout: {
			// 			maxHeight: 0.8
			// 		}
			// 	},
			// 	plotArea: {
			// 		dataLabel: {
			// 			visible: true
			// 		}
			// 	}
			// });
			// oVizChart.setChartType("stacked_column");
		},

		onNavigationTargetsObtained: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var oSemanticAttributes = oParameters.semanticAttributes;

			oParameters.show("Supplier", new sap.ui.comp.navpopover.LinkData({
				text: "Homepage",
				href: "",
				target: "_blank"
			}), [], new sap.ui.layout.form.SimpleForm({
				maxContainerCols: 1,
				content: [
					new sap.ui.core.Title({
						text: "Список затрат" + ' (' + oSemanticAttributes.Bebtxt + ')'
					}), sap.ui.xmlfragment("ru.rosneft.Cost.fragment.TableCost")

				]
			}));
		},

		onNavigate: function (oEvent) {
			var oParameters = oEvent.getParameters();
			if (oParameters.text === "Homepage") {
				return;
			}
			MessageBox.show(oParameters.text + " has been pressed", {
				icon: MessageBox.Icon.INFORMATION,
				title: "SmartChart demo",
				actions: [
					MessageBox.Action.OK
				]
			});
		},
		onVizSetings: function () {
			//set maxHeight for categoryAxis in Cost to allow longer labels being fully displayed
			var oSmartChart = this.getView().byId("smartChartGeneral");
			var oVizChart = oSmartChart.getChart();
			oVizChart.setVizProperties({
				categoryAxis: {
					layout: {
						maxHeight: 0.8
					}
				},
				plotArea: {
					dataLabel: {
						visible: true
					}
				}
			});
			// oVizChart.setChartType("stacked_column");	
		}
	});
});