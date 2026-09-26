function Data({title, details, displayForm}){
    const fields = [];
    for(let prop in details){
        fields.push(
            <p key={prop}><span>{prop}:</span> {details[prop]}</p>
        )
    }
    return (
        <>
            <button onClick = {displayForm} className="edit">Edit Details</button>
            <h2>{title}</h2>
            {fields}
        </>
    )
}

export default Data;