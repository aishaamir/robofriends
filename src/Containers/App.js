import React, { Component } from 'react';
import CardList from '../Components/CardList';
import './App.css'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()
            )
            .then(users => this.setState({ robots: users })
            )

    }


    onSearchChange = (e) => {
        this.setState({ SearchField: e.target.value })
    }


    render() {
        const { robots, SearchField } = this.state
        const FilteredRobots = robots.filter(robots => { return robots.name.toLowerCase().includes(SearchField.toLowerCase()) })

        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        else {
            return (

                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <ErrorBoundary>
                    <CardList robots={FilteredRobots} />
                    </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App