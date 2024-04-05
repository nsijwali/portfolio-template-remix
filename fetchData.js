import express from 'express';
// Import userData with JSON import assertion
import userData from './db/user.json' assert { type: 'json' };

const router = express.Router();

router.get('/', (req, res) => {
	res.json(userData);
});

export default router;
