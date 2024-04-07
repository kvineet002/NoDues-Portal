const express = require('express');
const router = express.Router();
const User = require('../models/user');

const getUserprofile = async (req, res) => {
    try {
        const user = await User.findOne({ rollNo: req.body.rollNo});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateUserprofile = async (req, res) => {
    try {
        const user = await User.findOne({ rollNo: req.body.rollNo});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = req.body.name;
        user.email = req.body.email;
        user.program = req.body.program;
        user.year = req.body.year;
        user.branch = req.body.branch;
        user.accountNo = req.body.accountNo;
        user.IFSC = req.body.IFSC;
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { getUserprofile, updateUserprofile };