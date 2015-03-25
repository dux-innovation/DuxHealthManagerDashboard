sap.ui.jsview("view.launchpad", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf view.launchpad
	 */
	getControllerName : function() {
		return "view.launchpad";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf view.launchpad
	 */
	createContent : function(oController) {

		var page =  new sap.m.Page({
			title : "{i18n>Tile_Main_Application}",
			showNavButton: false,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			

			content : [

				new sap.m.TileContainer("tile_container", {
				height: "100%",
				width: "100%",
				allowAdd: true,
				tiles : [
				         
					new sap.m.StandardTile("tile_predictive", {
						title : "{i18n>Tile_Title_Predictive_Analysis}",
						icon: "sap-icon://future",
						iconDensityAware: false,
						removable: false,
						press: function(){
							window.location.assign("../DuxHealthManagerPredictiveMain");
						}
					}),

					new sap.m.StandardTile("tile_consultation", {
						title : "{i18n>Tile_Title_Consultation_Reports}",
						icon: "sap-icon://clinical-order",
						iconDensityAware: false,
						removable: false,
						press: function(){
							//window.location.assign("../DuxHealthPrescriptionApp");
						}
					}),

					new sap.m.StandardTile("tile_region", {
						title : "{i18n>Tile_Title_Region_Reports}",
						icon: "sap-icon://world",
						removable : false,
						press: function(){
							//window.location.assign("../DuxHealthExaminationApp");
						}
					}),
					
					new sap.m.StandardTile("tile_medicine", {
						title : "{i18n>Tile_Title_Medicine_Reports}",
						icon: "sap-icon://pharmacy",
						removable : false,
						press: function(){
							//window.location.assign("../DuxHealthExaminationApp");
						}
					}),
					
					new sap.m.StandardTile("tile_employee", {
						title : "{i18n>Tile_Title_Employee}",
						icon: "sap-icon://work-history",
						removable : false,
						press: function(){
							//window.location.assign("../DuxHealthExaminationApp");
						}
					}),
					
					
					new sap.m.StandardTile("tile_complain", {
						title : "{i18n>Tile_Title_Complain_Reports}",
						icon: "sap-icon://notification-2",
						removable : false,
						press: function(){
							//window.location.assign("../DuxHealthExaminationApp");
						}
					})
					
				]

			})
	
			]
		});
		
		page.setEnableScrolling(false); // give a fixed height, so the TileContainer can use 100% height

		return page;
	}

});
