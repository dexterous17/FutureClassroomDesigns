import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import loginimage from '../assets/images/welcome_jury.jpg'
export default function Login() {
    const history =  useHistory();
    const [name,setname] =useState('')
    const [id,setId] = useState(1)
    
    

    function type(val){
            setname(val.target.value)
    }

    function typenumber(val){
        setId(val.target.value)
    }

    function checkinput(){
        if(name===''){
            alert('Please Enter Your Name')
        }else{
            history.push(`/Images/${id}&${name}`)
        }

    }
    return (
        <div className="Login">
            <div className="loginimage">
                    <img src={loginimage}></img>
            </div>
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
                                If
                            </td>
                            <td>
                                <input type="number" name="number" placeholder="Number" maxLength="4" size="4" onChange={typenumber}></input>
                            </td>
                    
                    
                            <td> 
                                <button onClick={checkinput}>Enter</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            Note: Only add the number if you want to jump to a particular number
        </div>
    )
}
