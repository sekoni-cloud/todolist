import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import {Thermometer, Sun, ArrowRight, Clock} from "react-bootstrap-icons"
import { Button, Image, Form, InputGroup, FormGroup, FormText, FormLabel, FormControl, FormCheck,  ModalBody,  ModalFooter,  Badge, Container, Row, Col} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./index.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            
           events: [
            {
                id: 1,
                time: "10:00",
                title: "Breakfast with Simon",
                location: "Allonze Restaurant",
                description: "Disscus web development"
            },
            {
                id: 2,
                time: "10:30",
                title: "Meeting with Corey!",
                location: "Google Meets",
                descriptipn: "Solving some leet problems"
            },
            { id: 3, time: "11:00", title: "Call with HRs" },
            {
                id: 4,
                time: "12:00",
                title: "Lunch with Salvador",
                location: "Moremi Garden Park",
                description:
                "Project evalutation, a merge sort is faster than a linear sort because a merge sort has a nlogn complexity while a linear has  n complexity"
            }
           ] 
        };
        
        this.handleClose= this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    handleChange(event){
       
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    handleClose = ()=> {
        this.setState({
            show: false
        });
    };
    handleShow = ()=>  {
        this.setState({
            show: true
        });
    };
    handleDelete = eventId => {
        const events = this.state.events.filter(e => e.id !== eventId);
        this.setState({ events });
    };
    addEvent = () => {
        var newArray = [...this.state.events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            time: this.state.time,
            title: this.state.title,
            location: this.state.location,
            description: this.state.description
        });
        this.setState({ events: newArray });
        this.setState({
            time: "",
            title: "",
            location: "",
            description: ""
        });
    };
    render() {
        return (
            <React.Fragment>
            <Container>
                <Row>
                <Col md={9} className="mb-auto">
                    <h2 className="text-uppercase my-3">Today:</h2>
                    <div id="events">
                    {this.state.events.map(event => (
                        <Event
                        key={event.id}
                        id={event.id}
                        time={event.time}
                        title={event.title}
                        location={event.location}
                        description={event.description}
                        onDelete={this.handleDelete}
                        />
                    ))}
                    </div>
                    <Row className="mb-4">
                    <Col xl="3" md="6" className="mx-auto text-center">
                        <Button type= "button" variant="info"  onClick={this.handleShow.bind(this)}>
                        Add Event
                        </Button>
                    </Col>
                    </Row>
                </Col>
                <Col md="3">
                    <h3 className="text-uppercase my-3">Schedule</h3>
                    <h6 className="my-3">
                    It is going to be busy that today. You have{" "}
                    <b>{this.state.events.length} events </b> today.
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
                    Don't forget your sunglasses. Today will dry and sunny, becoming
                    warm in the afternoon with temperatures of between 20 and 25
                    degrees.
                    </p>
                </Col>
                </Row>
            </Container>
            <Modal show= {this.state.show} 
            onHide ={this.handleClose}
            backdrop="static"
            keyboard={false}>
           <Modal.Header closeButton>
               <Modal.Title className="justify-content-center"> Add new Event</Modal.Title>
           </Modal.Header>
           <Modal.Body>Heyyyy! What are the plans for today.....And have a nice day ahead!
               <Form.Group className="mx-3 grey-text" onSubmit= {this.handleInputChange}>
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
                       value={this.state.time}
                       onChange={this.handleChange}
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
                       value ={this.state.title}
                       onChange ={this.handleChange}/> 
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
                       value = {this.state.location}
                       onChange ={this.handleChange}/> 
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
                       value = {this.state.age}
                       onChange = {this.handleChange}/> 
                       <hr style={{color: "black", borderColor: "#9b9b9b"}} />
                        </Col>
                    </Row>
                </Container>
                <hr style={{color: "black", borderColor: "grey"}}/>
               </Form.Group>
           </Modal.Body>
           <Modal.Footer>
               <Button variant ="primary"
               onClick={()=> {this.addEvent() }}> Save Changes</Button>
               <Button variant="secondary" onClick={this.handleClose}>Close</Button>
           </Modal.Footer>
           </Modal> 
            </React.Fragment>
        );
    }  
}

class Event extends Component {
    render() {
    return (
        <React.Fragment>
        <div className="media mt-1">
            <h3 className="h3-responsive font-weight-bold mr-3">
            {this.props.time}
            </h3>
            <div className="media-body mb-3 mb-lg-3">
            <Badge
                variant="danger"
                className="ml-2 float-right"
                onClick={() => this.props.onDelete(this.props.id)}
            >
                -
            </Badge>
            <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
            <hr className="hr-bold my-2" />
            {this.props.location && (
                <React.Fragment>
                <p className="font-smaller mb-0 ">
                <ArrowRight /> {this.props.location}
                </p>
                </React.Fragment>
            )}
            </div>
        </div>
        {this.props.description && (
            <p className="p-2 mb-4 bg-warning text-black">
            {this.props.description}
            </p>
        )}
        </React.Fragment>
    );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
