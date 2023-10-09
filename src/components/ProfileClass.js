import React from 'react'

class ProfileClass extends React.Component{
    constructor(props) {
        super(props);
        //create state
        this.state = {
            count: 0,
            count2: 2,
        };
        console.log("constructor") //1st call 
    }
    componentDidMount() {
        //3rd call - after render this is call i.e why we make api call here
        console.log('ComponentDidMount')
    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate') //when we make any changes we can make here ([ dependency array])
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        // change from this component to another
    }
    render() {
        console.log('render') //2nd call
        return (
            <div>
                <h1>{ this.props.name}</h1>
                <h2>Profile Class Component </h2>
                <p>{this.state.count}</p>
                <button onClick={() => {
                    // we do not mutate state directly
                    // never do this.state = something
                    this.setState({
                        count: 1
                    })
                }}>+</button>
            </div>
        )
    }
}

export default ProfileClass