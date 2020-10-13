import React, { useState, useEffect, useContext } from 'react'
import SortList from './SortList.js'
import ListContext from './ListContext'
import Header from './Header'
import { generateList, sleep } from './helpers.js'

const InsertionSort = () => {
    const { listProperties, setList } = useContext(ListContext)
    const [isSorted, setIsSorted] = useState(false)
    const [canRandomize, setCanRandomize] = useState(true)
    // const [currentValue, setCurrentValue] = useState(listProperties.list[1])
    // const [comparedValue, setComparedValue] = useState(listProperties.list[0])

    useEffect(() => {
        if(listProperties.list.length === 0){
            setList({
                list: generateList(listProperties.size),
                size: 25,
            })
        }
    }, [])

    const insertionSort = async () => {
        listProperties.list[0].color = 'green'
        setIsSorted(true)
        setCanRandomize(false)
        setList({
            ...listProperties,
            list: [...listProperties.list],
        })
        await sleep(75)

        let length = listProperties.list.length

        for (let i = 1; i < length; i++) {
            if(window.location.href.slice(window.location.origin.length + 1) !== "visualize-sorting/insertion"){
                setList({
                    list: generateList(listProperties.size),
                    size: 25,
                })
                return
            }
            let key = listProperties.list[i].value

            // setCurrentValue(key)
            let j = i - 1

            while (j >= 0 && listProperties.list[j].value > key) {
                // setComparedValue(listProperties.list[j].value)
                listProperties.list[j + 1].value = listProperties.list[j].value

                j = j - 1
                setList({ list: [...listProperties.list], ...listProperties })
                await sleep(75)
            }
            listProperties.list[j + 1].value = key
            listProperties.list[i].color = 'green'
            setList({ list: [...listProperties.list], ...listProperties })
            await sleep(75)
        }

        setCanRandomize(true)
    }

    let style1 = {
        position: 'absolute',
        left: '7.5%',
        top: '12%',
    }

    return (
        <div className="insertion-sort">
            <Header
                sort={insertionSort}
                canRandomize={canRandomize}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
            />
            <div style={style1} className="insertion-info"></div>
            <SortList list={listProperties.list} />
        </div>
    )
}

export default InsertionSort
