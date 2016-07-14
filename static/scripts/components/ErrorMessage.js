import React from 'react';

const ErrorMessage = React.createClass({
    render: function(){
        if(!this.props.error || this.props.error.trim() === ''){
            return null;
        }
        return (
            <div>
                
            </div>
        )
    }
})