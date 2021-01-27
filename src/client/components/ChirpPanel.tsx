import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const ChirpPanel = () => {

    const [chirps, setChirps] = useState([]);
    const [chirpsDisplay, setChirpsDisplay] = useState([]);

    const chirpsHandle = () => {
        let chirpArray = chirps.map(chirp => {
            return(
                <div className="card border border-success shadow rounded m-4" key={chirp.id} id={chirp.id}>
                    <div className="card-body">
                        <h2 className="card-title">@{chirp.name}</h2>
                        <p className="card-text">{chirp.text}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/${chirp.id}/admin`} className="btn btn-warning">Admin Options</Link>
                    </div>
                </div>
            )
        });
        setChirpsDisplay(chirpArray);
    }

    useEffect(() => {
		(async () => {
			try {
                let chirps = await $.get('/api/chirps');
                console.log(chirps);
				setChirps(chirps);
			} catch (error) {
				console.log(error);
			}
		})();
    }, []);
    
    useEffect(() => chirpsHandle(), [chirps]);

    return(
        <div className="container col-10 m-4">
            {chirpsDisplay}
        </div>
    )
}

interface ChirpPanelProps {
    chirps: [string, {name: string, text: string}][];
}

export default ChirpPanel