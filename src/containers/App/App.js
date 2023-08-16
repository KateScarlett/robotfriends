import React, {Component} from 'react';
import './App.css';
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../wrappers/Scroll/Scroll";
import ErrorBoundry from "../../wrappers/ErrorBoundry/ErrorBoundry";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        const {robots, searchTerm} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchTerm);
        });
        return !robots.length
            ? <h1>Loading...</h1>
            : (
                <div className="App tc">
                    <h1>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;
