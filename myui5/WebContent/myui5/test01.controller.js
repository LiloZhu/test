sap.ui.define([
	'sap/m/MessageToast',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller'
], function(MessageToast, Fragment, Controller) {
"use strict";

var test01Controller = Controller.extend("myui5.test01", {

	onInit: function(){			
		this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
			this._bKeyboard = oEvent.type == "keyup";									
		}, this);
	},	
	
	handlePressOpenMenu: function(oEvent) {
		var oButton = oEvent.getSource();

		// create menu only once
		if (!this._menu) {
			this._menu = sap.ui.xmlfragment(
				"myui5.test011",
				this
			);
			this.getView().addDependent(this._menu);
		}

		var eDock = sap.ui.core.Popup.Dock;
		this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
	},

	handleMenuItemPress: function(oEvent) {
		var msg = "'" + oEvent.getParameter("item").getText() + "' pressed";
		MessageToast.show(msg);
	},

	handleTextFieldItemPress: function(oEvent) {
		var msg = "'" + oEvent.getParameter("item").getValue() + "' entered";
		MessageToast.show(msg);
	},
	
	onGetValue: function(oEvent){
		var msg = this.byId("switch_01").getState();
		MessageToast.show(msg);
	}
	
	
});

return test01Controller;

});