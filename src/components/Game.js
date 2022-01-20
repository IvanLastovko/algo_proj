import './Game.scss'
import {useEffect, useState} from "react";

export const Game = () => {

    const words = {
        '1': {
            "words": ['abcd', 'abcde', 'bcde'],
            "matches": [true, true, true],
            "explanations": [
                "Regular expressions are extremely useful in extracting information from text such as code, log files, spreadsheets, or even documents. And while there is a lot of theory behind formal languages, the following lessons and examples will explore the more practical uses of regular expressions.",
                "The first thing to recognize when using regular expressions is that everything is essentially a character, and we are writing patterns to match a specific sequence of characters (also known as a string). Most patterns use normal ASCII, which includes letters, digits, punctuation and other symbols on your keyboard like %#$@!, but unicode characters can also be used to match any type of international text.",
            ]
        },
        '2': {
            "words": ['abc123xyz', '"123"', 'const num = 123;', '456'],
            "matches": [true, true, true, true],
            "explanations": ["Characters include normal letters, but digits as well. In fact, numbers 0-9 are also just characters and if you look at an ASCII table, they are listed sequentially",
            "Over the various lessons, you will be introduced to a number of special metacharacters used in regular expressions that can be used to match a specific type of character. In this case, the character \\d can be used in place of any digit from 0 to 9. The preceding slash distinguishes it from the simple d character and indicates that it is a metacharacter. \\D represents any non-digit character."]
        },
        '3': {
            "words": ['cat.', '896.', '?=+.', 'abc1'],
            "matches": [true, true, true, false],
            "explanations": ["In some card games, the Joker is a wildcard and can represent any card in the deck. With regular expressions, you are often matching pieces of text that you don't know the exact contents of, other than the fact that they share a common pattern or structure (eg. phone numbers or zip codes).",
            "Similarly, there is the concept of a wildcard, which is represented by the . (dot) metacharacter, and can match any single character (letter, digit, whitespace, everything). You may notice that this actually overrides the matching of the period character, so in order to specifically match a period, you need to escape the dot by using a slash \\. accordingly."]
        },
        '4': {
            "words": ["can", 'man', 'fan', 'dan', 'ran', 'pan'],
            "matches": [true, true, true, false, false, false],
            "explanations": ["The dot metacharacter from the last lesson is pretty powerful, but sometimes too powerful. If we are matching phone numbers for example, we don't want to validate the letters \"(abc) def-ghij\" as being a valid number!",
            "There is a method for matching specific characters using regular expressions, by defining them inside square brackets. For example, the pattern [abc] will only match a single a, b, or c letter and nothing else."]
        },
        '5': {
            "words": ['hog', 'bog', 'dog'],
            "matches": [true, true, ],
            "explanations": ["In some cases, we might know that there are specific characters that we don't want to match too, for example, we might only want to match phone numbers that are not from the area code 650.",
            "To represent this, we use a similar expression that excludes specific characters using the square brackets and the ^ (hat). For example, the pattern [^abc] will match any single character except for the letters a, b, or c."]
        },
        '6': {
            "words": [''],
            "matches": [true, true, true, true],
            "explanations": []
        },
        '7': {
            "words": [''],
            "matches": [true, true, true, true],
            "explanations": []
        },
        '8': {
            "words": [''],
            "matches": [true, true, true, true],
            "explanations": []
        },
        '9': {
            "words": [''],
            "matches": [true, true, true, true],
            "explanations": []
        },
        '10': {
            "words": [''],
            "matches": [true, true, true, true],
            "explanations": []
        },
    }

    const [level, setLevel] = useState(parseInt(localStorage.getItem('level')) || 1)
    const [re, setRE] = useState(new RegExp(''))
    let progress = []

    const maxLevel = Object.keys(words).length
    localStorage.setItem('level', level)

    useEffect(() => {
        console.log('1', re.toString())
        console.log(re.test('xyw'))

        progress = []
        if (level <= maxLevel) {
            words[level].words.map((word, key) => {
                re.test(word) ? progress.push(true) : progress.push(false)
            })
        }

        console.log(progress)

    }, [re])

    useEffect(() => {
        localStorage.setItem('level', level)
    }, [level])

    return level <= maxLevel ? (<div className={'outer_box'}>
        <h2 className={'level'}>Level {level}</h2>

        {words[level].explanations.map((expl, key)=>{
            return <p key={key} className={'explanations'}>{expl}</p>
        })}

        {words[level].words.map((word, key) => {
            return (
                <div key={'div' + key} style={{'display': 'flex'}}>
                    {words[level].matches[key]
                        ? <p key={'p1' + key} className={`match + ${re.test(word)
                        && 'match_green'}`}>Match</p>
                        : <p key={'p1' + key} className={`match + ${!re.test(word)

                        && 'match_green'}`}>Skip</p>
                    }
                    <p className={'word'} key={'p2' + key}>{word}</p>
                </div>
            )
        })}
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className={'container_regex'}>
            <div className="form__group field">
                <input type={"input"} className={"regex_input"} placeholder={"Your RegEx"} name={"regex"}
                       id={'regex'} autoComplete={"off"} autoFocus={true}
                       onChange={(event) => setRE(new RegExp(event.target.value))}/>
            </div>
            <button disabled={re.toString() === '/(?:)/'}
                    className={`regex_button + ${re.toString() === '/(?:)/' && 'regex_button_disabled'}`}
                    onClick={() => {
                        if (words[level].matches.toString() == progress.toString()) {
                            setRE(new RegExp(''))
                            setLevel(level + 1)
                            document.querySelector(".regex_input").value = ''
                        }
                    }}>Submit
            </button>
        </div>
    </div>) : (
        <div className={'game_over'}>
            <h3>CONGRATULATIONS</h3>
            <button className={'restart_button'} onClick={() => {
                setRE(new RegExp(''))
                setLevel(1)
            }}>Restart
            </button>
        </div>
    );
}