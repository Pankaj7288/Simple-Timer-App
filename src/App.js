/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './components/Button';

class App extends React.PureComponent {
    state = {
        count: 0,
        intervelId: null,
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (!this.state.count <= 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    start = () => {
        this.intervelId = setInterval(() => {
            if (this.state.count > 0 && this.intervelId) {
                this.setState({ count: this.state.count - 1 }, () => {
                    if (this.state.count === 0) {
                        alert('Timer Finished');
                        clearInterval(this.intervelId);
                        this.intervelId = null;
                    }
                });
            }
        }, 1000);
    };

    stop = () => {
        clearInterval(this.intervelId);
        this.intervelId = null;
    };

    reset = () => {
        this.setState({ count: 0 });
        clearInterval(this.intervelId);
        this.intervelId = null;
    };

    render() {
        return (
            <div className="flex justify-center ">
                <div className=" my-6 mx-auto p-3 border-2 border-solid border-gray-500">
                    <div className="flex justify-center ">
                        <h1 className="text-4xl text-gray-200 rounded-md px-5 py-2  bg-yellow-600">
                            Simple Timer
                        </h1>
                    </div>
                    <div className="flex justify-center gap-3 mt-3">
                        <Button text="Increment" click={this.increment} />
                        <span className="w-8 text-center text-3xl text-gray-800">
                            {this.state.count}
                        </span>
                        <Button text="Decrement" click={this.decrement} />
                    </div>
                    <div className="flex justify-center gap-5 mt-3">
                        <Button text="Start" click={this.start} />
                        <Button text="Stop" click={this.stop} />
                        <Button text="Reset" click={this.reset} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
