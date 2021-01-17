import React, {Component} from "react";
import MovieList,{noimateMovie, nominateMovie} from './MovieList';
import axios from 'axios';
import {Alert, Button, Badge, Form, FormGroup, Label, Input, FormText,   Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container, Jumbotron, JumbotronProps, Col, Row } from 'reactstrap';

import styles from './MovieList.css';


class MovieResult extends Component{
    constructor(props){
        super(props);
        this.state = {
         key: '',
         title: '',
         year: '',
         button_state: false,
         nominated_movies: [],
         movie: ''

        };
        this.nominateButton = this.nominateButton.bind(this)  
    }
    nominateButton(movie){
        
        console.log("clicked button")
        
        this.setState({button_state:true})
        var joined = this.state.nominated_movies.concat(movie);
        this.setState({ nominated_movies: joined })
        
    }
    render(){
        return(
            <div>
               
             <Col> <Alert {...this.props.key} color='danger'>{this.props.title} ({this.props.year})  <Button disabled={this.props.disabled} onClick={this.props.onClick}  color='primary'  >Nominate</Button></Alert> </Col> 
            </div>
        );
    }
}

export default MovieResult