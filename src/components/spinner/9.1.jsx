import React from "react";
import Spinner1 from "./spinner1";
import Spinner2 from "./spinner2";
import Spinner3 from "./spinner3";
import Spinner4 from "./spinner4";
import Spinner5 from "./spinner5";
import Spinner6 from "./spinner6";


class Ex91 extends React.Component {
    spinners=[<Spinner1/>,<Spinner2/>,<Spinner3/>,<Spinner4/>,<Spinner5/>,<Spinner6/>]
    state = {  display:true,spinner:Math.floor(Math.random()*this.spinners.length)}
    

    componentDidMount() {
       setTimeout(() => {
           this.setState({display:false});
       }, 5000);
    }

    displayContent(){
        return this.state.display?this.spinners[this.state.spinner]:<h1>Welocome To Us</h1>;
    }
    render() {
        
        return (
            <div>
               {this.displayContent()}
            </div>
        );
    }
}

export default Ex91;