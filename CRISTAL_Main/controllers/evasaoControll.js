import express from "express";

const router = express.Router();

router.get('/evasao', (req, res) => {
        res.render('evasao'); // ou res.send(...)
});

export default router;