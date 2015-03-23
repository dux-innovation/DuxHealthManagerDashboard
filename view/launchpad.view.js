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
			title : "Menu do Paciente",
			showNavButton: true,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			

			content : [

				new sap.m.TileContainer("tile_container", {
				height: "100%",
				width: "100%",
				allowAdd: true,
				tiles : [

					new sap.m.StandardTile("tile_consultation", {
						title : "{i18n>Tile_Title_Consultation}",
						icon: "sap-icon://activity-individual",
						iconDensityAware: false,
						removable: false,
						press: function(){
							window.location.assign("../DuxHealthPrescriptionApp");
						}
					}),

					new sap.m.StandardTile("tile_examination", {
						title : "{i18n>Tile_Title_Examination}",
						icon: "sap-icon://stethoscope",
						removable : false,
						press: function(){
							window.location.assign("../DuxHealthExaminationApp");
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
