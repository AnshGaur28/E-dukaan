import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
export default function OrderCard() {
    return (
        <div className="p-5 shadow-md shadow-gray-300 hover:shadow-2xl ">
        <Grid container spacing={2} sx={{ justifyContent: "space-between", borderColor: "gray" }}>
            <Grid item xs={6}>
                <div className="flex cursor-pointer ">
                    <img src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70" className="h-[7rem] w-[6rem] object-cover object-top"/>
                    <div className="space-y-2 ml-5">
                        <p className="text-md font-semibold">Men slim mid rise black jeans</p>
                        <p>Size : M </p>
                        <p className="text-sm  text-gray-500">Color : Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item><p className="text-md font-semibold">$19.99</p></Grid>
            <Grid item>
            <span className="flex justify-center items-center "> 
            <AdjustIcon sx={{bgcolor:"white" , color:"green" , mr:"2px" , width:"15px" , height:"15px"}} />
            {
                true && <p className="text-gray-900 font-semibold text-md"> Delivered on 5 January , Friday</p>
            }
            {
                false && <p className="text-gray-900 font-semibold text-md">Expected Delivery on 5 December , Thursday</p>
            }
            </span>
            <p className="text-gray-500 font-light text-sm">Your Item has been delivered</p>
            </Grid>
        </Grid>
        </div>
    )
}