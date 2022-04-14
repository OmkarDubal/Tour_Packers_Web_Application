import React from "react";
import Logout from "./Logout";

export default class GetPackages extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            tours: []
        }
    }

    componentDidMount = () =>{
        fetch("http://localhost:8080/t_all")
        .then(resp => resp.json())
        .then(data => this.setState({tours: data}))               
    }
    render(){
        return (
            <div>
                <Logout/>
            <div className="App">

                <h2> Tours List </h2>
                <table >

            
                        <tr>
                        <th>Tour id</th>
                        <th>Tour Name</th>
                        <th>Description</th>
                        <th>Distance</th>
                        <th>Days</th>
                        <th>Total Seats</th>
                        <th>Price</th>
                        <th>Date</th>
                        </tr>
                    {
                        this.state.tours.map((obj)=>{
                                return(
                                    <tr >
                                        <td>{obj.t_id}</td>
                                        <td>{obj.t_name}</td>
                                        <td>{obj.description}</td>
                                        <td>{obj.distance}</td>
                                        <td>{obj.days}</td>
                                        <td>{obj.total_seats}</td>
                                        <td>{obj.price}</td>
                                        <td>{obj.t_date}</td>
                                        
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