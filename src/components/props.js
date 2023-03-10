import React, {Component} from "react";

class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
   
    render() { 
        return ( <>
        <h1>mi lista de fruta :  
            <br/>{this.props.frutas}  </h1>
        </> );
    }
}
 
export default Props;