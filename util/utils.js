 (function(){
     /**
     * Handles error thrown if the resource is not found.
     * @param resource
     * @param res
     */
    exports.handleResourceError = function(resource, res){
        if(!resource){
            res.status(404).send("Not Found");
        }
    };
    /**
     * This is a generic helper function for MongoDB errors
     * that occur during searching/creating/updating a document.
     * @param err
     * @param res
     * TODO - Respond with developer friendly error messages
     */
    exports.handleDBError = function(err, res){
        if(err) {
            if (err.name == "ValidationError") {
                res.status(400);
                res.send(err);
            } else if (err.name == "CastError") {
                res.status(400);
                res.send(err);
            } else if(err.name == "Not Found") {
                res.status(404);
                res.send(err);
            } else {
                res.status(500);
                res.send(err);
            }
        } else {
            res.status(500);
            res.send({error: 'Unknown Server Error'});
        }
    };
 })();
