//importing required libraries
const Option = require('../../../models/option');
const Question = require('../../../models/question');


//Delete an option with id
module.exports.destroy = async function(req, res){
    try {
        let option = await Option.findOne({_id: req.params.id});
        if(option){
            //if option has votes deletion is prohibited
            if(option.vote > 0){
                return res.status(409).json({
                    message: "Cannot delete options with votes"
                });
            }
            //if option has zero votes delete option
            await Option.deleteOne({_id: req.params.id});
            return res.status(200).json({
                message: "Option deleted"
            });
        }else{
            //option with given id not found
            return res.status(404).json({
                message: "Option not found"
            });
        }
    }catch(err){
        return res.status(500).json({
            message: "Internal server error in deleting option"
        });
    }
}


//Adding vote to an option
module.exports.addVote = async function(req, res){
    try {
        let option = await Option.findOne({_id: req.params.id});
        if(option){
            //if option is found increment the vote by one and save it
            option.vote = option.vote + 1;
            await option.save();
            return res.status(200).json({
                message: "Vote added to the option"
            });
        }else{
            //option with given id not found
            return res.status(404).json({
                message: "Option not found"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Adding vote failed due to internal server error"
        });
    }
}