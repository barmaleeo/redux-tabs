
import React,{Component} from 'react';
import { render } from "react-dom";
import ReduxTabs from "./lib/ReduxTabs";
import ReduxTabsContent from "./lib/ReduxTabsContent";

//const App = () => (

class App extends Component {
    state = {tab:0};
    render() {
        return (
            <div style={{width: 640, margin: "15px auto"}}>
                <h1>ReduxTabs test</h1>

                <ReduxTabs active={this.state.tab}
                           onClick={(tab) => {this.setState({tab:tab})}}
                           contentProps={{style: {background: '#eefffa'}}}>

                    <ReduxTabsContent name="first tab">first tab content</ReduxTabsContent>

                    <ReduxTabsContent name="second tab">
                        <div>first row</div>
                        second tab content
                        <div>third row</div>

                    </ReduxTabsContent>
                    <ReduxTabsContent name="empty tag"/>

                    <ReduxTabsContent name="third tab">third tab content</ReduxTabsContent>

                </ReduxTabs>

                <ReduxTabs active={this.state.tab}
                           onClick={(tab) => {this.setState({tab:tab})}}
                           contentProps={{style: {background: '#eefffa'}}}>

                    <ReduxTabsContent name="first tab">first tab content</ReduxTabsContent>

                </ReduxTabs>

               <ReduxTabs active={this.state.tab}
                           onClick={(tab) => {this.setState({tab:tab})}}
                           contentProps={{style: {background: '#eefffa'}}}>

                </ReduxTabs>

            </div>
        )
    }
}

render(<App />, document.getElementById("root"));