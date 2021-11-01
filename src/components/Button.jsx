import React from 'react';

class Button extends React.PureComponent {
    render() {
        const { text } = this.props;
        const { click } = this.props;
        return (
            <div>
                <button
                    onClick={click}
                    type="button"
                    className="rounded-lg p-2 text-xl text-gray-200 px-4 bg-green-700"
                >
                    {text}
                </button>
            </div>
        );
    }
}
export default Button;
