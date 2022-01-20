import './Tutorial.scss'
import React, {useEffect, useState} from "react";

import pic1 from '../pic1.png';

export const Tutorial = ({tutorialOpen, setTutorialOpen}) => {

    if (tutorialOpen) {
        return (<div className={'tutorial_box'} onClick={() => setTutorialOpen(false)}>
                <div className={'tutorial_text'} onClick={() => setTutorialOpen(true)}>
                    <br></br>
                    <h1>What's RegEx?</h1>
                    <p className={'p'}>Regular expression is a sequence of characters that specifies a search pattern in
                        text. Usually such patterns are used by string-searching algorithms for "find" or "find and
                        replace"
                        operations on strings, or for input validation. They are used in search engines, search and
                        replace
                        dialogs of word processors and text editors, in text processing utilities and in lexical
                        analysis.</p>
                    <p className={'p'}>The phrase regular expressions, or regexes, is often used to mean the specific,
                        standard textual syntax for representing patterns for matching text, as distinct from the
                        mathematical notation described below. Each character in a regular expression (that is, each
                        character in the string describing its pattern) is either a metacharacter, having a special
                        meaning,
                        or a regular character that has a literal meaning. For example, in the regex <code>b.</code>,
                        'b' is
                        a literal character that matches just 'b', while <code>'.'</code> is a metacharacter that
                        matches
                        every
                        character except a newline.</p>
                    <p className={'p'}>A regex processor translates a regular expression in the above syntax into an
                        internal representation that can be executed and matched against a string representing the text
                        being searched in. One possible approach is the <b>Thompson's construction algorithm</b> to
                        construct a
                        <b> nondeterministic finite automaton (NFA)</b>, which is then made deterministic and the
                        resulting <b>deterministic finite automaton (DFA)</b> is run on the target text string to
                        recognize
                        substrings that match the regular expression.</p>
                    <p className={'p'}>A regular expression, often called a pattern, specifies a set of strings required
                        for
                        a particular purpose. A simple way to specify a finite set of strings is to list its elements or
                        members. In most formalisms, if there exists at least one regular expression that matches a
                        particular set then there exists an infinite number of other regular expressions that also match
                        it.</p>
                    <h1>Nondeterministic finite automaton</h1>
                    <p className={'p'}>A nondeterministic finite automaton (NFA), or nondeterministic finite-state
                        machine, does not need to obey restrictions of deterministic finite automaton (DFA). In
                        particular, every DFA is also an NFA.</p>
                    <p className={'p'}>An NFA, similar to a DFA, consumes a string of input symbols. For each input
                        symbol, it transitions to a new state until all input symbols have been consumed. In each step,
                        the automaton arbitrarily chooses one of the applicable transitions. If there exists some "lucky
                        run", i.e. some sequence of choices leading to an accepting state after completely consuming the
                        input, it is accepted. Otherwise, i.e. if no choice sequence at all can consume all the input
                        and lead to an accepting state, the input is rejected.</p>
                    <p className={'p'}>As was mentioned before, NFA consumes a string of input symbols, one by one. In each step, whenever two or
                        more transitions are applicable, it "clones" itself into appropriately many copies, each one
                        following a different transition. If no transition is applicable, the current copy is in a dead
                        end, and it "dies". If, after consuming the complete input, any of the copies is in an accept
                        state, the input is accepted, else, it is rejected.</p>
                    <h1>Thompson's construction algorithm</h1>
                    <p className={'p'}>Thompson's construction algorithm is a method of transforming a regular
                        expression
                        into an equivalent nondeterministic finite automaton (NFA). The algorithm works recursively by
                        splitting an expression into its constituent subexpressions, from which the NFA will be
                        constructed
                        using a set of rules.</p>
                    <p className={'p'}>Next picture is an example of <code>(ε|a*b)</code> using Thompson's construction,
                        step by step:</p>
                    <img src={pic1}/>
                    <p className={'p'}>The purple oval corresponds to <code>a</code>, the teal oval corresponds
                        to <code>a*</code>, the green oval corresponds to <code>b</code>, the orange oval corresponds
                        to <code>a*b</code>, and the blue oval corresponds to <code>ε</code>.</p>
                    <h1>Deterministic finite automaton</h1>
                    <p className={'p'}>In automata theory, a finite-state machine is called a deterministic finite
                        automaton (DFA), if:</p>
                    <p className={'p'}><b>—</b> each of its transitions is uniquely determined by its source state and
                        input
                        symbol</p>
                    <p className={'p'}><b>—</b> reading an input symbol is required for each state transition.</p>
                    <p className={'p'}>A deterministic finite automaton (DFA) can be seen as a special kind of NFA, in
                        which for each state and symbol, the transition function has exactly one state. Thus, it is
                        clear that every formal language that can be recognized by a DFA can be recognized by a NFA.</p>
                    <p className={'p'}></p>
                    <h1>DFA minimization</h1>
                    <p className={'p'}>For each regular language, there also exists a minimal automaton that accepts it,
                        that is, a DFA with a minimum number of states and this DFA is unique (except that states can be
                        given different names). The minimal DFA ensures minimal computational cost for tasks such
                        as pattern matching.</p>
                    <p className={'p'}>DFA minimization is usually done in three steps:</p>
                    <p className={'p'}>1) remove dead and unreachable states</p>
                    <p className={'p'}>2) merge indistinguishable states</p>
                    <p className={'p'}>3) optionally, re-create a single dead state if the resulting DFA is required to
                        be complete</p>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}