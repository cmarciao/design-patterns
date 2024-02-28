import { User } from '../types/User';

/**
 * This class was written using immediately invoked function expression (IIFE).
 */
export const DatabaseFunction = (() => {
	const  users: User[] = [];

	return {

		/**
         * Adds a new user.
         *
         * @param user new user to insert
        */
		add(user: User): void {
			users.push(user);
		},

		/**
         * Show all users.
        */
		show(): void {
			users.forEach((user) => {
				console.log(user);
			});
		},

		/**
         * Removes an user by their index.
         *
         * @param index index of the user to be removed
        */
		remove(index: number): void {
			users.splice(index, 1);
		}
	};
})();
