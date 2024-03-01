type Observer = {
    update(...args: unknown[]): void;
}

type Observable = {
    subscribe(...observers: Observer[]): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

/** Concrate Observable */

/**
 * This is an observable class, which will have observers and notify them of
 * notifications.
 */
class InputObservable implements Observable {
	private observers: Observer[] = [];

	constructor(public element: HTMLInputElement) {}

	/**
     * Adds a new observer who will receive the new notifications.
     *
     * @param observers new observer who will receive the notifications.
     */
	subscribe(...observers: Observer[]): void {
		observers.forEach((observer) => {
			if(!this.observers.includes(observer)) {
				this.observers.push(observer);
			}
		});
	}

	/**
     * Removes a observer from the observers list.
     *
     * @param observer observer wich will be removed.
     */
	unsubscribe(observer: Observer): void {
		const observerIndex = this.observers.indexOf(observer);

		if(observerIndex !== -1) {
			this.observers.splice(observerIndex, 1);
		}
	}

	/**
     * Notify all observers of a new notification.
     */
	notify(): void {
		this.observers.forEach((observer) => observer.update(this));
	}

}

/** Concrate Observer */

/**
 * This is an observer class that will receive notifications of updates from
 * its observers.
 */
class ParagraphObserver implements Observer {
	constructor(public element: HTMLParagraphElement) {}

	/**
     * This function will be triggered when the observable class notifies a
     * new data.
     *
     * @param observable data updated.
     */
	update(observable: Observable): void {
		if(observable instanceof InputObservable) {
			this.element.innerText = observable.element.value;
		}
	}
}

/** Client code */
function makeInput(): HTMLInputElement {
	const input = document.createElement('input');

	document.body.appendChild(input);

	return input;
}

function makeParagraph(): HTMLParagraphElement {
	const paragraph = document.createElement('p');

	document.body.appendChild(paragraph);

	return paragraph;
}

const inputObservable = new InputObservable(makeInput());

const firstParagraphObserver = new ParagraphObserver(makeParagraph());
const secondParagraphObserver = new ParagraphObserver(makeParagraph());
const thirdParagraphObserver = new ParagraphObserver(makeParagraph());

inputObservable.subscribe(
	firstParagraphObserver,
	secondParagraphObserver,
	thirdParagraphObserver
);

inputObservable.element.addEventListener('keyup', () => {

	/**
     * This logic is only for using the unsubscribe method.
     */
	if(inputObservable.element.value.length > 10) {
		inputObservable.unsubscribe(secondParagraphObserver);
	} else {
		inputObservable.subscribe(secondParagraphObserver);
	}

	/**
     * Notify all the observers;
     */
	inputObservable.notify();
});
