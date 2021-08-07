import React from 'react'

export default function Login() {
    return (
        <div className="Login">
            <div className="Login-box">
                <table>
                    <tbody>     
                        <tr>
                            <td>
                                <label>Name</label>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <input type="text" name="Name" placeholder="Enter Your Full Name..." required autoFocus></input>
                            </td>
                            <td> 
                                <button>Enter</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
