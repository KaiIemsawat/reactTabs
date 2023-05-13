import React, { useState } from "react";
import style from "./styles.module.css";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        console.log(`tap ${index} is toggled`); // Template literal (Templae String)
        setToggleState(index);
    };
    return (
        <div className={style.mainContainer}>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav`}>
                        <li className="nav-item">
                            <button
                                className={
                                    toggleState === 1
                                        ? `nav-link ${style.activeTab}` // Mixed bootstrap and module in turnary
                                        : `nav-link`
                                }
                                onClick={() => toggleTab(1)}>
                                Tap 1
                            </button>
                        </li>
                        <li className={`nav-item`}>
                            <button
                                className={
                                    toggleState === 2
                                        ? `nav-link ${style.activeTab}`
                                        : `nav-link`
                                }
                                onClick={() => toggleTab(2)}>
                                Tap 2
                            </button>
                        </li>
                        <li className={`nav-item`}>
                            <button
                                className={
                                    toggleState === 3
                                        ? `nav-link ${style.activeTab}`
                                        : `nav-link`
                                }
                                onClick={() => toggleTab(3)}>
                                Tap 3
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="bodyContainer bg-light">
                {/* <div className={`${style.content} ${style.activeContent}`}> */}
                <div
                    className={
                        toggleState === 1
                            ? `${style.content} ${style.activeContent}` // Mixed bootstrap and module in turnary
                            : `${style.content}`
                    }>
                    <h3>Content 1</h3>
                    <p>This is a message from Tab 1</p>
                </div>
                <div
                    className={
                        toggleState === 2
                            ? `${style.content} ${style.activeContent}`
                            : `${style.content}`
                    }>
                    <h3>Content 2</h3>
                    <p>This is a message from Tab 2</p>
                </div>
                <div
                    className={
                        toggleState === 3
                            ? `${style.content} ${style.activeContent}`
                            : `${style.content}`
                    }>
                    <h3>Content 3</h3>
                    <p>This is a message from Tab 3</p>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
