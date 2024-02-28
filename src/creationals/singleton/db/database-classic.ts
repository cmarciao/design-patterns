import { User } from '../types/User';

/**
 * This class is written in a way that can also be done in other programming
 * languages, this class does not use many features of typescript and
 * javascript itself.
 */
export class DatabaseClassic {
	private static _instance: DatabaseClassic | null = null;
	private users: User[] = [];

	private constructor() {}

	/**
     * Gets the instance of the class or creates it and returns it if it
     * doesn't exist.
     *
     * @returns the instance of class.
     */
	static getInstance(): DatabaseClassic {
		if(this._instance === null) {
			this._instance = new DatabaseClassic();
		}

		return this._instance;
	}

	/**
     * Adds a new user.
     *
     * @param user new user to insert
     */
	add(user: User): void {
		this.users.push(user);
	}

	/**
     * Show all users.
     */
	show(): void {
		this.users.forEach((user) => {
			console.log(user);
		});
	}

	/**
     * Removes an user by their index.
     *
     * @param index index of the user to be removed
     */
	remove(index: number): void {
		this.users.splice(index, 1);
	}
}
