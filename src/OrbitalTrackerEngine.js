define([], function() {
    function OrbitalTrackerEngine(tle) {
        // Engine Constructor
        this.tleList = tle
    }

    OrbitalTrackerEngine.prototype.transform = function() {
        // do something with the tle
    }

    OrbitalTrackerEngine.prototype.updateTime = function(newTimeInMillisecondsSince1970) {
        // update all projections / estimations.
    }
})