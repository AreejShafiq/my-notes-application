import React from 'react'

const ListItems = ({note}) => {
    console.log('test',note)
    return (
        <div>
            {note.body}
        </div>
    )
}

export default ListItems
