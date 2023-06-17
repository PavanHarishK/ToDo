import React from 'react'


const FormsNewInputs=({inputs,onDelete})=> {

    if (!inputs || inputs.length === 0){
        return null
    }

    // to fetch index and calling delete function
    const deleteIndex = (index)=>{
        deleteHandler(index)
    }
    //To delete item by using index
    const deleteHandler =(index)=>{  
        onDelete(index);
    }
    
  return (
    <div>
        <h4>Table Page</h4>
        {inputs.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Time</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {inputs.map((input, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{input.title}</td>
                    <td>{input.time}</td>
                    <td>
                        <button onClick={deleteIndex}>Delete</button>    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
                
    </div>
  )
}

export default FormsNewInputs