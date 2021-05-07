import React, {useState} from 'react';

const HookForm = props => {

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");

    return(
        <div>
            <form>
                <p>
                <label>First Name : </label>
                <input onChange={e=>setfName(e.target.value)} type="text" />
                </p>
                <p>
                <label>First Name : </label>
                <input onChange={e=>setlName(e.target.value)} type="text" />
                </p>
                <p>
                <label>Email : </label>
                <input onChange={e=>setEmail(e.target.value)} type="email" />
                </p>
                <p>
                <label>Password : </label>
                <input onChange={e=>setPassword(e.target.value)} type="password" />
                </p>
                <p>
                <label>Confirm Password : </label>
                <input onChange={e=>setConfPass(e.target.value)} type="password" />
                </p>
                <br></br>
                <div>
                    <p>
                        Your Form Data:
                    </p>
                    <p>
                        First Name: {fName}
                    </p>
                    <p>
                        Last Name: {lName}
                    </p>
                    <p>
                        Email: {email}
                    </p>
                    <p>
                        Password: {password}
                    </p>
                    <p>
                        Confirm Password: {confPass}
                    </p>

                </div>
            </form>
        </div>
    );
}
export default HookForm;