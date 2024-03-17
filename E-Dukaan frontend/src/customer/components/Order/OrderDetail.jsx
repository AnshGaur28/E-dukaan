/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/addressCard";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from "@mui/material/colors";

export default function OrderDetails() {
    return (
        <div className="px-20 py-10">
            <div className="w-full shadow-lg p-2 shadow-gray-300 mb-5">
                <p className="font-semibold text-lg py-2 my-2 ">Delivery Address </p>
                <AddressCard />
            </div>
            <Grid className="space-y-2esea" container>
                {[1,1,1].map((item)=><Grid item container className="shadow-xl rounded-md p-5 border object-cover object-top" sx={{alignItems:"center" , justifyContent:"space-between"}}>
                    <Grid item  xs={6}>
                    <div className="flex ">
                        <img src="https://rukminim1.flixcart.com/image/612/612/l2hwwi80/dress/6/q/q/l-310tk6042-selvia-original-imagdtyyqfy7ahwf.jpeg?q=70" className=" h-[6rem]" />
                        <div className="spacr-y-2 ml-5">
                            <p className="font-semibold text-gray-500">Madame Knee Length skirt</p>
                            <p className="font-light  text-sm space-x-5"><span>Color : Purple Pink</span><span>Size : M</span></p>
                            <p >Seller : Madame Inc.</p>
                            <p className="text-green-500">$23.99</p>
                        </div>
                    </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-2xl"/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
            </Grid>
        </div>
    )
}