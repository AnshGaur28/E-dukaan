import { Button, Grid, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { login } from "../../State/auth/Action";
import { useDispatch } from "react-redux";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            email : formData.get("email"),
            password : formData.get("password"),
        }
        // console.log(userData);
        dispatch(login(userData));
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField name="email" id="email" label="Email" fullWidth required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" id="password" type="password" label="Password" fullWidth required/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className="w-full" variant="contained" type="submit" sx={{bgcolor:"#9155FD"}}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div>
                <div className="flex justify-center mt-2 items-center">
                    <p>Create a new account? </p>
                    <Button size="small" className="ml-5" onClick={()=>navigate('/register')}>Register</Button>
                </div>
            </div>
        </div>
    )
}