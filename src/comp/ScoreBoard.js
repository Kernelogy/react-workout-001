function ScoreBoard(props){
    return(
        <>
        {
            props.isScored == "true"
            ? 
                <div>
                    <h1>Goal Earned</h1> 
                    <p>Good Job</p>
                </div>
            : 
                <>
                    <h1>Goal Missed</h1>
                    <p>Better Luck Next Time</p>
                </>
     
        }

        </>
    )
}

export default ScoreBoard