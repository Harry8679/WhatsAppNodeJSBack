import express from 'express';
import trimRequest from 'trim-request';
import { register, login, logout, refreshToken } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/register').post(trimRequest.all, register);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/refreshToken').post(refreshToken);

export default router;