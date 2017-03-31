import React, { Component } from 'react'

class Places extends Component {
    render() {
        const list = this.props.venues.map((venue, i) => {
            return (
                <li className="list-group-item" key={i}>{venue.name}</li>
            )
        })

        return(
            <div className="panel panel-success">
              <div className="panel-heading"><h3>London ***</h3></div>
                  <div className="panel-body">
                    <ul className="list-group">
                        {list}
                    </ul>
                  </div>
            </div>            
        )       
    }
}

export default Places