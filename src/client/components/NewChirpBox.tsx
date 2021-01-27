import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import $ from 'jquery';

const url = 'http://localhost:3000/api/chirps';
const contentType = 'application/json; charset=UTF-8';

const NewChirpBox: React.FC<RouteComponentProps> = ({ history }) => {

    const [username, setUserName] = useState('');
    const [chirp, setChirp] = useState('');

    const submitChirp = () => {
        $.ajax({
            type: 'POST',
            url,
            contentType,
            data: JSON.stringify({
                "name": username,
                "text": chirp,
                "location": "defaultLocation"
            })
        })
        setUserName('');
        setChirp('');
        history.goBack();
    }

        return (
            <div className="border rounded shadow col-10 pr-5 pt-3" id="newChirpBox">
                <h1 className="ml-3">Share your Chirp with the World!</h1>
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setUserName(e.currentTarget.value)} type="text" name="username" id="usernameInput" placeholder="Enter username here" className="form-control m-3"/>
                <input onChange={(e: React.FormEvent<HTMLInputElement>) => setChirp(e.currentTarget.value)} type="text" name="chirpText" id="chirpInput" placeholder="Type your Chirp here!" className="form-control m-3"/>
                <button onClick={submitChirp} className="btn btn-primary m-3">Submit Chirp</button>
            </div>
        )
}

export default NewChirpBox;