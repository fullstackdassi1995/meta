import React from 'react';

function LoginForm() {
    return (
        <div className="login-form">
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className='btn-btn-success'>Login</button>
        </div>
    );
}

export default LoginForm;