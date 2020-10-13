import React, { useState } from 'react'

import NavBar from './components/NavBar'
import './App.css'

import InsertionSort from './components/InsertionSort.js'
import BubbleSort from './components/BubbleSort.js'
import SelectionSort from './components/SelectionSort'
import MergeSort from './components/MergeSort'
import QuickSort from './components/QuickSort'
import ListContext from './components/ListContext'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    const [listProperties, setList] = useState({
        list: [],
        size: 25,
    })
    return (
        <div className="App">
            <Router>
                <NavBar />
                <ListContext.Provider value={{ listProperties, setList }}>
                    <Switch>
                        <Route
                            exact
                            path="/visualize-sorting/"
                            render={() => <Home />}
                        />
                        <Route
                            exact
                            path="/visualize-sorting/insertion"
                            render={() => <InsertionSort />}
                        />
                        <Route
                            exact
                            path="/visualize-sorting/bubble"
                            render={() => <BubbleSort />}
                        />
                        <Route
                            exact
                            path="/visualize-sorting/selection"
                            render={() => <SelectionSort />}
                        />
                        <Route
                            exact
                            path="/visualize-sorting/merge"
                            render={() => <MergeSort />}
                        />
                        <Route
                            exact
                            path="/visualize-sorting/quick"
                            render={() => <QuickSort />}
                        />
                    </Switch>
                </ListContext.Provider>
            </Router>
        </div>
    )
}

export default App
