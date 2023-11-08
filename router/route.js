const { Router } = require("express");
const router = Router();
const controller = require('../controller/controller')

router.get('/questions', controller.getQuestions)
router.post('/questions', controller.insertQuestions)

router.route('/questions')
        .get(controller.getQuestions)
        .post(controller.insertQuestions)
        .delete(controller.dropQuestion)

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

/** Terstruktur */

router.get('/questionsstruk', controller.getQuestionStruk)
router.post('/questionsstruk', controller.insertQuestionStruk)

router.route('/questionsstruk')
        .get(controller.getQuestionStruk)
        .post(controller.insertQuestionStruk)
        .delete(controller.dropQuestionStruk)

router.route('/resultstruk')
        .get(controller.getResultStruk)
        .post(controller.storeResultStruk)
        .delete(controller.dropResultStruk)

/** =========== */

module.exports = router;
