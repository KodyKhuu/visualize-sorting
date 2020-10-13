import React, { useState, useEffect, useContext } from 'react'
import SortList from './SortList.js'
import Header from './Header'
import ListContext from './ListContext'
import { generateList, sleep } from './helpers.js'

const SelectionSort = () => {
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

    const selectionSort = async () => {
        const length = listProperties.list.length
        setIsSorted(true)
        setCanRandomize(false)
        for (let i = 0; i < length - 1; i++) {
            if(window.location.href.slice(window.location.origin.length + 1) !== "visualize-sorting/selection"){
                setList({
                    list: generateList(listProperties.size),
                    size: 25,
                })
                return
            }
            let min = i

            listProperties.list[i].color = '#f2ca9d'
            setList({
                ...listProperties,
                list: [...listProperties.list],
            })
            await sleep(10)

            let j = i + 1
            for (j; j < length; j++) {
                if (j !== i + 1 && j - 1 !== min) {
                    listProperties.list[j - 1].color = 'white'
                }

                listProperties.list[j].color = 'yellow'
                setList({
                    ...listProperties,
                    list: [...listProperties.list],
                })
                await sleep(10)
                if (
                    listProperties.list[j].value <
                    listProperties.list[min].value
                ) {
                    if (min !== i) {
                        listProperties.list[min].color = 'white'
                    }

                    min = j
                    listProperties.list[min].color = '#f2b066'
                    setList({
                        ...listProperties,
                        list: [...listProperties.list],
                    })
                    await sleep(10)
                }
            }
            listProperties.list[j - 1].color = 'white'
            setList({
                ...listProperties,
                list: [...listProperties.list],
            })
            await sleep(10)

            if (min !== i) {
                let temp = listProperties.list[min].value
                listProperties.list[min].value = listProperties.list[i].value
                listProperties.list[i].value = temp
                listProperties.list[min].color = 'pink'
                listProperties.list[i].color = 'pink'
                setList({
                    ...listProperties,
                    list: [...listProperties.list],
                })
                await sleep(10)
            }
            listProperties.list[min].color = 'white'
            listProperties.list[i].color = '#9df2c6'
            setList({
                ...listProperties,
                list: [...listProperties.list],
            })
            await sleep(10)
        }
        listProperties.list[length - 1].color = '#9df2c6'
        setList({
            ...listProperties,
            list: [...listProperties.list],
        })
        await sleep(10)

        setCanRandomize(true)
    }

    return (
        <div className="selection-sort">
            <Header
                sort={selectionSort}
                canRandomize={canRandomize}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
            />

            <div className="selection-info"></div>
            <SortList list={listProperties.list} />
        </div>
    )
}

export default SelectionSort
