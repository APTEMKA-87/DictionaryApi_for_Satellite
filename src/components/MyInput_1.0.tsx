import React, {useState} from 'react';

const MyInput10 = () => {

    const [comment, setComment] = useState<string[]>([])
    const [value, setValue] = useState('')

    function SendWord () {
        const comments = [...comment, value]
        setComment(comments)
        setValue('')
    }

    return (
        <div>
            <input value={value}
                   onChange={(e)=>setValue(e.currentTarget.value)}
            />
            <button onClick={SendWord}>Send</button>
            <span>{comment}</span>
        </div>
    );
};

export default MyInput10;