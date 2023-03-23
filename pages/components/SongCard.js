import React from 'react'


function SongCard(props) {

    let name = props.name;
    let lyricLink = props.lyricLink;
    let youtubeLink = props.youtubeLink;

    return (
        <div className='p-4 m-1 shadow songCard'>
            <h2 className='text-2xl text-slate-100'>{name}</h2>
            <div className='flex'>
                <div className='p-1 px-5 mr-3 mt-3 flex rounded songLink text-yellow-300'>
                    <a href={lyricLink}>Lyrics</a>
                </div>
                <div className='p-1 px-5 mr-3 mt-3 flex rounded songLink text-red-400'>
                    <a href={youtubeLink}>Youtube</a>
                </div>
            </div>
        </div>
    )
}

export default SongCard