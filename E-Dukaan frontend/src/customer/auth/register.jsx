import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/auth/Action";
import { useEffect } from "react";

export function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem('jwt');
    // console.log(jwt);
    const {auth} =  useSelector(store=>store);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
        }
        dispatch(register(userData));
        // console.log(userData);
    }
    useEffect(()=>{
        if(jwt){
            // console.log("triggered");
            dispatch(getUser(jwt));
        }
    },[jwt , auth.jwt]);


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField name="firstName" id="firstName" label="FirstName" required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="lastName" id="lastName" label="LastName" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="email" id="email" label="Email" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" id="password" type="password" label="Password" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className="w-full" variant="contained" type="submit" sx={{ bgcolor: "#9155FD" }}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div>
                <div className="flex justify-center mt-2 item-center flex-row">
                    <p>If you alreay have an account ?</p>
                    <Button onClick={()=>navigate('/login')} size="small">LOGIN</Button>
                </div>
            </div>
        </div>
    )
}