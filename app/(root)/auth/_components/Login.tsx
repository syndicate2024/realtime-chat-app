import { useState } from 'react';
import { api } from '../../convex/_generated/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Assume authenticateUser is a function that handles user authentication
      const user = await authenticateUser(email, password);

      if (user) {
        // Call the backend to create the user if not already present
        await api.user.create({
          username: user.username,
          imageUrl: user.imageUrl,
          clerkId: user.clerkId,
          email: user.email,
        });
        console.log('User created or already exists');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login; 