import dispatcher from './autograph-dispatcher';

let autographActionsCreators = {

	changeNewMessage(newMessage) {

		let action = {
			type: 'change-new-message',
			payload: {
				content: newMessage
			}
		};

		dispatcher.dispatch(action);

	},

	submitNewMessage() {

		let action = {
			type: 'submit-new-message'
		};

		dispatcher.dispatch(action);
	}

};

export default autographActionsCreators;