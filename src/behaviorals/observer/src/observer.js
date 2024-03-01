/* eslint-disable @typescript-eslint/no-this-alias */
/** Concrate Observable */
/**
 * This is an observable class, which will have observers and notify them of
 * notifications.
 */
var InputObservable = /** @class */ (function () {
	function InputObservable(element) {
		this.element = element;
		this.observers = [];
	}
	/**
     * Adds a new observer who will receive the new notifications.
     *
     * @param observers new observer who will receive the notifications.
     */
	InputObservable.prototype.subscribe = function () {
		var _this = this;
		var observers = [];
		for (var _i = 0; _i < arguments.length; _i++) {
			observers[_i] = arguments[_i];
		}
		observers.forEach(function (observer) {
			if (!_this.observers.includes(observer)) {
				_this.observers.push(observer);
			}
		});
	};
	/**
     * Removes a observer from the observers list.
     *
     * @param observer observer wich will be removed.
     */
	InputObservable.prototype.unsubscribe = function (observer) {
		var observerIndex = this.observers.indexOf(observer);
		if (observerIndex !== -1) {
			this.observers.splice(observerIndex, 1);
		}
	};
	/**
     * Notify all observers of a new notification.
     */
	InputObservable.prototype.notify = function () {
		var _this = this;
		this.observers.forEach(function (observer) { return observer.update(_this); });
	};
	return InputObservable;
}());
/** Concrate Observer */
/**
 * This is an observer class that will receive notifications of updates from
 * its observers.
 */
var ParagraphObserver = /** @class */ (function () {
	function ParagraphObserver(element) {
		this.element = element;
	}
	/**
     * This function will be triggered when the observable class notifies a
     * new data.
     *
     * @param observable data updated.
     */
	ParagraphObserver.prototype.update = function (observable) {
		if (observable instanceof InputObservable) {
			this.element.innerText = observable.element.value;
		}
	};
	return ParagraphObserver;
}());
/** Client code */
function makeInput() {
	var input = document.createElement('input');
	document.body.appendChild(input);
	return input;
}
function makeParagraph() {
	var paragraph = document.createElement('p');
	document.body.appendChild(paragraph);
	return paragraph;
}
var inputObservable = new InputObservable(makeInput());
var firstParagraphObserver = new ParagraphObserver(makeParagraph());
var secondParagraphObserver = new ParagraphObserver(makeParagraph());
var thirdParagraphObserver = new ParagraphObserver(makeParagraph());
inputObservable.subscribe(firstParagraphObserver, secondParagraphObserver, thirdParagraphObserver);
inputObservable.element.addEventListener('keyup', function () {
	/**
     * This logic is only for using the unsubscribe method.
     */
	if (inputObservable.element.value.length > 10) {
		inputObservable.unsubscribe(secondParagraphObserver);
	}
	else {
		inputObservable.subscribe(secondParagraphObserver);
	}
	/**
     * Notify all the observers;
     */
	inputObservable.notify();
});
