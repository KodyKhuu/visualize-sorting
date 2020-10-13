import React, { useState, useEffect, useContext } from 'react'
import SortList from './SortList.js'
import Header from './Header'
import ListContext from './ListContext'
import { generateList, sleep } from './helpers.js'

const MergeSort = () => {
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

    let previousOrder = listProperties.list

    const merge = async (left, right) => {
        let arr = []
        while (left.length && right.length) {
            if (left[0].value < right[0].value) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }

        let j = arr.concat(left.slice().concat(right.slice()))

        return j
    }

    const mergeSort = async (arr) => {
        if (arr.length < 2) {
            return arr
        }

        // if(window.location.href.slice(window.location.origin.length + 1) !== "merge"){
        //     setList({
        //         list: generateList(listProperties.size),
        //         size: 25,
        //     })
        //     return
        // }
        let mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)

        let prevIndex = listProperties.list.indexOf(left[0])

        let l = await mergeSort(left)

        let r = await mergeSort(right)

        let m = await merge(l, r)

        previousOrder.splice(prevIndex, m.length, ...m)


        setList({
            ...listProperties,
            list: [...previousOrder],
        })
        await sleep((m.length / listProperties.list.length) * 2000)

        return m
    }

    return (
        <div className="merge-sort">
            <Header
                sort={() => mergeSort(listProperties.list)}
                canRandomize={canRandomize}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
            />
            <div className="merge-info"></div>
            <SortList list={listProperties.list} />
        </div>
    )
}

export default MergeSort
