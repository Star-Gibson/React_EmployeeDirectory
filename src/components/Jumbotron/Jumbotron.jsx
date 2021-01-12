import React from 'react'

// Styling
const style ={ 
    jumbotron:{
        background: "goldenrod",
    }
}
function Jumbotron() {
    return (
        <div>
            <div style={style.jumbotron} className="jumbotron jumbotron-fluid mb-2" id="jumboTron">
                <div className="container mb-0">
                    <h1 className="text-center">Company Directory</h1>
                    <p className="lead text-center">Search for employees</p>
                </div>
            </div>
        </div>)
}
export default Jumbotron; 