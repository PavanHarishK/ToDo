import React from 'react'


const TotalTasks = ({ inputs }) => {

    if (!inputs || inputs.length === 0) {
        return null
    }

    function calculateNewValue() {
        let sum = 0;
        inputs.forEach(i => sum += parseInt(i.time))
        return sum;
    }

    return (
        <div>
            <div>Total tasks : {inputs.length}</div>
            <div>Total Days : {calculateNewValue() / 8}</div>
            <div>Total Hours : {calculateNewValue()}</div>
        </div>
    )
}

export default TotalTasks