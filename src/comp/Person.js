function Person(props){
    return (
        <>
            Hi Welcome { props.name } <br></br>
            You are { props.gender } 
            and your age is { props.age }
        </>
    )
}

export default Person  