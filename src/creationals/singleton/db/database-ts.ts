import { User } from '../types/User';

/**
 * This class was written using the typescript syntax to make it easier to get
 * the class instance and using the javascript import cache.
 */
export class DatabaseTs {
	private users: User[] = [];

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

export default new DatabaseTs();
