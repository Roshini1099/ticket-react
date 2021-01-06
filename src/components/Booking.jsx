import React, { Component,useState,useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
 
 function Booking(props) {
    const [open,getOpen]=useState([]);
    const [seatnumber,setSeat]=useState("")
    const [email,setEmail]=useState("")
    useEffect(()=>{
        getAllopentickets();

    },[]);

const getAllopentickets=async()=>{
    console.log("openticket");
    const response=await axios.get("http://localhost:3000/ticket/status/open");
    console.log(response);
    getOpen(response.data);
    console.log(open);
};
const { register, errors, handleSubmit,reset,getValues,onChange,onClick} = useForm();
const onChangeSeat=(e)=>{
    setSeat(e.target.value);
}
const onChangeEmail=(e)=>{
    setEmail(e.target.value);
}

function findByKey(key,value) {
    return(item,i)=> item[key]===value
}
const handleDelete=(seatnumber)=>{
        let index=open.findIndex(i=>i.seatnumber==seatnumber)
        console.log(index);
        const array=[...open]
        delete array[index];
         console.log(array);
         getOpen(array);
 }
        
const onSubmit=async(e)=> {
        const bookingdata={
            seatnumber,
            email
        };
        console.log(bookingdata);
        await axios.post("http://localhost:3000/ticket/addTicket",bookingdata,
         {
          headers: {
            "Content-Type": "application/json",
          },
        })
            .then((res)=>{
                console.log(seatnumber);
                setSeat(seatnumber);
                setEmail(email);
                handleDelete(seatnumber)
                //props.history.push("/");
             })
            .catch((error)=>{
                 console.log(error);
            });

        alert('SUCCESS!! :-) Ticket Successfully Booked!!!\n\n' + JSON.stringify(e, null, 4));
    }
const home=async(e)=>{
    props.history.push("/");
}

return(
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className="card m-3">
                <h5 className="card-header">Book Your tickets now!!!</h5>
                <div className="card-body border-bottom">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Choose Your Seat Number!!!!</label>
                            <select name="seatnumber"ref={register} onChange={onChangeSeat} className={`form-control ${errors.numberOfTickets ? 'is-invalid' : ''}`}>
                                {open.map(i => 
                                    <option key={i.seatnumber} value={i.seatnumber}>{i.seatnumber}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">
                            <h5 className="card-title">Passenger Details</h5>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label>Name :</label>
                                    <input name="Name" type="text" ref={register}   />
                                </div>
                                <div className="form-group col-6">
                                    <label>Email :</label>
                                    <input name="email" type="text" ref={register} onChange={onChangeEmail}/>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <div className="card-footer text-center border-top-0">
                    <button type="submit" className="btn btn-primary mr-1">
                        Booknow
                    </button>
                    <button className="btn btn-secondary mr-1" type="reset">Reset</button>
                </div>
            </div>
            <div className ="card-footer text-center border-top-0">
                <button type="submit" className="btn btn-primary mr-1" onClick={home}>
                        Return to HomePage
                    </button>
                
            </div>
        </form>
);

}
export default Booking;


