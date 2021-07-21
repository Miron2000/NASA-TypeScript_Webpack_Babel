export interface IMyObject {
    abbrev:string,
    name:string
}

export interface ObjRoverCameras {
    'spirit': IMyObject[],
    'curiosity': IMyObject[],
    'opportunity': IMyObject[]
}
