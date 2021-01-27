import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3000/api/mentions';
const contentType = 'application/json; charset=UTF-8';

const ChirpPanel = () => {

    const [chirps, setChirps] = useState([]);
    const [chirpsDisplay, setChirpsDisplay] = useState([]);

    const chirpsHandle = () => {
        chirps.forEach(chirp => { //this function to test for and send to the database any user mentions
            const pattern: RegExp = /\B@[a-z0-9_-]+/gi;
            let mention: [] = chirp.text.match(pattern);
            if(mention) {
                mention.forEach(async(userRaw: string) => {
                    let user: string = userRaw.replace('@', '');
                    await $.ajax({
                        type: 'POST',
                        url,
                        contentType,
                        data: JSON.stringify({
                            "chirpid": chirp.id,
                            "user": user
                        })
                    })
                })
            }
        })
        let chirpArray = chirps.map(chirp => { //creates array to display cards
            return(
                <div className="card border border-success shadow rounded m-4" key={chirp.id} id={chirp.id}>
                    <div className="card-body">
                        <h2 onClick={() => seeMentions(chirp.name)} className="card-title">@{chirp.name}</h2>
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

    const seeMentions = async (name: string) => { //click handler for seeing user mentions
        let res = await $.get(`/api/mentions/${name}`);
        res.forEach(mention => {
            alert(`${mention.name}
                ${mention.text}`); //terrible UX but thrown in to get functionality going before I have to go to bed... may change to something nice like a modal later
        })
    }

    useEffect(() => {
		(async () => {
			try {
                let chirps = await $.get('/api/chirps');
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

export default ChirpPanel