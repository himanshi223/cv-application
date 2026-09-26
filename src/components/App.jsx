import { useState } from "react";
import Section from "./Section";
import Final from "./FinalCV";

function App(){
    const [educationSections, setEducationSections] = useState([{title:"Education",key:crypto.randomUUID()}]);
    const [finalDetails, setFinalDetails] = useState({personalInfo:[],education:[],experience:[]});
    const [displayFinal, setDisplayFinal] = useState(false);

    const addDataToFinal = (section,details)=>{
        setFinalDetails({...finalDetails, [section]:[...finalDetails[section], details]});
    }

    const addEducationSection = ()=>{
        setEducationSections([...educationSections,{title:"Another Qualification", key:crypto.randomUUID()}]);
    };

    const removeEducationSection = (key) => {
        if(educationSections.length>1){
            const index = educationSections.findIndex(section=>section.key === key);
            educationSections.splice(index,1);
            setEducationSections([...educationSections]);
        }
    };

    const educationSectionList = educationSections.map(section=>
        <li key={section.key}>
            <Section
            section = "education"
            title={section.title} 
            attributes={[
                {name:"Qualification",type:"text"},
                {name:"Institution", type:"text"},
                {name:"From", type:"date"},
                {name:"Till", type:"date"}
            ]}
            addDataToFinal = {addDataToFinal}/>
            {section.title!=="Education" && <button className="remove" onClick={()=>removeEducationSection(section.key)}>Remove</button>}
        </li>
    );


    const [experienceSections, setExperienceSections] = useState([{title:"Experience",key:crypto.randomUUID()}]);


    const addExperienceSection = ()=>{
        setExperienceSections([...experienceSections,{title:"Another Job Title", key:crypto.randomUUID()}]);
    };

    const removeexperienceSection = (key) => {
        if(experienceSections.length>1){
            const index = experienceSections.findIndex(section=>section.key === key);
            experienceSections.splice(index,1);
            setExperienceSections([...experienceSections]);
        }
    };

    const experienceSectionList = experienceSections.map(section=>
        <li key={section.key}>
            <Section
            section = "experience"
            title={section.title} 
            attributes={[
                {name:"Job Title",type:"text"},
                {name:"Organisation", type:"text"},
                {name:"Responsibilities", type:"textarea"},
                {name:"From", type:"date"},
                {name:"Till", type:"date"}
            ]}
            addDataToFinal = {addDataToFinal}/>
            {section.title!=="Experience" && <button className= "remove" onClick={()=>removeexperienceSection(section.key)}>Remove</button>}
        </li>
    );

    if(!displayFinal){
        return (
            <>
                <h1>CV Builder</h1>
                <hr/>
                <Section section="personalInfo" title="Personal Information"
                        attributes={[{name:"Name",type:"text"},{name:"Email", type:"email"},{name:"Phone Number", type:"tel"}]}
                        addDataToFinal = {addDataToFinal}/>
                <hr/>
                {educationSectionList}
                <button onClick={addEducationSection} className={"add"}>Add Another Qualification</button>
                <hr/>
                {experienceSectionList}
                <button onClick={addExperienceSection} className={"add"}>Add Another Title</button>
                <hr/>
                <button onClick={()=>setDisplayFinal(true)} className="done">Done</button>
            </>
        )
    }
    return (
        <Final details={finalDetails}
        displayData = {()=>setDisplayFinal(false)}/>
    )
}

export default App;