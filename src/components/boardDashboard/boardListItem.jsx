import React from 'react'

export default function BoardListItem({board}) {
    return (
        <>
            <div className=''>
                <div className='card card-box'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <div className='cover-image-wrapper'>
                                    <img src={board.boardPhotoURL} alt="" />
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-9 mb-10'>
                                <div className='row mb-10'>
                                    <div className='col-sm-6'>
                                        <h3 className='mb-10'>
                                            <a href='/boards/o2bfhdeh' className=''>
                                                {board.title}
                      `                     </a>
                                        </h3>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='text-right float-right'>
                                            <button className='btn btn-outline-info'>
                                                View Board
                                            </button>
                                            <i
                                                className='fa fa-ellipsis-v ml-2'
                                                aria-hidden='true'
                                                style={{ width: "50px;", innerHeight: "30px" }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='info-item'>
                                            <h6 className='inline'>FOR</h6>
                                            <span className=''>{board.for}</span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <h6 className='board-kind'>{board.boardType}</h6>
                                    </div>
                                </div>
                                <hr style={{ border: "1px solid #bbb", marginTop: "-1px" }} />
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='info-item'>
                                            <h6 className='h6-header'>CREATOR </h6>
                                            <span>{board.creator}</span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='info-item'>
                                            <h6 className='h6-header'>CREATED </h6>
                                            <span>{board.dateCreated}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mt-3'>
                                        <div className='info-item'>
                                            <h6 className='h6-header'>
                                                POSTS
                        <span>
                                                    <a
                                                        href='/boards/o2bfhdeh/upgrade'
                                                        className='btn btn-outline-primary btn-sm upgrade-button ml-3'
                                                    >
                                                        Upgrade
                          </a>
                                                </span>
                                            </h6>

                                            <span>{board.posts} (Max of 10)</span>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                        <div className='info-item'>
                                            <div className=''>
                                                <h6 className='h6-header'>LAST POST ADDED </h6>
                                                <span>{board.lastPostAdded}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}