import React, { useState } from 'react'
import { generateList } from './helpers'
import SortList from './SortList'
import Header from './Header'

const QuickSort = () => {
    const [list, setList] = useState(generateList(25))
    const [listSize, setListSize] = useState(25)
    const [isSorted, setIsSorted] = useState(false)
    const [canRandomize, setCanRandomize] = useState(true)

    const partition = async (arr, low, high) => {
        let pivot = arr[low]
        let l = low
        let r = high

        while (l < r) {
            do {
                l++
            } while (arr[l] <= pivot)
            do {
                r--
            } while (arr[r] > pivot)

            if (l < r) {
                let temp = arr[l]
                arr[l] = arr[r]
                arr[r] = temp
            }
        }
        let temp = arr[low]
        arr[low] = arr[r]
        arr[r] = temp

        return r
    }

    const quickSort = async (arr, l, h) => {
        if (l < h) {
            let r = await partition(arr, l, h)
            console.log(r)
            await quickSort(arr, l, r - 1)
            await quickSort(arr, r + 1, h)
        }

        setList([...arr])
    }

    const randomize = () => {
        setList(generateList(listSize))
        setIsSorted(false)
    }

    return (
        <div>
            <Header
                sort={() => quickSort(list, 0, list.length - 1)}
                canRandomize={canRandomize}
                isSorted={isSorted}
                randomize={randomize}
                setListSize={setListSize}
            />
            <SortList list={list} />
        </div>
    )
}

export default QuickSort
