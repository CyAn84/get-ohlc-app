import React from 'react'

const submitHandler = () => {
    console.log("Submitted")
}

export const InputForm: React.FunctionComponent = () => {
    return <form className="input-field px1" onSubmit={submitHandler}>
        <p>
            <label htmlFor="since" className="sinceYear">
                Since year: 
            </label>
            <input type="text" pattern="[0-9]{4}" id="since" />
        </p>
        <p>
            <label htmlFor="until" className="untilYear">
                Until year: 
            </label>
            <input type="text" pattern="[0-9]{4}" id="until" />
        </p>
        <p>
        <input type="submit" value="Get OHLC candles" />
        </p>
    </form>
}