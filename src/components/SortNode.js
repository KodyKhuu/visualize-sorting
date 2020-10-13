import React from 'react'

const SortNode = ({ length, color }) => {
    const style = {
        // position: 'absolute',
        // offset: 'bottom',
        width: '100%',
        height: `${6 * length}px`,
        marginTop: '65px',
        alignSelf: 'flex-end',
        backgroundColor: color,
        marginRight: '5px',
        color: 'black',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    }
    const style1 = {
        alignSelf: 'flex-end',
    }
    return (
        <div style={style}>
            <span style={style1}>{length}</span>
        </div>
    )
}

export default SortNode
