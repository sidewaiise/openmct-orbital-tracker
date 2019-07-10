define([
    // Provide your input files / definitions here
    './OrbitalTrackerController',
    './OrbitalTrackerModel',
    './OrbitalTrackerRenderer',
    './orbital-tracker.html',
    './orbital-tracker.scss'
], function (
    OrbitalTrackerController,
    OrbitalTrackerModel,
    OrbitalTrackerRenderer,
    orbitaltrackerTemplate
) {

    function OrbitalTrackerView(domainObject, openmct, document) {
        this.domainObject = domainObject;
        this.openmct = openmct;
        this.document = document;
    }

    OrbitalTrackerView.prototype.show = function (container) {
        var self = this;
        var data = {
            // Build your data object here.
            // eg.
            nodes: []

        };
        
        // Implement your controller
        
        self.controller = new OrbitalTrackerController(
            data,
            // ...
        );
    };

    OrbitalTrackerView.prototype.destroy = function () {
        if (this.controller) {
            this.controller.destroy();
            delete this.controller;
        }
    };

    return OrbitalTrackerView;
});