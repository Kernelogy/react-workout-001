import { useState } from 'react'
import './App.css'

function App(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")

    const formSubmitted = (event) => {
        alert("Form Submitted")
        setUsername(event.target.username.value)
        setEmail(event.target.email.value)
        setContact(event.target.contact.value)
        setPassword(event.target.password.value)
        event.preventDefault()
    }
    return (
        <>
        <h1>Signup Form</h1>
        <form method='POST' onSubmit={formSubmitted}>
            <input type='text' name='username' placeholder='Username'/> <br></br>
            <input type='email' name='email' placeholder='email@example.com' /> <br></br>
            <input type='contact' name='contact' placeholder='9876543210' /> <br></br>
            <input type='password' name='password' placeholder='Password' /> <br></br>
            <input type='submit' value="Submit" />
        </form>
        {
            username && email && contact && password &&
            <p>
                The Given Values are <br></br>
                Username : { username } <br></br>
                Email : { email } <br></br>
                Contact : { contact } <br></br>
                Password : { password }
            </p>
        }
        </>
    )
}

export default App