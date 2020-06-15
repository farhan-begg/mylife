import React from 'react';


function SignUp() {
    return (
        <div className='base-container'>
            <div className='header'>Sign-Up</div>
            <div className='content'>
                <div className='form-group'>
                    <label>Email: </label>
                    <input type='text' name='email' placeholder='your_email@gmail.com' />
                </div>
                <div className='form-group'>
                    <label>Username: </label>
                    <input type='text' name='username' placeholder='username' />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input type='text' name='password' placeholder='password' />
                </div>

            <button type = 'button' className='btn'>Sign-Up</button>

            </div>

        </div>
    )
}

export default SignUp