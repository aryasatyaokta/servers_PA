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


/** Terbimbing */
router.get('/questionbim', controller.getQuestionBim)
router.post('/questionbim', controller.insertQuestionBim)

router.route('/questionbim')
        .get(controller.getQuestionBim)
        .post(controller.insertQuestionBim)
        .delete(controller.dropQuestionBim)

router.route('/resultbim')
        .get(controller.getResultBim)
        .post(controller.storeResultBim)
        .delete(controller.dropResultBim)
/** ========== */

/** Mandiri */
router.get('/questionman', controller.getQuestionMan)
router.post('/questionman', controller.insertQuestionMan)

router.route('/questionman')
        .get(controller.getQuestionMan)
        .post(controller.insertQuestionMan)
        .delete(controller.dropQuestionMan)

router.route('/resultman')
        .get(controller.getResultMan)
        .post(controller.storeResultMan)
        .delete(controller.dropResultMan)
/** ======= */

/** Terstruktur 2 */
router.get('/questionstruk2', controller.getQuestionStruk2)
router.post('/questionsstruk2', controller.insertQuestionStruk2)

router.route('/questionstruk2')
        .get(controller.getQuestionStruk2)
        .post(controller.insertQuestionStruk2)
        .delete(controller.dropQuestionStruk2)

router.route('/resultstruk2')
        .get(controller.getResultStruk2)
        .post(controller.storeResultStruk2)
        .delete(controller.dropResultStruk2)
/** ============= */

/** Terbimbing 2 */
router.get('/questionbim2', controller.getQuestionBim2)
router.post('/questionbim2', controller.insertQuestionBim2)

router.route('/questionbim2')
        .get(controller.getQuestionBim2)
        .post(controller.insertQuestionBim2)
        .delete(controller.dropQuestionBim2)

router.route('/resultbim2')
        .get(controller.getResultBim2)
        .post(controller.storeResultBim2)
        .delete(controller.dropResultBim2)
/** ============ */


/** Mandiri 2 */
router.get('/questionman2', controller.getQuestionMan2)
router.post('/questionman2', controller.insertQuestionMan2)

router.route('/questionman2')
        .get(controller.getQuestionMan2)
        .post(controller.insertQuestionMan2)
        .delete(controller.dropQuestionMan2)

router.route('/resultman2')
        .get(controller.getResultMan2)
        .post(controller.storeResultMan2)
        .delete(controller.dropResultMan2)
/** ========= */

module.exports = router;
