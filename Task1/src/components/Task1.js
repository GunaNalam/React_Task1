import React,{Component} from "react";
import "./bootstrap.css"
import {FaCode} from "react-icons/fa";
class Temp extends Component{
    constructor(props)
    {
        super(props)
        this.state ={
            InputText: '',
            ResultText: 0
        }
    }
    changing = (event) => {
        let InputGiven=event.target.value,countWords=0;
        for (let i=1;i<InputGiven.length-1;i++)
            if (InputGiven[i]==' ')
            {
                while ((InputGiven[i]<'a' || InputGiven[i]>'z') && (InputGiven[i]<'A' || InputGiven[i]>'Z')) i++;
                countWords+=(i!=InputGiven.length);
            }
        if (!InputGiven.length) countWords=-1;
        this.setState({
            ResultText: countWords+1,
            InputText: event.target.value
        })
    }
      render(){
        return (
            <div className="container justify-content-center mt-5" >
                <div className="row shadow">
                    <div className="col-12 fs-2 fw-bold">
                        Responsive Paragraph Word Counter
                    </div>
                    <div className="col-11 mt-3 mx-auto">
                        <div className="form-group">
                            <textarea rows={4} className="border-dark form-control mb-3" value={this.state.InputText} onInput={this.changing}></textarea>
                        </div>
                    </div>
                    <div className="col-11 text-start mx-auto fs-5 pb-3">
                        Word Count: {this.state.ResultText} 
                        <FaCode></FaCode>
                    </div>
                </div>
            </div>
        )
    }
}

export default Temp