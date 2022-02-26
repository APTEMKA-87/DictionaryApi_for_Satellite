import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../store';
import {loadItemsTC} from '../redux';
import {wordType} from '../api/api';

const My_input = () => {

    const [value, setValue] = useState('')

    const items = useSelector<AppRootStateType, wordType[]>(state => state.items.items)

    const dispatch = useDispatch()

    const addComment = () => {
        dispatch(loadItemsTC(value))
    };

    return (
        <div>
            <input value={value}
                   onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button onClick={addComment}>Search
            </button>
            {/*// стрингой отображаем весь приходящий массив*/}
            {/*<div>{JSON.stringify( items, null, 2 )}</div>*/ }
            <div>
                {items.map((rootEl)=> {
                    return (
                        <div>
                            {/*<div>{rootEl.word}</div>*/}
                            <div>{rootEl.phonetics.map ((el)=>{
                                return (
                                    <div>
                                        <div>{el.text}</div>
                                        {el.audio && <audio src={el.audio} controls/>}
                                    </div>
                                )
                            })}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default My_input;

