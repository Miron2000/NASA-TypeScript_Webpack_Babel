export interface IMyObject {
    abbrev: string,
    name: string
}

export interface ObjRoverCameras {
    'spirit': IMyObject[],
    'curiosity': IMyObject[],
    'opportunity': IMyObject[]
}

interface CameraObj {
    full_name: string,
    id: number,
    name: string,
    rover_id: number
}

interface RoverObj {
    id: number,
    landing_date: string,
    launch_date: string,
    name: string,
    status: string
}

export interface PhotosArray {
    camera: CameraObj,
    earth_date: string,
    id: number,
    img_src: string,
    rover: RoverObj,
    sol: number,
}

export interface ApiApods {
    date: string;
    explanation: string;
    title: string;
    url: string;
}
