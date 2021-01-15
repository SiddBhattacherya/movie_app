import React, {Component} from "react";
import axios from 'axios';
import SearchField from 'react-search-field';
import {Alert, Button, Badge, Form, FormGroup, Label, Input, FormText,   Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container, Jumbotron, JumbotronProps, Col, Row } from 'reactstrap';
import MovieResult from "./MovieResult";
import styles from './MovieList.css';

let movies = {}
   
class MovieList extends Component{
    constructor(props){
        super(props);
        this.state = {
            nominatedMovies: [],
            movies: [], 
            title: '',
            button_state: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nominateMovie = this.nominateMovie.bind(this)
    }
   
    async componentDidMount(){
     
    }

    async getMovies(title){
        let res = await axios.get(`http://www.omdbapi.com/?S=${title}&apikey=79dfb4ab`)
        let list = res.data.Search;
        this.setState({movies:list})
    }

    nominateMovie(movie){
        console.log(movie)
        var joined = this.state.nominatedMovies.concat(movie);
        this.setState({ nominatedMovies: joined })
        //localStorage.setItem("nominated movie", movie)
    }

    removeNomination(movie){
        console.log(movie)
        var removed = this.state.nominatedMovies.filter(el => el !== movie)
        this.setState({nominatedMovies: removed})
    }

     handleChange(event){
        this.setState({[event.target.name]: event.target.value})
        console.log("change")
    }
    handleSubmit(event){
        event.preventDefault();
        this.getMovies(this.state.title)
        console.log("submit")
    }
    render(){
        return(
            <div>
                 <Jumbotron>
                        <h1 className="display-3">Movie Buddy</h1>
                        {
                            this.state.nominatedMovies.length >= 5 && (
                               <h1> <Badge color='success'>Congrats! You have nominated 5 movies!</Badge></h1>
                            )

                            
                        }
                        <p className="lead">Search for movies and nominate them!</p>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type="text" name="title" onChange={this.handleChange} value={this.state.title}></Input>
                            </FormGroup>
                            <Button color="primary" type='submit'>Search</Button>
                        </Form>
                        
                        
                    
                </Jumbotron>
                <Container className="float-left">
                <Row xs="2"> 
                
                    <Col>
                    <Jumbotron color="primary" fluid>
                    <h3 className='searchText'>Search Results</h3>
                        <div>
                                    {this.state.movies.map(m =>(
                                        <Row xs="2">
                                          <Col className='movieListing'> <Alert key={m.Title} color='danger'>{m.Title} ({m.Year})  <Button disabled={this.state.button_state} color='primary' id={m} onClick={() => this.nominateMovie(m)}>Nominate</Button></Alert> </Col>
                                        </Row>
                                    ))}
                        </div>

                </Jumbotron>
                    </Col>

                    <Col>
                    <Jumbotron color="primary" fluid>
                    <h3 className='nominationText'>Nominated Movies</h3>
                        <div>
                                    {this.state.nominatedMovies.map(m =>(
                                        <Row xs="2">
                                          <Col className='nomination'> <Alert key={m} color='danger'>{m.Title} ({m.Year}) <Button id={m} onClick={()=>this.removeNomination(m)} >Remove</Button></Alert> </Col>
                                        </Row>
                                    ))}
                        </div>

                </Jumbotron>
                    </Col>
                </Row>
                </Container>
                
               
            </div>
        )
    }
}

export default MovieList;