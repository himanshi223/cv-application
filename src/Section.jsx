import { useState } from "react";
import Form from "./Form";
import Data from "./Data";

function Section({title,attributes,addDataToFinal}){
    const initial = {};
    attributes.forEach(attribute=> {initial[attribute.name] = ""})

    const [details, setDetails] = useState(initial);
    const [submitted, setSubmitted] = useState(false);

    const fields = attributes.map(attribute =>{
        return (
           <div key={attribute.name}>
                <label htmlFor={attribute.name}>{attribute.name}</label>
                {(attribute.type === "textarea")?
                    <textarea id={attribute.name} value={details[attribute.name]} onChange = {(e)=>{
                        setDetails({...details, [attribute.name]: e.target.value})}}></textarea>:
                    <input id={attribute.name} type={attribute.type} required value = {details[attribute.name]} onChange = {(e)=>{
                        setDetails({...details, [attribute.name]: e.target.value});
                    }}/>
                }
           </div>
        )
    });




    const displayForm = ()=>{
        setSubmitted(false);
    }

    const displayData = (e)=>{
        e.preventDefault();
        if(e.target.parentNode.checkValidity()){
            setSubmitted(true);
            addDataToFinal(title,details);
        }
        else
            e.target.parentNode.reportValidity();
    }

    if(submitted){
            return (
                <div className="section">
                    <Data details = {details}
                    title = {title}
                    displayForm = {displayForm}/>
                </div>
            )
        }

    return (
        <div className="section">
            <h2>{title}</h2>
            <Form fields = {fields}
                  displayData = {displayData}/>
        </div>
    )
}

export default Section;