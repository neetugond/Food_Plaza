import React from 'react'

class ProfileClass extends React.Component{
    render() {
        return (
            <div>
                <h1>{ this.props.name}</h1>
                <h2>Profile Class Component </h2>
            </div>
        )
    }
}

export default ProfileClass