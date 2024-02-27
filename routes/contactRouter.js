import express from 'express';
import Contacts from '../models/contactModel.js'; // Import the Contact model

const router = express.Router();

router.post('/', async (req, res) => {
  const { fullName, email, purpose } = req.body;

  try {
    const newContact = new Contacts({ 
      fullName,
      email,
      purpose,
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

export default router;
