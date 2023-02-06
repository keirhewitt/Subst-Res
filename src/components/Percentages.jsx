import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { sortIntoCategories, convert2DArrToObject } from "../util/format";

class Percentages extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            data: this.props.data,
            categories: [],
            piedata: {},
            title: '',
            isLoading: true
        }
    }

    componentDidMount = () => { 
        const catState = sortIntoCategories(this.state.data);
        const pieState = convert2DArrToObject(catState);
        this.setState({
            categories: catState,
            piedata: pieState,
            title: "Substantive Research - Client Interaction",
            isLoading: false
        })
    }

    render() {
        return !this.state.isLoading ? <div className="percentage-block">
            <h2 className="page-title">{this.state.title}</h2>
            <PieChart
                style={{width: '600px', height: '500px'}}          
                label={({ dataEntry }) => `${dataEntry.title}`}
                labelPosition={80}
                labelStyle={(index) => ({
                    fill: this.state.piedata[index].color,
                    fontSize: '4px',
                    fontFamily: 'sans-serif',
                    textShadow: '2px 1px #000000'
                  })}
                data={this.state.piedata}
            />
        </div>
        :
        <p>Waiting for data to load...</p>
    }
}

export default Percentages;