import React from 'react'
import { Link } from 'react-router-dom'

export default function SignedOutMenu({setAuthenticated}) {
    return (
        <>
            <div class="container-fluid d-flex justify-content-right align-items-center mt-3">
                <div className="float-right">
                    <ul className="signed-out-menu nav navbar">
                        <li className="mr-3">
                            <Link to="" onClick={() => setAuthenticated(true)}>Sign In</Link></li>
                        <li><a href="register.html">Register</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-primary btn-sm">Create a kudoboard</button>
            </div>
        </>
    )
}