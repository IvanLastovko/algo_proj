import React, {useEffect, useState} from "react";
import './Header.scss'
import {Tutorial} from "./Tutorial";

export const Header = () => {

    const [tutorialOpen, setTutorialOpen] = useState(false)

    useEffect(() => {
        console.log(tutorialOpen)
    }, [tutorialOpen])

    return (
        <>
            <header className={'header'}>
                {/*<p className={'title'}>RegEx</p>*/}
                <p className={'header_p'} onClick={() => setTutorialOpen(!tutorialOpen)}>How does RegEx work?</p>
            </header>
            {
                tutorialOpen ? <Tutorial tutorialOpen={tutorialOpen} setTutorialOpen={setTutorialOpen}></Tutorial> : null
            }
        </>
    );
}
