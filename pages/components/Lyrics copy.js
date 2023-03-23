import React, { useEffect, useState } from 'react'

const Lyrics = () => {
    const [lyrics, setLyrics] = useState([]);
    // 98908a8f2fd0dde97d852eacdf9cd91b
    // matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao
    const fetchData = () => {

    }

    async function searchTracks() {
        const query = 'q_track=sexy%20and%20i%20know%20it&q_artist=lmfao';
        const apiKey = '98908a8f2fd0dde97d852eacdf9cd91b'; // Replace with your own API key
        // const apiUrl = `https://api.musixmatch.com/ws/1.1/track.search?q=${query}&apikey=${apiKey}`;
        const apiUrl = `https://api.musixmatch.com/ws/1.1/track.search?q=q_track=sexy%20and%20i%20know%20it&q_artist=lmfao&apikey=98908a8f2fd0dde97d852eacdf9cd91b`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.message.body.track_list)
        setLyrics(data.message.body.track_list)
        return data.message.body.track_list;
    }

    return (
        <div>
            <div>{searchTracks()}</div>
            <div>{lyrics}</div>
        </div>
    )
}

export default Lyrics;
