function SignUp(){
    const [year,setYear]   = React.useState('');
    const [name,setName]   = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [checkbox,setCheckbox] = React.useState('');

    function handle(){
        console.log('year:',year);
        console.log('name:',name);
        console.log('email:',email);
        console.log('password:',password);
        console.log('checkbox:',checkbox);
    }
    console.log('hello');

    return (
        <>
        <h1>Hello</h1>
        <select value={year} onChange={e => setYear(e.target.value)}>
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>    
        </select>
        <div>Name</div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <div>Email</div>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <div>Password</div>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>  
        <div><input type="checkbox" value={checkbox} onChange={e => setCheckbox(e.target.checked)}/> 
            Rememeber me
        </div>
        <button onClick={handle}>Submit</button>    
        </>
    );
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)