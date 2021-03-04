import React from 'react'

export default function BoardDetailedBody({board}) {
    return (
        <>
        <div className='row'>
            <div className="col-md-4">
                    <img alt="img" src={board.boardPhotoURL} /> 
            </div>
            <div className="col-md-4">
                    <img alt="img" src={board.boardPhotoURL1} /> 
            </div>
                <div className="col-md-4">
                    <img alt="img" src={board.boardPhotoURL2} />
                </div>
        </div>
             
           

        </>
    )
}