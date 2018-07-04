 import dispatcher from './autograph-dispatcher';
 import {EventEmitter} from 'events';

 const autographStoreChangeEvent = 'autograph-store-change-event';

 class AutographStore extends EventEmitter {

 	constructor() {
 		super();
 		
 		dispatcher.register(this.handleAction.bind(this));

 		this._newMessage = '';
 		this._messageList = [];
 		// {id: 1, content: "yo hoho"}
 	}

 	get newMessage() {
 		return this._newMessage;
 	}

 	get messageList() {
 		return this._messageList;
 	}

 	handleAction(action) {

 		console.log(action.type);

 		switch(action.type) {

 			case 'change-new-message':
 				this._newMessage = action.payload.content;
 				this.emitChange();
 				break;

 			case 'submit-new-message':
 				this._checkSubmitNewMessage();
 				this.emitChange();
 				break;
 		}
 	}

 	_checkSubmitNewMessage() {

		if (this._newMessage.trim().length > 0) {
			let message = {
				id: Date.now(),
				content: this._newMessage
			};

			this._messageList.push(message);
			this._newMessage = '';
		}
 	}

 	emitChange() {
 		this.emit(autographStoreChangeEvent);
 	}

 	addEventListener(callback) {
 		this.on(autographStoreChangeEvent, callback);
 	}

 	removeEventListener(callback) {
 		this.removeListener(autographStoreChangeEvent, callback);
 	}
 }

let autographStore = new AutographStore();

export default autographStore;


