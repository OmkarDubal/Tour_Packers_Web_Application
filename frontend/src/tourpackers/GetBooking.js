import React from "react";
import Logout from "./Logout";

export default class GetBooking extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            booking: []
        }
    }

    componentDidMount = () =>{
        fetch("http://localhost:8080/b_all")
        .then(resp => resp.json())
        .then(data => this.setState({booking: data}))               
    }
    render(){
        return (
            <div>
                <Logout/>
            <div className="App">

                <h2> Booking List </h2>
                <table >

            
                        <tr>
                        <th>Booking ID</th>
                        {/*<th>Customer ID</th>
                        <th>Tour ID</th>*/}
                           <th>Payment Status</th>
        
                        <th>Booking Status</th>
                        <th>Book Date</th>
                        <th>Booked Seat</th>
                        
                        </tr>
                    {
                        this.state.booking.map((obj)=>{
                                return(
                                    <tr >
                                        <td>{obj.booking_id}</td>
                                        {/*<td>{obj.cust_id}</td>
                                        <td>{obj.t_id}</td>*/}
                                        <td>{obj.payment_status}</td>
                                        <td>{obj.booking_status}</td>
                                        <td>{obj.book_date}</td>
                                        <td>{obj.booked_seats}</td>
                                       
                                        
                                    </tr>
                                )
                            })
                    }
                </table>
            </div>
            </div>
        )
    }

}