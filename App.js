import React, { useState } from 'react'
import "./App.css"
import {TextField,IconButton,Select,MenuItem,Button} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function App() { 

    const [selectUser, setSelectUser] = useState("Customer");

    return(
        <div className="app">
            <div className="mobile_app">
                <div className="mobile__header">
                    <IconButton>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <h2>Beneficiary Details</h2>
                </div>
                <form className="mobile__form">
                    <TextField variant="outlined" label="Beneficiary Name" /> <br/>
                    <TextField variant="outlined" label="Email" /> <br/>
                    <TextField variant="outlined" placeholder="+91" label="Mobile Number" /> <br/>
                    <Select variant="outlined" value={selectUser} onChange={(e) => setSelectUser(e.target.value)}>
                        <MenuItem value={"Customer"}>Customer</MenuItem>
                        <MenuItem value={"Employee"}>Employee</MenuItem>
                        <MenuItem value={"Vendor"}>Vendor</MenuItem>
                        <MenuItem value={"Self"}>Self</MenuItem>
                    </Select>
                    <br/>
                    <Button color="primary" variant="contained" className="submit__button">
                        Continue
                        <DoubleArrowIcon />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default App;
