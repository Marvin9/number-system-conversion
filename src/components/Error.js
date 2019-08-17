import React from 'react'

function Error(props) {
    return (
        <React.Fragment>
            <div className="uk-text-meta uk-text-danger" style={{textAlign : "left"}}>{ props.invalid }</div>  
        </React.Fragment>
    )
}

export default Error
