function Final({details,displayData}){
    const {personalInfo, education, experience}  = details;
    const educationList = education.map((qualification,index)=>{
        return(
            <li key={index}>
                <h3>{qualification.Qualification}</h3>
                <div className="about">
                    <p>{qualification.Institution}</p>
                    <p className="date">{`${new Date(qualification.From).toLocaleDateString()} - ${new Date(qualification.Till).toLocaleDateString()}`}</p>
                </div>
            </li>
        )
    });
    const experienceList = experience.map((title,index)=>{
        return(
            <li key={index}>
                <h3>{title["Job Title"]}</h3>
                <div className="about">
                    <p>{title.Organisation}</p>
                    <p className="date">{`${new Date(title.From).toLocaleDateString()} - ${new Date(title.Till).toLocaleDateString()}`}</p>
                </div>
                <p>{title.Responsibilities}</p>
            </li>
        )
    });

    return (
        <>
        <h1>{personalInfo[0].Name}</h1>
        <div className="contact">
            <p>{personalInfo[0].Email}</p>
            <p>{personalInfo[0]["Phone Number"]}</p>
        </div>
        <div className="education section">
            <h2>Educational Qualifications</h2>
            {educationList}
        </div>
        <div className="experience section">
            <h2>Experience</h2>
            {experienceList}
        </div>
        <button onClick={displayData}>Go Back</button>
        {console.log(details)}
        </>
    )
}

export default Final;
