/**
 * MongoDB Data Modeling with Mongoose.
 * Covers: Schema definition, Validation, and Model creation.
 */

const mongoose = require('mongoose');

// Define a Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Compile into a Model
const User = mongoose.model('User', UserSchema);

// --- Simulation of usage ---
async function simulateDatabaseOps() {
    console.log("Mongoose Schema defined for 'User'");
    console.log("Validation rules applied: username(unique, min3), email(regex), role(enum).");
}

if (require.main === module) {
    simulateDatabaseOps();
}

module.exports = User;
