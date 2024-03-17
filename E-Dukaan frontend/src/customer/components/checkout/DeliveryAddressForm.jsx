import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/addressCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../State/auth/Action";
import { createOrder } from "../../../State/Order/Action";

export default function DeliveryAddressForm(){
    const {auth} = useSelector(store=>store);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser(localStorage.getItem('jwt')));
        // console.log(auth.user);
    },[])

    const handleSubmit = async (e)=>{
        e.preventDefault() ;
        const data = new FormData(e.currentTarget);
        const address = {
            firstname : data.get("firstName") ,
            lastname : data.get("lastName") ,
            city : data.get("city") ,
            state : data.get("state") ,
            postalcode : data.get("postalcode") ,
            address : data.get("address") ,
            phone_no : data.get("phone number"),
        }
        dispatch(createOrder({address , navigate}))
    }
    return (
            <Grid container spacing={4} >
                <Grid item className="shadow-md border rounded-e-md h-[30.5rem] overflow-y-scroll " xs={12} lg={5} >
                    <div className="cursor-pointer p-5 py-7 border-b">
                        <AddressCard user = {auth?.user}/>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7} paddingBottom={5}>
                    <Box className='border rounded-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} >
                                    <TextField required id="firstName" name="firstName" label="FirstName" fullWidth autoComplete="given-name"/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField required id="lastName" name="lastName" label="LastName" fullWidth autoComplete="given-name"/>
                                </Grid>
                                <Grid item paddingTop={5} xs={12}>
                                    <TextField required id="address" name="address" label="Address" multiline rows={4}   fullWidth autoComplete="given-name"/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField required id="city" name="city" label="City" fullWidth autoComplete="given-name"/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField required id="state" name="state" label="State/Province/Region" fullWidth autoComplete="given-name"/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField   type="number" required id="postalcode" name="postalcode" label="Postal code" fullWidth autoComplete="shipping postal-code"/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField type="number" required id="phone number" name="phone number" label="Phone Number" fullWidth autoComplete="given-name"/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button  sx={{ml: 3  , mt : 2}} type="submit" size="large" variant="contained">Deliver Here</Button>
                                </Grid>
                            </Grid>
                            
                        </form>
                    </Box>
                </Grid>
            </Grid>
    )
}