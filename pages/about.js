// showcasing my exprience and education with the use of jsx styling.
const about = () => {
    return (
        <>
            <h1>Experience</h1>
            <div>
                <p>Company: Orderwise</p>
                <p>Position: Support Engineer</p>
                <p>Location: Gauteng, Standton</p>
                <p>Start: Oct - 2019 End-date: Present</p>
                <p>Duty:  Providing customer and technical support for the software that is being built by Orderwise.</p>
            </div>
            <div>
                <p>Company: True Technoligies Inc</p>
                <p>Position: Workshop Technician</p>
                <p>Location: Eastern Cape, Jeffreys-bay</p>
                <p>Start: Apr 2019 End-date: Sep 2019</p>
                <p>Duty: Form repairing customers computers/laptop to throubleshooting the ISP faults.</p>
            </div>
            <div>
                <p>Company: Digital Horizon</p>
                <p>Position: Field Technician</p>
                <p>Location: Gauteng, Benoni</p>
                <p>Start: Feb 2018 End-date: Oct 2018</p>
                <p>Duty: Assisted with all remote enquiries and onsite flauts.</p>
            </div>
            <h1>Education</h1>
            <div>
                <p>Company: Digital Horizon</p>
                <p>Position: Field Technician</p>
                <p>Location: Gauteng, Benoni</p>
                <p>Start: Feb 2018 End-date: Oct 2018</p>
                <p>Duty: Assisted with all remote enquiries and onsite flauts.</p>
            </div>
            <style jsx>{`
                h1 , h2 , p {
                color: #EDEDED;
                }
                div {
                    margin: 1%;
                    border: 5px solid black;
                    border-radius: 25px;
                    background-color: #444444;
                }
                div p {
                    display: flex;
                    justify-content: flex-start;
                    margin-left: 5%;
                    margin-right: auto;
                }
                p {
                    color: #EDEDED;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}

export default about