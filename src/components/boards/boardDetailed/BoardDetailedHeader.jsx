import React, { useRef, useState } from "react";
import Editable from "../../resources/editable";

export default function BoardDetailedHeader({board}) {

  /* 
   1. create a reference using use reference and add the ref={inputRef} to input element
   2. pass this reference to the Editable component, use different name than ref, I used `childRef`. Its basically a normal prop carrying the input element reference.
 */
  const inputRef = useRef();
  const [task, setTask] = useState(board.title);

  return (
    <>
      <div className='board-header' style={{ backgroundColor: "#726248" }}>
        <div className='row'>
          <div className='col-md-8 float-right'>
            <a href="" className='btn btn-primary float-right mt-0' data-toggle="modal" data-target="#bd-example-modal-lg" type="button">
              <i className='icon-copy ion-plus-round'></i> New Board
            </a>
          </div>
        </div>
        <div className='col-sm-12'>
          <h1 className='board-heading'>
            <Editable
              text={task}
              type="input"
              childRef={inputRef}
            >
              <input
                ref={inputRef}
                type="text"
                name="task"
                placeholder="Enter Board Title"
                value={task}
                onChange={e => setTask(e.target.value)}
                className='board-input'
                style={{width:'100%'}}
              />
            </Editable>
          </h1>
        </div>
      </div>
    </>
  );
}
