import React from "react";
import {Header} from "../Header";
import {ChatList} from "../ChatList";
import {Card, CardContent, Grid, Paper} from '@material-ui/core';
import {MessageField} from "../MessageField";

export const Chat = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper>
                        <Header/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <ChatList/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <MessageField/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
