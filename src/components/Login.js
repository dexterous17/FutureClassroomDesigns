import React, { useState } from 'react'

export default function Login() {
    const [name,setname] =useState('')

    function type(val){
            console.log(val.target.value)
            setname(val.target.value)
    }

    function checkinput(){
        if(name===''){
            alert('Please Enter Your Name')
        }else{
            alert(name)
        }

    }

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
                                <input type="text" name="Name" placeholder="Enter Your Full Name..." required autoFocus onChange={type} ></input>
                            </td>
                            <td> 
                                <button onClick={checkinput}>Enter</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
