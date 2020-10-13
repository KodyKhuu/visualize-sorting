import React from 'react'
import SortNode from './SortNode'

const SortList = ({ list }) => {
    const renderedList = list.map((node) => (
        <SortNode length={node.value} color={node.color} />
    ))

    const style = {
        display: 'flex',
        width: '90%',
        height: '50rem',
        margin: 'auto',
        flexDirection: 'rows',
        background: '#e6e6e6',
        paddingLeft: '5px',
        marginTop: '50px',
        boxShadow: '5px 10px 18px #888888',
        borderRadius: '10px',
        paddingBottom: '5px',
    }
    // const style1 = { height: '50%' }
    return (
        <div style={style} className="list-container">
            {renderedList}
        </div>
    )
}

export default SortList
