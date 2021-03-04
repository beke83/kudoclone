import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {deleteBoard} from "../boardActions"

export default function BoardListItem({ board }) 
{

    const dispatch = useDispatch();

  return (
    <>
      <div className=''>
        <div className='card card-box'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='cover-image-wrapper'>
                  <img src={board.boardPhotoURL} alt='' />
                </div>
              </div>
              <div className='col-xs-12 col-sm-9 mb-10'>
                <div className='row mb-10'>
                  <div className='col-sm-6'>
                    <h3 className='mb-10'>
                      <a href='/boards/o2bfhdeh' className=''>
                        {board.title}`{" "}
                      </a>
                    </h3>
                  </div>
                  <div className='col-sm-6'>
                    <div className='text-right float-right'>
                      <Link to={`/boards/${board.id}`}>
                        <button type='button' className='btn btn-outline-info'>
                          View Board
                        </button>
                      </Link>
                      <a
                        className=''
                        href='#'
                        role='button'
                        data-toggle='dropdown'
                      >
                        <span>
                          <i
                            className='fa fa-ellipsis-v ml-2'
                            aria-hidden='true'
                            style={{ width: "50px;", innerHeight: "30px" }}
                          ></i>
                        </span>
                      </a>
                      <div className='dropdown-menu dropdown-menu-right dropdown-menu-icon-list mt-6'>
                        <a className='dropdown-item' href='profile.html'>
                          <i className='dw dw-user1'></i> Slideshow
                        </a>
                        <a
                          role='button'
                          href='##'
                          className='dropdown-item'
                          onClick={() => dispatch(deleteBoard(board.id))}
                        >
                          <i className='dw dw-settings2'></i> Delete
                        </a>
                        <a className='dropdown-item' href='faq.html'>
                          <i className='dw dw-help'></i> Help
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='info-item'>
                      <h6 className='inline'>FOR</h6>
                      <span className=''>
                        {board.recipient_first_name} {board.recipient_last_name}{" "}
                      </span>
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
