import React, { useState } from 'react';
import { createdata } from '../api';



export default function Register() {

    const [formData, setFormData] = useState({ email: '',username:'', password: '' })
    function handleChange(e) {
        const data = e.target.value;
        const at = e.target.name;
        setFormData({ ...formData, [at]: data })
        console.log('change')
    }
    async function handlesubmit(e) {
        e.preventDefault();
        await createdata(formData)
        setFormData({ email: '', username:'', password: '' })
        
   
    }
   
    return (
        <div className='main'>
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" name='username' value={formData.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={formData.email} onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
