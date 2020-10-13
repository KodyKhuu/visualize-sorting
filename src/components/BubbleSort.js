import React, { useState, useEffect, useContext } from 'react'
import SortList from './SortList.js'
import Header from './Header'
import { generateList, sleep } from './helpers.js'
import ListContext from './ListContext'

const BubbleSort = () => {
    const { listProperties, setList } = useContext(ListContext)
    const [isSorted, setIsSorted] = useState(false)
    const [canRandomize, setCanRandomize] = useState(true)

    useEffect(() => {
        if(listProperties.list.length === 0){
            setList({
                list: generateList(listProperties.size),
                size: 25,
            })
        }

    }, [])

    const bubbleSort = async () => {
        setIsSorted(true)
        setCanRandomize(false)
        const length = listProperties.list.length
        for (let i = 1; i < length; i++) {
            if(window.location.href.slice(window.location.origin.length + 1) !== "visualize-sorting/bubble"){
                setList({
                    list: generateList(listProperties.size),
                    size: 25,
                })
                return
            }
            for (let j = 0; j < length - 1; j++) {
                if (
                    listProperties.list[j].value >
                    listProperties.list[j + 1].value
                ) {
                    let temp = listProperties.list[j].value
                    listProperties.list[j].value =
                        listProperties.list[j + 1].value
                    listProperties.list[j + 1].value = temp

                    listProperties.list[j].color = 'pink'
                    listProperties.list[j + 1].color = 'pink'
                    setList({
                        ...listProperties,
                        list: [...listProperties.list],
                    })
                    await sleep(50)

                    listProperties.list[j].color = 'white'
                    listProperties.list[j + 1].color = 'white'
                    setList({
                        ...listProperties,
                        list: [...listProperties.list],
                    })
                }
            }
            listProperties.list[length - i].color = 'green'
            setList({ ...listProperties, list: [...listProperties.list] })
            await sleep(50)
        }
        listProperties.list[0].color = 'green'
        setList({
            ...listProperties,
            list: [...listProperties.list],
        })
        setCanRandomize(true)
    }

    return (
        <div className="bubble-sort">
            <Header
                sort={bubbleSort}
                canRandomize={canRandomize}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
            />
            <div className="bubble-info"></div>
            <SortList list={listProperties.list} />
        </div>
    )
}

export default BubbleSort
