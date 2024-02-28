/**
 * You can import any database class here, but remember to import the same class
 * in module B.
 */
import {DatabaseClassic} from '../db/database-classic';

/**
 * Adding users
 */
DatabaseClassic
	.getInstance()
	.add({ name: 'Neymar', age: 32 });

DatabaseClassic
	.getInstance()
	.add({ name: 'Xamuel', age: 18 });

DatabaseClassic
	.getInstance()
	.add({ name: 'Raluca', age: 19 });
