const Questions = require('../models/questionSchema')
const Results = require('../models/resultSchema')
const { questions, answers } = require('../database/data');
const QuestionStruk = require('../models/questionSchema')
const ResultStruk = require('../models/resultStrukSchema')
const { questionsStruk, answerStruk } = require('../database/dataStruk');

async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestion(req, res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResult(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResult(req, res){
    try{
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}

/** Terstruktur */

async function getQuestionStruk(req, res) {
    try {
        const q = await QuestionStruk.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk(req, res){
    try {
        QuestionStruk.insertMany({ questionsStruk, answerStruk }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk(req, res){
    try {
        await QuestionStruk.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk(req, res){
    try {
        const r = await ResultStruk.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk(req, res){
    try{
        await ResultStruk.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}

/** =========== */

module.exports = {
    getQuestions,
    insertQuestions,
    dropQuestion,
    getResult,
    storeResult,
    dropResult,
    getQuestionStruk,
    insertQuestionStruk,
    dropQuestionStruk,
    getResultStruk,
    storeResultStruk,
    dropResultStruk
};