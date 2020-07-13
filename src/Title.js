import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">
                    Hello {this.props.studentName}

                </h1>
                <p>{this.props.age}ans</p>
                
                <div>
                    
                </div>
            </div>
        );
    }
}
export default Title;