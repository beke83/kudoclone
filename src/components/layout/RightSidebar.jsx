import React from 'react';

export default function RightSidebar() {
    return (
        <>
        <div className='right-sidebar' id="bg-right-sidebar">
            <div className='sidebar-title'>
                <h3 className='weight-600 font-16 text-blue'>
                    Layout Settings
            <span className='btn-block font-weight-400 font-12'>
                        User Interface Settings
            </span>
                </h3>
                <div className='close-sidebar' data-toggle='right-sidebar-close'>
                    <i className='icon-copy ion-close-round'></i>
                </div>
            </div>
            <div className='right-sidebar-body customscroll'>
                <div className='right-sidebar-body-content'>
                    <h4 className='weight-600 font-18 pb-10'>Header Background</h4>
                    <div className='sidebar-btn-group pb-30 mb-10'>
                        <a
                            href='javascript:void(0);'
                            className='btn btn-outline-primary header-white active'
                        >
                            White
              </a>
                        <a
                            href='javascript:void(0);'
                            className='btn btn-outline-primary header-dark'
                        >
                            Dark
              </a>
                    </div>
                    <h4 className='weight-600 font-18 pb-10'>Sidebar Background</h4>
                    <div className='sidebar-btn-group pb-30 mb-10'>
                        <a
                            href='javascript:void(0);'
                            className='btn btn-outline-primary sidebar-light '
                        >
                            White
              </a>
                        <a
                            href='javascript:void(0);'
                            className='btn btn-outline-primary sidebar-dark active'
                        >
                            Dark
              </a>
                    </div>
                    <h4 className='weight-600 font-18 pb-10'>Menu Dropdown Icon</h4>
                    <div className='sidebar-radio-group pb-10 mb-10'>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebaricon-1'
                                name='menu-dropdown-icon'
                                className='custom-control-input'
                                value='icon-style-1'
                                checked=''
                            />
                            <label className='custom-control-label' for='sidebaricon-1'>
                                <i className='fa fa-angle-down'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebaricon-2'
                                name='menu-dropdown-icon'
                                className='custom-control-input'
                                value='icon-style-2'
                            />
                            <label className='custom-control-label' for='sidebaricon-2'>
                                <i className='ion-plus-round'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebaricon-3'
                                name='menu-dropdown-icon'
                                className='custom-control-input'
                                value='icon-style-3'
                            />
                            <label className='custom-control-label' for='sidebaricon-3'>
                                <i className='fa fa-angle-double-right'></i>
                            </label>
                        </div>
                    </div>

                    <h4 className='weight-600 font-18 pb-10'>Menu List Icon</h4>
                    <div className='sidebar-radio-group pb-30 mb-10'>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebariconlist-1'
                                name='menu-list-icon'
                                className='custom-control-input'
                                value='icon-list-style-1'
                                checked=''
                            />
                            <label className='custom-control-label' for='sidebariconlist-1'>
                                <i className='ion-minus-round'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebariconlist-2'
                                name='menu-list-icon'
                                className='custom-control-input'
                                value='icon-list-style-2'
                            />
                            <label className='custom-control-label' for='sidebariconlist-2'>
                                <i className='fa fa-circle-o' aria-hidden='true'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebariconlist-3'
                                name='menu-list-icon'
                                className='custom-control-input'
                                value='icon-list-style-3'
                            />
                            <label className='custom-control-label' for='sidebariconlist-3'>
                                <i className='dw dw-check'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebariconlist-4'
                                name='menu-list-icon'
                                className='custom-control-input'
                                value='icon-list-style-4'
                                checked=''
                            />
                            <label className='custom-control-label' for='sidebariconlist-4'>
                                <i className='icon-copy dw dw-next-2'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebariconlist-5'
                                name='menu-list-icon'
                                className='custom-control-input'
                                value='icon-list-style-5'
                            />
                            <label className='custom-control-label' for='sidebariconlist-5'>
                                <i className='dw dw-fast-forward-1'></i>
                            </label>
                        </div>
                        <div className='custom-control custom-radio custom-control-inline'>
                            <input
                                type='radio'
                                id='sidebariconlist-6'
                                name='menu-list-icon'
                                className='custom-control-input'
                                value='icon-list-style-6'
                            />
                            <label className='custom-control-label' for='sidebariconlist-6'>
                                <i className='dw dw-next'></i>
                            </label>
                        </div>
                    </div>

                    <div className='reset-options pt-30 text-center'>
                        <button className='btn btn-danger' id='reset-settings'>
                            Reset Settings
              </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
