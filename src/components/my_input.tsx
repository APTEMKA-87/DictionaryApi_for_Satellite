import React, {useEffect, useState} from 'react';
import {dictionaryAPI} from '../api/api';

const My_input = () => {

    const [comment, setComment] = useState<string[]>([])
    const [value, setValue] = useState('')

    function addComment() {
        let comments = [...comment, value]
        setComment(comments)
        setValue('')
    }

    useEffect(()=>{
        dictionaryAPI.getWord(comment)
    },[])

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}
                   type="text" name="name"/>
            <button onClick={addComment}>Search</button>
            <span>{comment}</span>
        </div>
    );
};

export default My_input;



