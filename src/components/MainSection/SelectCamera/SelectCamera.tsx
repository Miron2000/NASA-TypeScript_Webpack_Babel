import React, {FC} from 'react';
import {ObjRoverCameras} from "../../../types";

interface PropsForSelectCamera {
    roverChosen: string;
    value: string;
    onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCamera: FC<PropsForSelectCamera> = (props) => {
    const roverCameras: ObjRoverCameras = {
        "spirit": [
            {
                abbrev: "FHAZ",
                name: "Front Hazard Avoidance Camera"
            },
            {
                abbrev: "RHAZ",
                name: "Rear Hazard Avoidance Camera"
            },
            {
                abbrev: "NAVCAM",
                name: "Navigation Camera"
            },
            {
                abbrev: "PANCAM",
                name: "Panoramic Camera"
            }
        ],
        "curiosity": [
            {
                abbrev: "FHAZ",
                name: "Front Hazard Avoidance Camera"
            },
            {
                abbrev: "RHAZ",
                name: "Rear Hazard Avoidance Camera"
            },
            {
                abbrev: "MAST",
                name: "Mast Camera"
            },
            {
                abbrev: "CHEMCAM",
                name: "Chemistry and Camera Complex"
            },
            {
                abbrev: "MARDI",
                name: "Mars Descent Imager"
            },
            {
                abbrev: "NAVCAM",
                name: "Navigation Camera"
            },
        ],
        "opportunity": [
            {
                abbrev: "FHAZ",
                name: "Front Hazard Avoidance Camera"
            },
            {
                abbrev: "RHAZ",
                name: "Rear Hazard Avoidance Camera"
            },
            {
                abbrev: "NAVCAM",
                name: "Navigation Camera"
            },
            {
                abbrev: "PANCAM",
                name: "Panoramic Camera"
            }
        ]
    }

    //roverChosen існує в roverCameras
    // console.log(roverCameras[roverChosen as keyof ObjRoverCameras], 'roverCameras[roverChosen]')
    return (
        <>
            <p>Choose a Camera:</p>
            <div className='select__wrapper'>
                <select value={props.value} onChange={props.onChangeSelect} className='select'>
                    <option value={''}>Cameras</option>
                    {roverCameras[props.roverChosen as keyof ObjRoverCameras].map((obj) => {
                        return <option key={obj.abbrev} value={obj.abbrev}>{obj.name}</option>
                    })}
                </select>
            </div>
        </>
    );
}

export default SelectCamera;