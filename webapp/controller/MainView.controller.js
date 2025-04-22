sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("company.trial.controller.MainView", {
        onInit: function () {
            const oJSONModel = new sap.ui.model.json.JSONModel(); //Instancia para el modelo
            const oView = this.getView(); //Instancia para la vista
            oJSONModel.loadData("./model/SelectionScreenMenu.json"); //Cargar Data JSon
            oView.setModel(oJSONModel, "selectionScreen"); //Asignar modelo a la vista
        }
    });
});