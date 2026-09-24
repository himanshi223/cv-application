function Data({details, displayForm}){
    const fields = [];
    for(let prop in details){
        fields.push(
            <p key={prop}><span>{prop}:</span> {details[prop]}</p>
        )
    }
    return (
        <>
            <button onClick = {displayForm} className="edit">Edit Details</button>
            {fields}
        </>
    )
}

export default Data;