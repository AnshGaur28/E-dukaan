import { Grid , Avatar , Box, Rating } from "@mui/material";
export default function ReviewCard(){
    return (
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56 , height:56 , bgcolor:"violet-600"}}>A</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className="space-y-2">
                    {/* <div> */}
                        <p>Alicia Reyes</p>
                        <p>20 February 2024</p>
                    {/* </div> */}
                </div>

                <Rating value={4.4} name="half-rating" precision={0.05} readOnly/>
                <p>Overall 8/10 product ; Comfort : 9/10 , Quality: 8/10 , Washability : 7/10</p>
            </Grid>

            
        </Grid>
    )
}