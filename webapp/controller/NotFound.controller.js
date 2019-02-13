sap.ui.define([
		"ru/rosneft/Cost/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ru.rosneft.Cost.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);