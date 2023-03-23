import React from 'react'
import SongCard from './SongCard'

function Lyrics(props) {

    let songs = props.songList

    return (
        <div className='w-screen p-2 flex flex-col'>
            <div className='p-4 mb-3'>
                <h2 className='text-3xl text-slate-900'>Song List</h2>
                <p className='text-slate-700'>Below you'll find a list of songs with links to the lyrics and other info!</p>
            </div>

            {songs.map((item) => (
                <div key={item.name}>
                    <SongCard name={item.name} lyricLink={item.lyricLink} youtubeLink={item.youtubeLink} />
                </div>
            ))}
        </div>
    )
}

export default Lyrics