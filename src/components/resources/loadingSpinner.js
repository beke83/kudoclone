import React from 'react';

export const LoadingSpinner = () => (
    <div className="text-center">
        <i className="fa fa-spinner fa-spin" /><h6> Please wait...</h6>
    </div>
);

export const LoadingSpinnertable = () => (
    <div className="text-center" style={{color:"red"}}>
        <i className="fa fa-spinner fa-spin" /><h6> Loading Data...</h6>
    </div>
);

export default (LoadingSpinner, LoadingSpinnertable);