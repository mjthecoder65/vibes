import React, {useEffect, useState} from 'react';
import '../assets/scss/CurrentPlayingLarge.scss';
import {useSelector} from "react-redux";

const firstSong =  {
    id: 0,
    name: "Status Symbol",
    author_name: "Nipsey Hussle ft Buddy",
    img: "nipsey.jpg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "Hip Hop",
    musicName: "status_symbol.mp3",
    attribution: {
        song: "Clarx - Shakedown [NCS Release]",
        musicBy: "NoCopyrightSounds",
        download: "http://ncs.io/Shakedown",
        stream: "http://youtu.be/qJT0mc3q6Lg"
    }
}
function CurrentPlayingLarge() {

    let {playing} = useSelector(state => state.musicReducer);
    if (!playing) playing = firstSong;
    const [{img,name,author_name},setCurrPlaying] = useState(playing);
    useEffect(()=>{
        setCurrPlaying(playing);
    },[playing]);

    return (
        <div  className={"CurrentPlayingLarge"}>
            <img className={"banner"} src={require("../assets/img/"+img).default} alt=""/>
            <div className="music-left">
                <div className="wrapper">
                    <img className={"music-cover"} src={require("../assets/img/"+img).default} alt=""/>
                    <div className="detail">
                        <h3>{name}</h3>
                        <p>{author_name}</p>
                    </div>
                </div>
            </div>
            {/*
            <div className="music-right">

                <div className={"music-card-span"}>
                    {
                        playlists
                            .filter(i=>i.id !== id)
                            .map(i=>(
                                <MusicCardSpan key={i.id} music={i} />
                            ))
                    }
                </div>
            </div>
*/}
        </div>
    );
}

export default CurrentPlayingLarge;
