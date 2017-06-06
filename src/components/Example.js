/*import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // dont work
import React, { Component } from 'react';

class Example extends Component {
        constructor() {
            super();
            this.state = {items: ['Click', 'To', 'Remove', 'An', 'Item']}
        }
        
        render() {
            return (
                <div className="container">
                    <div className="animation-container">
                        <ReactCSSTransitionGroup transitionName="example">
                            {this.renderItems()}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            );
        }
        
        renderItems() {
            return this.state.items.map((item, i) => {
                return (
                    <div key={item} onClick={() => this.removeItem(i)} className="item">
                        {item}
                    </div>
                );	
            });	
        }
    
        removeItem(i) {
            let newItems = this.state.items.slice();
            newItems.splice(i, 1);
            this.setState({
                items: newItems
            });
        }

}
export default Example;*/