define([
    './OrbitalTrackerView'
], function (
    OrbitalTrackerView
) {
    return function OrbitalTrackerPlugin(options) {
        return function install(openmct) {
            openmct.types.addType('view.orbitaltracker', {
                name: 'Heat Map',
                description: 'Orbital tracking from NORAD data',
                key: 'view.orbitaltracker',
                cssClass: 'icon-object',
                creatable: true,
                initialize: function (obj) {
                },
                form: [
                    {
                        key: "x",
                        name: "X",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "y",
                        name: "Y",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "counts",
                        name: "Counts",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "low",
                        name: "Low value",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "high",
                        name: "High value",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "gridSize",
                        name: "Grid size",
                        control: "textfield",
                        required: true
                    }
                ]
            });

            (openmct.mainViews || openmct.objectViews).addProvider({
                name: 'Orbital Tracker',
                key: 'orbitaltracker',
                cssClass: 'icon-object',
                canView: function (d) {
                    return d.type === 'view.orbitaltracker';
                },
                view: function (domainObject) {
                    return new OrbitalTrackerView(domainObject, openmct, document);
                }
            });
        };
    };
});