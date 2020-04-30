//importing required libraries
const mongoose = require('mongoose');
const Question = require('../../../models/question');
const Option = require('../../../models/option');


//Creating a question
module.exports.createQuestion = async function(req, res){
    try {
        let questions = await Question.create({
            title: req.body.title
        });

        questions.save();
        return res.status(200).json({
            data: {
                id: questions._id,
                title: questions.title
            }
        });
    } catch (err) {
        //Internal server error in creating question
        console.log(err);
        return res.status(500).json({
            message: "Unable to create question"
        });
    }
}


//Deleting question
module.exports.destroy = async function(req, res){
    try {
        let question = await Question.findById(req.params.id);
        if(question){
            if(question.options.length > 0){
                let flag = false;
                //if question found check if any of its option has votes
                for(option of question.options){
                    if(option.votes > 0){
                        flag = true;
                    }
                }
                //if any of the option of question has votes deletion is prohibited
                if(flag){
                    return res.status(409).json({
                        message: "Cannot delete question where its options has votes"
                    });
                }
                //if none of the option has votes delete question and its options
                await Option.deleteMany({question: question._id});
                await Question.deleteOne({_id: question._id});
                return res.status(200).json({
                    message: "Question Deleted"
                });
            }
        }else{
            //Question with given id is not found
            return res.status(404).json({
                message: "Question not found"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error in deleting question"
        });
    }
}

//Getting a question by id
module.exports.getQuestion = async function(req, res){
    try{
        let ans = await Question.findOne({_id: req.params.id}).select('_id title options');
        if(ans){
            //if question found send details to client
            return res.status(200).json({
                data: {
                    _id: ans.id,
                    title: ans.title,
                    options: ans.options
                }
            });
        }else{
            //Question with given id not found
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//Creating option
module.exports.createOption = async function(req, res){
    try {
        let ans = await Question.findOne({_id: req.params.id});
        if(ans){
            //if question found create option
            let option = await Option.create({
                question: ans._id,
                option: req.body.option
            });
            let link = req.protocol + "://" + req.headers.host + "/options/" + option._id + "/add_vote";
            option.link_to_vote = link;
            await option.save();

            ans.options.push(option._id);
            await ans.save();

            return res.status(200).json({
                data: option,
                message: "Option added to the question"
            });
        } else{
            //Question with given id not found
            return res.status(404).json({
                message: "Question not found"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error in creating question"
        });
    }
}