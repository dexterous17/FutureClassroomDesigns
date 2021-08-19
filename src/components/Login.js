import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Login() {
    const history =  useHistory();
    const [name,setname] =useState('')
    
    

    function type(val){
            setname(val.target.value)
    }

    function checkinput(){
        if(name===''){
            alert('Please Enter Your Name')
        }else{
            history.push(`/Images/1&${name}`)
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
