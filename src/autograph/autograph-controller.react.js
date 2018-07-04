import React from 'react'
import autographStore from './autograph-store';
import AutographContainer from './autograph-container.react';
// import AutographMetrics from './autograph-metrics.react';

export default React.createClass({

	getInitialState() {
		return this.getState();
	},

	getState() {
		return {
			newMessage: autographStore.newMessage,
			messageList: autographStore.messageList
		};
	},

	render() {
		// return <autographContainer newMessage={this.state.newMessage} messageList={this.state.messageList} />;
		return (
			<div className='autograph-controller'>
				<AutographContainer {...this.state} />
			</div>
		);
	},

	componentDidMount() {
		autographStore.addEventListener(this.handleChange);
	},

	handleChange() {
		this.setState(this.getState());
	},

	componentWillUnmount() {
		autographStore.removeEventListener(this.handleChange);
	}

})