import React from 'react';
import My_input from './components/my_input';

/*const App = () => {

    const [words, setWord] = useState([])

    useEffect(()=>{
        dictionaryAPI.getWord().then((response)=>{
            setWord(response.data)
        })
    },[])

    return <div>

    </div>

};

const word  = (props:any) => {
    {props.word.word}
}*/

function App() {
    return (
        <My_input/>
    )
}

/*const App = () => {

    return (
       <My_input/>
    )
}*/

export default App;


