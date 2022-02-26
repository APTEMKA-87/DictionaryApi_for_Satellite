import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../store';
import {wordType} from '../api/api';
import {v1} from 'uuid';

const ResultPage = () => {

    const items = useSelector<AppRootStateType, wordType[]>(state => state.items.items)

    console.log(items)

    const uniqueItems = Array.from(new Set(items.map(a => a.id))) // отрезаю дубликаты
        .map(id => {
            return items.find(a => a.id === id)
        })

    console.log(uniqueItems)

    return (
        <div>
            <div>
                {uniqueItems && uniqueItems.map((rootEl) => {    // как андефайн красиво переписать
                    return (
                        <>
                            <h1 key={v1()}>
                                {rootEl && rootEl.word}
                            </h1>
                            <h3>
                                {rootEl && rootEl.phonetics.map((p, i) => {
                                    return <div key={i}>
                                        <h3>{p.text}</h3>
                                        {p.audio && <audio src={p.audio} controls/>}
                                        <div>
                                            <span>Some information: <a
                                                href={p.sourceUrl}>commons.wikimedia.org</a> </span>
                                        </div>
                                    </div>
                                })}
                            </h3>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default ResultPage;