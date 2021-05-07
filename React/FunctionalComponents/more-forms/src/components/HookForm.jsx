import React, {useState} from 'react';

const HookForm = props => {

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    return(
        <div>
            <form>
                <p>
                <label>First Name : </label>
                <input onChange={e=>setfName(e.target.value)} type="text" />
                {fName.length<2 && fName.length>0?<h6>This field must be at least 2 characters.</h6>
                || fName.length==0:""}
                </p>
                <p>
                <label>Last Name : </label>
                <input onChange={e=>setlName(e.target.value)} type="text" />
                {lName.length<2 && lName.length>0?<h6>This field must be at least 2 characters.</h6>:""}
                </p>
                <p>
                <label>Email : </label>
                <input onChange={e=>setEmail(e.target.value)} type="email" />
                {email.length<5 && email.length>0?<h6>This field must be at least 5 characters.</h6>:""}
                </p>
                <p>
                <label>Password : </label>
                <input onChange={e=>setPassword(e.target.value)} type="password" />
                {password.length<8 && password.length>0?<h6>This field must be at least 8 characters.</h6>:""}
                </p>
                <p>
                <label>Confirm Password : </label>
                <input onChange={e=>setConfirmPw(e.target.value)} type="password" />
                {password!==confirmPw && confirmPw.length>0? <h6>Passwords must match</h6>:""}
                </p>
                <br></br>

            </form>
        </div>
    );
}
export default HookForm;