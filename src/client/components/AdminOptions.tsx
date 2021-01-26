import React, { useEffect, useState } from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom';
import $ from 'jquery';

const url = 'http://localhost:3000/api/chirps';
const contentType = 'application/json; charset=UTF-8';

const AdminOptions: React.FC<RouteComponentProps> = ({ history }) => {

    const { id } = useParams<{ id: string }>();
    const [chirp, setChirp] = useState({name: null, text: null});

    useEffect(() => {
        (async () => {
            let currentChirp = await $.get(`${url}/${id}`);
            setChirp(currentChirp);
        })();
    }, [id]);

    const handleEdit = async () => {
        let newName = $('#nameEdit').val();
        let newText = $('#textEdit').val();
        await $.ajax({
            type: 'PUT',
            url: `${url}/${id}`,
            contentType,
            data: JSON.stringify({
                "name": newName,
                "text": newText
            })
        })
        history.goBack();
    }

    const handleDelete = async () => {
        await $.ajax({
            type: 'DELETE',
            url: `${url}/${id}`,
        })
        history.goBack();
    }

    return (
        <div className="card border border-success shadow rounded m-4">
            <div className="card-body">
                <input type="text" name="nameEdit" defaultValue={chirp.name} id="nameEdit" className="form-control m-3"/>
                <input type="text" name="textEdit" defaultValue={chirp.text} id="textEdit" className="form-control m-3"/>
            </div>
            <div className="card-footer">
                <button onClick={handleEdit} className="btn btn-success mx-3">Submit Edit</button>
                <button onClick={handleDelete} className="btn btn-danger mx-3">Delete Chirp</button>
            </div>
        </div>
    )
}

export default AdminOptions;