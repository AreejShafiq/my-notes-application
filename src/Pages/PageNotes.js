import React from 'react';
import ListItems from '../Components/ListItems';
import notes from '../assests/data';

const PageNotes = () => {
    return (
        <div>
            {notes.map(note => 
                <ListItems note={note} />
            
             ) }
        </div>
    )
}

export default PageNotes
