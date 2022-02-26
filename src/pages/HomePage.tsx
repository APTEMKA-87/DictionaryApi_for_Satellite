import React, {useState} from 'react';
import {loadItemsTC} from '../redux';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const addComment = async () => {
        const res = await dispatch(loadItemsTC(value))
        //@ts-ignore    если в резалте что то пришло то переходим на урл резалт
        if (res) {
            navigate('/result', {
                state: {
                    data: value
                }
            })
        }
    };

    return (
        <>
            <input value={value}
                   onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button onClick={addComment}>Search test
            </button>
        </>
    );
};

export default HomePage;