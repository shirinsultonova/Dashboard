import "./DiogramItem.css"
export const DiogramItem = (props) => {
    return <>
        <li className="diogram-item">
            {props.children}
        </li>
    </>
}