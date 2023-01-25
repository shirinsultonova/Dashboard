import "./DiogramCard.css";
import  DiogramImg from "../../../assets/images/diogram.png";
import {DiogramList} from "./DiogramList/DiogramList"

export const  DiogramCard = () => {
    return <>
        <div className="diogram-card-wrapper d-flex align-items-start justify-content-between bg-white rounded-2">
            <div className="diogram-inner w-100">
                <div className="diogram-inner-top d-flex align-items-end justify-content-between">
                    <div>
                        <h2 className="diogram-titles mb-2">Today’s trends</h2>
                        <time className="diogram-time mb-0" dateTime="2019-05-25 21:41">
                            as of 25 May 2019, 09:41 PM
                        </time>
                    </div>

                    <div>
                        <span className="diogram-day-text diogram-day-text-today d-inline-flex align-items-center">Today</span>
                        <span className="diogram-day-text diogram-day-text-yesterday d-inline-flex align-items-center">Yesterday</span>
                    </div>
                </div>

                <img className="img-fluid" src={DiogramImg} width="720" height="auto" alt="Diogram image" />
            </div>
            <DiogramList />
        </div>
    </>
}