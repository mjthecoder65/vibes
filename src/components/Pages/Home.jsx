import React, {useContext, useEffect, useState} from "react";
import './css/Home.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import {useSelector} from "react-redux";
import {ThemeContext} from "../../api/Theme";
import Profile from "./Profile";
import AddMusic from "../fragment/AddMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import Search from "./Search";
// import About from "./About";
import Playlist from "../fragment/Playlist";
import {Skeleton} from "@material-ui/lab";

const firstSong =   {
    id: 0,
    name: "Love Someone",
    author_name: "Lukas Graham",
    img: "lovesomeone.jpeg",
    lang: "ENGLISH",
    timesPlayed: 0,
    type: "Hip Hop",
    musicName: "lovesome.mp3",
    attribution: {
        song: "Love Someone",
        musicBy: null,
        download:null,
        stream: null
    }
}
function getCurrPage(pathName) {
    switch (pathName) {
        case "/":
            return <MusicCardContainer/>
        case "/home":
            return <MusicCardContainer/>
        case "/home/search":
            return <Search/>
        case "/home/profile":
            return <Profile/>
        case "/home/add":
            return <AddMusic/>
        // case "/home/about":
        //     return <About/>
        default:
            if (pathName.startsWith("/home/playlist/")) {
                return <Playlist/>
            }
            return null
    }
}

function Home() {


    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(firstSong);
    const [Page, setCurrPage] = useState(<MusicCardContainer/>);
    let pathname = window.location.pathname;
    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const useStyle = useContext(ThemeContext);
    const {playing, bannerOpen} = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);


    return (
        <div style={useStyle.component} className="home-container">
            {
                !loaded ?
                    <div className="Home-skeleton">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"}/>
                    </div>
                    :
                    <>
                        {
                            screenSize <= 970 ?
                                <MobileTopNavigation/> :
                                <Navigation/>
                        }
                        <section className={"home-music-container"}>
                            <div className="sidebar-home">
                                <SideBar/>
                            </div>
                            <div className="main-home">
                                {
                                    Page
                                }
                            </div>
                        </section>
                        {
                            bannerOpen
                            &&
                            <section className="current-large-banner">
                                <CurrentPlayingLarge/>
                            </section>
                        }
                        <React.Fragment>
                            {
                                currMusic
                                    ?
                                    <FooterMusicPlayer music={currMusic}/>
                                    : <FooterMusicPlayer music={firstSong}/>
                            }
                            {
                                screenSize <= 970 && <BottomNavigationMobile/>
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default Home;