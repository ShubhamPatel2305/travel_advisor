import React from "react";
import "./App.css";
import {CssBaseline, Grid} from '@material-ui/core';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <div>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List />
            </Grid>
            <Grid item xs={12} md={4}>
                <Map />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
