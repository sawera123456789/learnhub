const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.get("/", async (req, res) =>{
    try {
        const contacts = await Contact.find().sort({createdAt: -1});
        res.status(200) .json(contacts);
    }  catch (err) {
        res.status(500) .json({message: err.message});
    }
});

router.post("/", async (req, res) =>{
    try {
        const {name, email, subject, message} = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400) .json({message: "All fields are required"});
        }

        const newContact = new Contact({name, email, subject, message});
        const savedContact = await newContact.save();
        res.status(201) .json(savedContact);
    }  catch (err) {
        res.status(400) .json({message: err.message});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404) .json({message: "Contact not found"});
        res.status(200) .json({message: "Contact deleted successfully"});
    }  catch (err) {
        res.status(500) .json({message: err.message});
    }
});

module.exports = router;