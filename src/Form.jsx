function Form({fields, displayData}){
    return (
        <>
          <form>
                {fields}
                <button type="submit" onClick={displayData}>Submit</button>
            </form>
        </>
    )
}

export default Form;