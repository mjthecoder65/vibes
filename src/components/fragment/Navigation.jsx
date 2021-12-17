import React, {useContext, useState} from "react";
import '../assets/scss/Navigation.scss';
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import {Avatar, Button} from "@material-ui/core";
import {ThemeContext} from "../../api/Theme";

function Navigation() {

    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);

    function handleOpenProfile() {
        if (isLanguageListOpen === true)
            setLangList(!isLanguageListOpen);
        setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={{...useStyle.component,border: 'none', backgroundColor: "#0F1E36"}}>
            <Brand/>
            <div className={"navigation"}>
            </div>
            <SearchBar/>
            <div className="profile" onClick={handleOpenProfile}>
                <Button className={"Dropdown-btn"}
                        startIcon={<Avatar >MJ</Avatar>}
                        endIcon={""}>
                </Button>
            </div>
        </nav>
    );
}

export default Navigation;