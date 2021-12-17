import React from "react";

export const themes = {
    dark: {
        theme: "#07689f",
        subTheme: "#a2d5f2",
        component:{
            backgroundColor: "#0F1E36" ,
            color: "#2b2024",
        },
        button:{
            onHover:{
                backgroundColor: "#0F1E36",
                color:"#191919"
            },
            contained:{
                backgroundColor: "#0F1E36",
                color:"#fafafa"
            },
            outlined:{
                backgroundColor: "#0F1E36",
                color:"#191919"
            }
        },
        volume:{
            color:"#07689f"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.dark
);
