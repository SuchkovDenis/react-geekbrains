import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    title : {
        color: "white",
        background: "#15aeca",
        textAlign: "center"
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
           Чат
        </Typography>
    );
}
