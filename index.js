const express = require('express');
const app = express();

app.use(express.json());

// Define constants
const name = "Bandla Sainithin";
const dob = "07082003";
const rollNumber = "21BCE0295";
const email = "bandla.sainithin2021@vitstudent.ac.in";

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]+$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]+$/.test(item));
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().reverse()[0] || null;

    const userId = `${name.toLowerCase().replace(/ /g, '_')}_${dob}`;

    res.status(200).json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
