import React, { useContext } from 'react'
import ListContext from './ListContext'
import { generateList } from './helpers'
const Header = ({ sort, isSorted, canRandomize, setIsSorted }) => {
    const { listProperties, setList } = useContext(ListContext)
    return (
        <form>
            <button
                type="button"
                disabled={isSorted ? true : false}
                onClick={sort}
                style={{marginRight: '20px'}}>
                {' '}
                Sort!{' '}
            </button>
            <label for="size">Size</label>
            <input
                name="size"
                type="range"
                max="50"
                min="5"
                // value="5"
                step="1"
                onChange={(e) =>
                    setList({ ...listProperties, size: e.target.value })
                }
            />
            <button
                type="button"
                disabled={canRandomize ? false : true}
                onClick={() => {

                
                    setList({
                        list: generateList(listProperties.size),
                        size: listProperties.size,
                    })

                    setIsSorted(false)

                }
                    
                }>
                Randomize {listProperties.size}-sized list{' '}
            </button>
        </form>
    )
}

export default Header
