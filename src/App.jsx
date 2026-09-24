import Section from "./Section"

function App(){
    return (
        <>
            <h1>CV-Application</h1>
            <Section title="Personal Information"
                    attributes={[{name:"Name",type:"text"},{name:"Email", type:"email"},{name:"Phone Number", type:"tel"}]}/>
            <Section title="Education"
                    attributes={[{name:"Qualification",type:"text"},{name:"Institution", type:"text"},{name:"From", type:"date"},{name:"Till", type:"date"}]}/>
            <Section title="Experience"
                    attributes={[{name:"Job Title",type:"text"},{name:"Organisation", type:"text"},{name:"Responsibilities", type:"textarea"},{name:"From", type:"date"},{name:"Till", type:"date"}]}/>
        </>
    )
}

export default App;