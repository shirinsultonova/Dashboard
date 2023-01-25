import "./DiogramList.css"
import {DiogramItem} from "./DiogramItem/DiogramItem"
export const DiogramList = () => {
    const dataDiogramItems = [
        {
            desc: "Resolved",
            text: "449"
        },
        {
            desc: "Received",
            text: "426"
        },
        {
            desc: "Average first response time",
            text: "33m"
        },
        {
            desc: "Average response time",
            text: "3h 8m"
        },
        {
            desc: "Resolution within SLA",
            text: "94%"
        }
    ]
    return <>
        <ul className="diogram-list mb-0 list-unstyled">
            {dataDiogramItems.map(item => (
                <DiogramItem> 
                    <p className="diogram-item-desc">{item.desc}</p>
                    <h3 className="diogram-item-text mb-0">{item.text}</h3>
                </DiogramItem>
            ))}
        </ul>
    </>
}