import React, {useState} from "react";
import { Button } from "semantic-ui-react";
import BoardList from "./boardList";
import { sampleData } from '../api/sampleData';

export default function Dashboard() {

  //using useState to contro the components state
  const [boards, setBoards] = useState(sampleData);

  return (
    <>
      <div className='page-header pt-1'>
        <div className='row'>
          <div className='col-sm-12 float-right'>
            <h2 className='heading'>Dashboard</h2>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#bd-example-modal-lg" type="button">
              <Button className='btn btn-primary float-right mt-0'>
                <i className='icon-copy ion-plus-round'></i> New Board
            </Button>
            </a>
          </div>
        </div>
        <div className='col-md-4 col-sm-10'>
          <div className='title'></div>
          <nav aria-label='breadcrumb' role='navigation'>
            <div className='links mb-0'>
              <a href='#?' className='link selected'>
                Given
              </a>
              <a href='#?' className='link'>
                Received
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/*pass the sample data as props to the child component BoardList*/}
      <BoardList boards={boards} />

      <div className="modal fade bs-example-modal-lg" id="bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" style={{ textAlign: "center" }} id="myLargeModalLabel">Create New Board</div>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body">
              <div className="wizard-content">
                <form className="tab-wizard2 wizard-circle wizard">
                  <section>
                    <div className="form-wrap mx-auto">
                      <label className="label-title" for="recipient_first_name">Who is this Kudoboard for?</label>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" name="recipient_first_name" placeholder="First name" className="form-control input-lg js-recipient-first-name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" name="recipient_last_name" placeholder="Last name" className="form-control input-lg " />
                          </div>
                        </div>
                      </div>
                      <label className="label-title" for="title">What title would you like on top of the Kudoboard?</label>
                      <div className="form-group">
                        <input type="text" name="title" placeholder="Happy Bday, Get Well Soon, You're Amazing, etc." className="form-control input-lg" />
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-lg btn-block">
                <span style={{ display: "none" }}>
                  <i className="fa fa-spin fa-spinner" aria-hidden="true"></i></span>
                     Next
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
