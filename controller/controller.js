const Questions = require('../models/questionSchema')
const Results = require('../models/resultSchema')
const { questions, answers } = require('../database/data');
const QuestionStruk = require('../models/questionStrukSchema')
const ResultStruk = require('../models/resultStrukSchema')
const { questionsStruk, answerStruk } = require('../database/dataStruk');
const QuestionBim = require('../models/questionBimSchema')
const ResultBim = require('../models/resultBimSchema')
const { questionBim, answerBim } = require('../database/dataBim')
const QuestionMan = require('../models/questionManSchema')
const ResultMan = require('../models/resultManSchema')
const { questionMan, answerMan } = require('../database/dataMan')
const QuestionStruk2 = require('../models/questionStruk2Schema')
const ResultStruk2 = require('../models/resultStruk2Schema')
const { questionsStruk2, answerStruk2 } = require('../database/dataStruk2');
const QuestionBim2 = require('../models/questionBim2Schema')
const ResultBim2 = require('../models/resultBim2Schema')
const { questionBim2, answerBim2 } = require('../database/dataBim2')
const QuestionMan2 = require('../models/questionMan2Schema')
const ResultMan2 = require('../models/resultMan2Schema')

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


/** Terbimbing */
async function getQuestionBim(req, res) {
    try {
        const q = await QuestionBim.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionBim(req, res){
    try {
        QuestionBim.insertMany({ questionBim, answerBim }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionBim(req, res){
    try {
        await QuestionBim.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultBim(req, res){
    try {
        const r = await ResultBim.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultBim(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultBim.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultBim(req, res){
    try{
        await ResultBim.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ========== */


/** Mandiri */
async function getQuestionMan(req, res) {
    try {
        const q = await QuestionMan.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionMan(req, res){
    try {
        QuestionMan.insertMany({ questionMan, answerMan }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionMan(req, res){
    try {
        await QuestionMan.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultMan(req, res){
    try {
        const r = await ResultMan.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultMan(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultMan.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultMan(req, res){
    try{
        await ResultMan.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ======= */

/** Terstruktur2 */
async function getQuestionStruk2(req, res) {
    try {
        const q = await QuestionStruk2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionStruk2(req, res){
    try {
        QuestionStruk2.insertMany({ questionsStruk2, answerStruk2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionStruk2(req, res){
    try {
        await QuestionStruk2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultStruk2(req, res){
    try {
        const r = await ResultStruk2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultStruk2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultStruk2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultStruk2(req, res){
    try{
        await ResultStruk2.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Terbimbing 2 */
async function getQuestionBim2(req, res) {
    try {
        const q = await QuestionBim2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionBim2(req, res){
    try {
        QuestionBim2.insertMany({ questionBim2, answerBim2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionBim2(req, res){
    try {
        await QuestionBim2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultBim2(req, res){
    try {
        const r = await ResultBim2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultBim2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultBim2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultBim2(req, res){
    try{
        await ResultBim2.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ============ */

/** Mandiri 2 */
async function getQuestionMan2(req, res) {
    try {
        const q = await QuestionMan2.find();
        res.json(q)
    }  catch (error) {
        res.json({ error })
    }
}

async function insertQuestionMan2(req, res){
    try {
        QuestionMan2.insertMany({ questionMan2, answerMan2 }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

async function dropQuestionMan2(req, res){
    try {
        await QuestionMan2.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

async function getResultMan2(req, res){
    try {
        const r = await ResultMan2.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

async function storeResultMan2(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided')

        ResultMan2.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg: "Result Saved Successfully...!" })
        })
    } catch (error) {
        res.json({error})
    }
}

async function dropResultMan2(req, res){
    try{
        await ResultMan2.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}
/** ========= */

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
    dropResultStruk,
    getQuestionBim,
    insertQuestionBim,
    dropQuestionBim,
    getResultBim,
    storeResultBim,
    dropResultBim,
    getQuestionMan,
    insertQuestionMan,
    dropQuestionMan,
    getResultMan,
    storeResultMan,
    dropResultMan,
    getQuestionStruk2,
    insertQuestionStruk2,
    dropQuestionStruk2,
    getResultStruk2,
    storeResultStruk2,
    dropResultStruk2,
    getQuestionBim2,
    insertQuestionBim2,
    dropQuestionBim2,
    getResultBim2,
    storeResultBim2,
    dropResultBim2,
    getQuestionMan2,
    insertQuestionMan2,
    dropQuestionMan2,
    getResultMan2,
    storeResultMan2,
    dropResultMan2,
};