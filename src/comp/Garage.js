function Garage(props){
    return(
        <>
        <h1>Garage</h1>
            {
                props.length &&
                <p>You have { props.length } Cars in Garage</p>
            }
        </>
    )
}

export default Garage