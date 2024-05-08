import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AuthForm = ({ buttonName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (buttonName === 'Login') {

        }
        else {
            // createUserWithEmailAndPassword(auth, email, password)
            //     .then((userCredentials) => {
            //         userCredentials.user.displayName = username;

            //         navigate('/');
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     })

        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {buttonName === "Sign Up" && (
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type="text"
                        className='form-input'
                        placeholder='Enter your username'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
            )}

            <div className='form-group'>
                <label>Email</label>
                <input
                    type="email"
                    className='form-input'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Password</label>
                <input
                    type="password"
                    className='form-input'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>

            {
                buttonName === 'Sign Up' && (
                    <div className='form-group'>
                        <label>Confirm password</label>
                        <input
                            type="password"
                            className='form-input'
                            placeholder='Enter your confirm password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                )
            }

            <div className='form-group'>
                <input
                    type="submit"
                    className='button-primary'
                    value={buttonName}
                />
            </div>
            {
                buttonName === 'Sign Up' ? (<p>Bạn đã có tài khoản? <Link to='/login' className='text-primary'> Đăng nhập</Link></p>)
                    : (<p>Bạn chưa có tài khoản? <Link to='/signup' className='text-primary'> Đăng ký</Link></p>)
            }
        </form>
    )
}

export default AuthForm;

