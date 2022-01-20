import './Game.scss'
import {useEffect, useState} from "react";

export const Game = () => {

    const words = {
        '1': {
            "name": "Letter characters",
            "words": ['abcd', 'abcde', 'bcde'],
            "matches": [true, true, true],
            "explanations": ["In the regex engine, letter characters are used to match the first occurrence of these letters in the string. For these purposes, we need to create a pattern that may contain both single or multiple letters for string search. If a pattern has multiple letters the engine would match the first sequence of these letters in the string. For example, if we have a string “Dogs and cats can be your friends” the regex pattern ‘s‘ would match ‘s’ in the word “Dogs”. For the same example pattern ‘can’ would match the word “can” in the string. Note that for pattern matching letters ‘A’ and ‘a’ have different meaning and letters with upper cases wouldn’t match the letters with lower cases and vice versa."]
        },
        '2': {
            "name": "Digits",
            "words": ['abc123xyz', '"123"', 'const num = 123;', '1?23'],
            "matches": [true, true, true, false],
            "explanations": ["Regex engine can also match the numbers in a string as well. The pattern for a string search may contain single or multiple numbers and it would match only the first occurrence of these digits in the string. For example, the pattern ‘2’ in a string “abc1 abc2 abc3” would match ‘2’ in “abc2”.  For the string “11223344” the pattern ‘1234’ wouldn’t match anything but the pattern ‘2233’ would have a match."]
        },
        '3': {
            "name": "Special characters",
            "words": ['cat.', '896.', '?=+.', 'abc1'],
            "matches": [true, true, true, false],
            "explanations": ["Regex engine supports characters from ASCII table. Except letters and digits regex may use special characters for pattern matching. Some of these characters called metacharacters and they may perform special operations in pattern searching. These characters are backslash \\, the caret ^, the dollar sign $, the period ., the vertical bar |, the question mark ?, the Kleene star *, the plus sign + , the opening and closing parenthesis ( ), the opening and clothing square brackets [ ], and the opening and clothing curly braces { } [1]. The operations connected with these characters will be in next chapters. In order to use them for pattern matching these characters must contain backslash before them. Backlash allows to use metacharacters as usual characters. For example, the pattern ‘\\( 1 \\+ 2 \\) \\*2 = 6’ would have a match in the string “12 - (1+2)*2 = 6”."]
        },
        '4': {
            "name": "Character classes",
            "words": ["123", '2+2=4?', 'error 404', 'cat', 'dog', 'ball'],
            "matches": [true, true, true, false, false, false],
            "explanations": ["In order to perform more flexible matching for multiple strings character classes are used. For matching any digit pattern ‘\\d’ can be used. Each class has its negated version. Class ‘\\d’ has negated class ‘\\D’ which matches all characters and letters from ASCII table except digits. Also there is a character class ‘\\w’ that matches upper and lower letters, digits and underscore ‘_’. That class has negated version ‘\\W’ which matches other ASCII table characters that were not covered by ‘\\w’.  There are also character class that matches whitespace separators. This class is ‘\\s’ and it covers a space, tab, carriage return, line or form feed separators [2]. The negated class of ‘\\s’ is ‘\\S’ and it matches all characters from ASCII table except whitespaces. For example, one of the options to match the string “1b c2” is the pattern ‘\\d\\w\\s\\S\\w’."]
        },
        '5': {
            "name": "Dot",
            "words": ['cat.', 'dog.', 'ice cream'],
            "matches": [true, true, false],
            "explanations": ["In regular expressions the metacharacter dot ‘.’ can match any single character from ASCII table. If there is a need to match a dot character in a string we need to add backlash before the dot in the pattern. For example, if there is a need to match make a full match of the string “Bottle.” the pattern may be look as ‘……\\.’."]
        },
        '6': {
            "name": "Kleene star, plus sign and question mark",
            "words": ['aaaabcc', 'aabbbbc', 'aacc', 'a'],
            "matches": [true, true, true, false],
            "explanations": ["Kleene star ‘*’ and plus sign ‘+’ are used when there is a need to match a repetitive characters, while the question mark matches optional character. They are located after the character or the group of characters. Kleene star is used for zero or more repetitions, plus sign is used for one or more repetitions and the question mark used for zero or one characters. For example, the pattern ‘abc*’ would match both the string “abc” and “ab”. The pattern ‘abc+’ would match the string “abccccc” but wouldn’t match “ab”. The pattern ‘abc?’ would match the strings “abc”, “ab” but wouldn’t match “acb”."]
        },
        '7': {
            "name": "Square brackets",
            "words": ['can', 'man', 'fan', 'dan', 'ran', 'pan'],
            "matches": [true, true, true, false, false, false],
            "explanations": ["Square brackets ‘[‘ and ‘]’ are used for representing the group of characters that may be used in the matching where only single character from the group will be used. That means that from the pattern ‘[akl]’ the regex engine would match either ‘a’ or ‘k’ or ‘l’. If there is a need to make a wider range of letters or digits that pattern may consist we may use dash ‘-‘ inside the square brackets. For the digits the pattern ‘[1-6]’ means that it matches single digit from 1 to 6 and for letters pattern ‘[b-f]’ would match the single letter from b to f. We may also use the caret ‘^’ inside the square brackets which would indicate that all the characters that are located in brackets are excluded from the matching. The pattern ‘[^dig]’ wouldn’t match the letters d, i, g, but would match any single character except them. The caret must be used before the characters that we need to exclude."]
        },
        '8': {
            "name": "Caret and Dollar sign",
            "words": ['Mission: successful', 'Last Mission: unsuccessful', 'Next Mission: successful upon capture of target'],
            "matches": [true, false, false],
            "explanations": ["If there is a need to specify the start and the end of the pattern sequence we may the caret ‘^’ at the start of the sequence and dollar sign ‘$’at the end of the sequence. For example, if there is a string “I love cats and dogs” and for matching such string the pattern will be ‘^I love cats and dogs$’."]
        },
        '9': {
            "name": "Curly braces",
            "words": ['abbbbbc', 'abbbc', 'abc'],
            "matches": [true, true, false],
            "explanations": ["Curly braces ‘{‘  and ‘}’ are used in patterns to specify the number of repetitions during the matching. These braces may contain one or two digits that indicate the amount of repetitions. If curly braces contain two digits then left digit would be minimum amount of repetitions and right digit would be maximum amount. Curly braces are used after the characters or group of characters. For example, the pattern ‘b{5}’ would match exactly five ‘b’s, and the pattern ‘[ab]{2,5}’ would match between two and five characters which can be ‘a’ or ‘b’."]
        },
        '10': {
            "name": "Parenthesis",
            "words": ['file1.txt', 'file23.txt', 'text_file.pdf'],
            "matches": [true, true, false],
            "explanations": ["Opening ‘(’ and closing ‘)’ parenthesizes are used in patterns for matching the exact group of characters inside parenthesizes. The characters inside parenthesizes are placed in an exact sequence which will be used in pattern matching and inside parenthesizes may be located another parenthesizes which would contain subgroup. Inside groups may be located pipe symbol ‘|’ which shows that there could be different sequences of characters that can be captured during the matching. For example, the pattern ‘(abc|bbc)’ would match exactly “abc” or “bbc” without any other characters in string. The pattern ‘(1+\\s(big))’ would match exactly “11 big” or “1 big” etc."]
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
        <h2 className={'level'}>Level {level}. {words[level].name}</h2>

        {words[level].explanations.map((expl, key)=>{
            return <p key={key} className={'explanations'}>{expl}</p>
        })}
        <br></br>
        <h2 className={'level'}>Task:</h2>
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