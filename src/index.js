import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import {Thermometer, Sun, ArrowRight, Clock} from "react-bootstrap-icons"
import { Button, Image, Form, InputGroup, FormGroup, FormText, FormLabel, FormControl, FormCheck,  ModalBody,  ModalFooter,  Badge, Container, Row, Col} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./index.css";
const App = (props) => {
    const [events, setEvents] = useState([
        {
            id: 1,
            time: "10:00",
            title: "Breakfast with Simon",
            location: "Lounge Caffe",
            description: "Discuss Q3 targets"
        },
        {
            id: 2,
            time: "10:30",
            title: "Daily Standup Meeting (recurring)",
            location: "Warsaw Spire Office"
        },
        { id: 3, time: "11:00", title: "Call with HRs" },
        {
            id: 4,
            time: "12:00",
            title: "Lunch with Timmoty",
            location: "Canteen",
            description:
            "Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"
        }
       ]);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState('blue');
    const [time, setTime] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [formInputs, setFormInputs] = useState({});

    function handleChange(event){
        setFormInputs(Object.assign(formInputs, {
            [event.target.name] : event.target.value
        }))
    };
    const  handleClose=()=> {
        setShow(false)
    };
    const handleShow = ()=>  {
        setShow(true)
    };
    const handleDelete = (eventId) => {
        const newEvents = events.filter(e => e.id !== eventId);
        setEvents(newEvents); // same as this.setState({events}) from class components
    };
    const addEvent = () => {
        var newArray = [...events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            time: time,
            title: title,
            location: location,
            description: description
        });
        setEvents(newArray);
        setTime("")
        setTitle("")
        setLocation("")
        setDescription("")
    };

    return (
        <React.Fragment>
        <Container>
            <Row>
            <Col md={9} className="mb-auto">
                <h2 className="text-uppercase my-3">Today:</h2>
                <div id="events">
                {events.map(event => (
                    <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={handleDelete}
                    />
                ))}
                </div>
                <Row className="mb-4">
                <Col xl="3" md="6" className="mx-auto text-center">
                    <Button type= "button" variant="info"  onClick={handleShow}>
                    Add Event
                    </Button>
                </Col>
                </Row>
            </Col>
            <Col md="3">
                <h3 className="text-uppercase my-3">Schedule</h3>
                <h6 className="my-3">
                It is going to be busy that today. You have{" "}
                <b>{events.length} events </b> today.
                </h6>
                <h1 className="my-3">
                    <Row>
                    <Col xs="3" className="text-center">
                        <Sun fixed />
                    </Col>
                    <Col xs="9">Sunny</Col>
                    </Row>
                    <Row>
                    <Col xs="3" className="text-center">
                    <Thermometer fixed />
                    
                    </Col>
                    <Col xs="9">23°C</Col>
                    </Row>
                </h1>
                <p>
                Don't forget your sunglasses. Today will be dry and sunny, becoming
                warm in the afternoon with temperatures of between 20 and 25
                degrees.
                </p>
            </Col>
            </Row>
        </Container>
        <Modal show= {show} 
        onHide ={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title className="justify-content-center"> Add new Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>Whoooo, we have come all the way to here! Until we succeed we'll never stop trying
            <Form.Group className="mx-3 grey-text" onSubmit= {handleInputChange}>
                <hr style={{color: "black", borderColor: "grey"}}/>
                <Container>
                <Row>
                    <Col xs="3">
                        <Image src="tick.png" width="70" height="80" />
                    </Col>
                    <Col xs= "9" >
                    <Form.Label className="font-weight-light text-center custom-font " style={{width:"100%"}}>Time</Form.Label>
                    <Form.Control 
                    className="custom-inp" 
                    placeholder="12:00"
                    name ="time"
                    value={time}
                    onChange={handleChange}
                    />
                    <hr style={{color: "black", borderColor: "#9b9b9b"}} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <Image src= "desp.png" width="70" height="80"/>
                    </Col>
                    <Col xs="9">
                    <Form.Label className="font-weight-light text-center custom-font " style={{width:"100%"}}>Title</Form.Label>
                    <Form.Control 
                    className="custom-inp" 
                    placeholder="...Meeting with a friend?"
                    name ="title" 
                    value ={title}
                    onChange ={handleChange}/> 
                    <hr style={{color: "black", borderColor: "#9b9b9b"}} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <Image src="location.png" width="70" height="80"/>
                    </Col>
                    <Col xs="9">
                    <Form.Label className="font-weight-light text-center custom-font " style={{width:"100%"}}>Location(optional)</Form.Label>
                    <Form.Control 
                    className="custom-inp" 
                    placeholder="Los Angeles or maybe Berlin Germany?"
                    name ="location"
                    value = {location}
                    onChange ={handleChange}/> 
                    <hr style={{color: "black", borderColor: "#9b9b9b"}} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <Image src="sticky-notes.jpg" width="70" height="80"/>
                    </Col>
                    <Col xs="9">
                    <Form.Label className="font-weight-light text-center custom-font " style={{width:"100%"}}>Description(optional)</Form.Label>
                    <Form.Control 
                    className="custom-inp" 
                    placeholder="...Billion Talk....?"
                    name ="description"
                    value = {age}
                    onChange = {handleChange}/> 
                    <hr style={{color: "black", borderColor: "#9b9b9b"}} />
                    </Col>
                </Row>
            </Container>
            <hr style={{color: "black", borderColor: "grey"}}/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant ="primary"
            onClick={()=> {addEvent() }}> Save Changes</Button>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal> 
        </React.Fragment>
    );
     
}

const Events = (props) => {
    return (
        <React.Fragment>
        <div className="media mt-1">
            <h3 className="h3-responsive font-weight-bold mr-3">
            {props.time}
            </h3>
            <div className="media-body mb-3 mb-lg-3">
            <Badge
                variant="danger"
                className="ml-2 float-right"
                onClick={() => props.onDelete(props.id)}
            >
                -
            </Badge>
            <h6 className="mt-0 font-weight-bold">{props.title} </h6>{" "}
            <hr className="hr-bold my-2" />
            {props.location && (
                <React.Fragment>
                <p className="font-smaller mb-0 ">
                <ArrowRight /> {props.location}
                </p>
                </React.Fragment>
            )}
            </div>
        </div>
        {props.description && (
            <p className="p-2 mb-4 bg-warning text-black">
            {props.description}
            </p>
        )}
        </React.Fragment>
    );
    
}

ReactDOM.render(<App />, document.getElementById("root"));
