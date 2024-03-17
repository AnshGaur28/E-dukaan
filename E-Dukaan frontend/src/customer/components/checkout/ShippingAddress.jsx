/* eslint-disable react/prop-types */
export default function ShippingAddress({user}){
    return (
        <div className=" space-y-3 ">
            <div className="">
                <p className="font-semibold">{user?.firstName } { user?.lastName}</p>
                <div className="space-y-1">
                    <p>{user?.address}</p>
                    <p><span>{user?.city}, {user?.State}, {user?.postalcode} </span></p>
                    <p>{user?.phone_no}</p>
                    <p></p>
                </div>

                <p>{user?.user?.phoneNumber}</p>
            </div>
        </div>
    )
}