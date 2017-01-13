import React from 'react'
import 'flag-icon-css/css/flag-icon.css'

const Flag = ({ code }) => (
    <div>
        <span className={"flag-icon flag-icon-" + code}></span>
    </div>
);

export default Flag