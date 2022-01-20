import './Tutorial.scss'
import React, {useEffect, useState} from "react";

export const Tutorial = ({tutorialOpen, setTutorialOpen}) => {


    if (tutorialOpen) {
        return (<div className={'tutorial_box'} onClick={() => setTutorialOpen(false)}>
            <div className={'tutorial_text'} onClick={() => setTutorialOpen(true)}>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati,
                    pariatur! Consequatur expedita molestiae perspiciatis possimus quam reprehenderit sint, velit!</p>
            </div>
        </div>)
    }
}