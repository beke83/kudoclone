import React, { useState, useEffect } from "react";

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
export default function Editable ({ childRef, type, children, text, placeholder, ...props}){
    const [isEditing, setEditing] = useState(false);
 

    /* 
      using use effect, when isEditing state is changing, check whether it is set to true, if true, then focus on the reference element
    */
    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
        }
    }, [isEditing, childRef]);

    // Event handler while pressing any key while editing
    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey]; // All keys array

        /* 
          - For textarea, check only Escape and Tab key and set the state to false
          - For everything else, all three keys will set the state to false
        */
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    };

    /*
    - It will display a label is `isEditing` is false
    - It will display the children (input or textarea) if `isEditing` is true
    - when input `onBlur`, we will set the default non edit mode
    Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
    */
    return (
        <section {...props}>
            {isEditing ? (
                <div
                    onBlur={() => setEditing(false)}
                    onKeyDown={e => handleKeyDown(e, type)}
                    className='board-heading'
                    style={{width: '100%', backgroundColor: 'inherit'}}
                >
                    {children}
                </div>
            ) : (
                    <div
                        onClick={() => setEditing(true)}
                    >
                        <span className="board-heading">
                            {text || placeholder || "Editable content"}
                        </span>
                    </div>
                )}
        </section>
    );
};

