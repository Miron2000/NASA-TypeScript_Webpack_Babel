import React, {useState} from 'react';
import axios from "axios";
import SelectMarsRover from "./SelectMarsRover/SelectMarsRover";
import SelectCamera from "./SelectCamera/SelectCamera";

const MainSection: React.FunctionComponent = () => {
    const [roverChosen, setRoverChosen] = useState<string>("curiosity");
    const [cameraChosen, setCameraChosen] = useState<string>('');
    const [marsPhoto, setMarsPhoto] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [showPhoto, setShowPhoto] = useState<boolean>(false);

    const handleRoverSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRoverChosen(event.target.value);
        // console.log(roverChosen, 'roverChosen')
        // setCameraChosen('');
    }

    const handleCameraSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCameraChosen(event.target.value);
    }

    const handleSubmit = () => {
        const API_KEY = 'AAQyOYypfA9qSs5C8aRlXI8u2tEXiJCtiGTUfdKR'
        let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverChosen}/photos?sol=100&camera=${cameraChosen}&api_key=${API_KEY}`;

        axios.get(apiUrl).then((response) => {
            console.log(response.data);
            if (response.data.error) {
                setError(response.data.errors)
            } else {
                let imgMarsRover = '';

                //проверка, возвращаются ли какие-нибудь фотографии
                if (!!response.data.photos[0]) {
                    imgMarsRover = response.data.photos[0].img_src;
                } else {
                    imgMarsRover = '';
                }
                setMarsPhoto(imgMarsRover)
                setShowPhoto(true);
            }
        })
    }

    const renderImgMarsRover = () => {
        if (!marsPhoto && showPhoto) {
            return (
                <div>
                    <h2>There is no photo Mars Rover.</h2>
                    <img src={'https://www.buro247.ru/local/share/images/73445.jpg'}/>
                </div>
            )
        } else {
            return <img src={marsPhoto}/>
        }
    }

    return (
        <section className='section'>
            <div className='section__selects'>
                <div>
                    <SelectMarsRover value={roverChosen} onChangeSelect={handleRoverSelection}/>
                </div>

                <div>
                    <SelectCamera value={cameraChosen} onChangeSelect={handleCameraSelection} roverChosen={roverChosen}/>
                </div>
            </div>

            <button className='btn__section' onClick={handleSubmit}>GO!</button>

            <div>
                {renderImgMarsRover()}
            </div>
        </section>
    );
}

export default MainSection;