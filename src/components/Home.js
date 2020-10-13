import React, { useEffect, useContext } from 'react'
import SortList from './SortList.js'
import ListContext from './ListContext'
import { generateList } from './helpers.js'

const Home = () => {
    const { listProperties, setList } = useContext(ListContext)

    useEffect(() => {
        if(listProperties.list.length === 0){
            setList({
                list: generateList(listProperties.size),
                size: 25,
            })
        }
    }, [])

    return (

        <div>
            <h2>
                Let's explore how to sort this array of integers. Choose one of the Sorting Algorithms above!
            </h2>
            <SortList list={listProperties.list} />
        </div>
        
    )
}

export default Home



