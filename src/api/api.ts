import axios from 'axios';

const instance = axios.create({
    withCredentials: true,  // что это и надо ли?
    baseURL: `https://api.dictionaryapi.dev/api/v2/entries/en/`,
})

export const dictionaryAPI = {
    getWord(searchWord: string[]) {
        return instance.get<ResponseType>(`${searchWord}`)
            .then(response => {
                    return response.data
                }
            )
    },
}


type phoneticsType = {
    text: string,
    audio?: string
}

type definitionsType = {
    'definition': string,
    'example': string,
    'synonyms': string[],
    'antonyms': string[]
}

type meaningsType = {
    'partOfSpeech': string,
    'definitions': definitionsType[]
}

type wordType = {
    'word': string,
    'phonetic': string,
    'phonetics': phoneticsType[],
    'origin': string,
    'meanings': meaningsType[]
}


/*[
    {
        "word": "hello",
        "phonetic": "həˈləʊ",
        "phonetics": [
            {
                "text": "həˈləʊ",
                "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
            },
            {
                "text": "hɛˈləʊ"
            }
        ],
        "origin": "early 19th century: variant of earlier hollo ; related to holla.",
        "meanings": [
            {
                "partOfSpeech": "exclamation",
                "definitions": [
                    {
                        "definition": "used as a greeting or to begin a phone conversation.",
                        "example": "hello there, Katie!",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            },
            {
                "partOfSpeech": "noun",
                "definitions": [
                    {
                        "definition": "an utterance of ‘hello’; a greeting.",
                        "example": "she was getting polite nods and hellos from people",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            },
            {
                "partOfSpeech": "verb",
                "definitions": [
                    {
                        "definition": "say or shout ‘hello’.",
                        "example": "I pressed the phone button and helloed",
                        "synonyms": [],
                        "antonyms": []
                    }
                ]
            }
        ]
    }
]*/



