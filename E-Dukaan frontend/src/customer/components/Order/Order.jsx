/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

export default function Order() {
    const orderStatus = [{ value: "On the Way", label: "On the Way" }, { value: 'Delivered', label: "Delivered" }, { value: 'Cancelled', label: 'Cancelled' }, { value: 'Returned', label: 'Returned' }]
    return (
        <div >
            <Grid container spacing={2} sx={{ justifyContent: "space-between", padding: 5 }}>
                <Grid item xs={2.5}>
                    <div className="shadow-lg p-5 sticky top-5">
                        <h1 className="font-bold text-lg">Filter</h1>
                        <div className="space-y-5 mt-10">
                            <h1 className="font-semibold">ORDER SUMMARY</h1>
                            <div>{orderStatus.map((option) => <div className="flex items-center">
                                <input type="checkbox" defaultValue={option.value} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label className="ml-3 text-gray-600 text-sm" htmlFor={option.value}>{option.label}</label>
                            </div>
                            )}
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9} sx={{}}>
                    <div className="space-y-5">
                        {[1, 1, 1, 1].map((item) =>
                            <OrderCard />
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}