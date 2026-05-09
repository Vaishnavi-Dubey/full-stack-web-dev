/**
 * JWT (JSON Web Token) Authentication logic.
 * Covers: Token generation, Verification, and Auth Middleware.
 */

const jwt = require('jsonwebtoken');

// Secret Key (usually stored in .env)
const JWT_SECRET = 'your_super_secret_key_123';

/**
 * Generates a JWT for a user.
 */
function generateToken(userId) {
    return jwt.sign({ id: userId }, JWT_SECRET, {
        expiresIn: '1h' // Token expires in 1 hour
    });
}

/**
 * Middleware to protect private routes.
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or Expired Token' });
        req.user = user;
        next();
    });
}

// --- Demo usage ---
function demo() {
    console.log("Starting JWT Auth Demo...");
    const mockUserId = 'user_99';
    const token = generateToken(mockUserId);
    
    print(f"Generated Token: {token.substring(0, 20)}...");
    
    // Simulating verification
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (decoded) {
            console.log("Successfully verified token for user:", decoded.id);
        }
    });
}

if (require.main === module) {
    demo();
}

module.exports = { generateToken, authenticateToken };
