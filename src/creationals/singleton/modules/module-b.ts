/**
 * You can import any database class here, but remember to import the same class
 * in the module A.
 */
import {DatabaseClassic} from '../db/database-classic';

/**
 * When the a-module is imported, all users added by it are
 * added to the database
 */
import './module-a';

/**
 * Adding users
 */
DatabaseClassic
	.getInstance()
	.add({ name: 'David', age: 10 });

DatabaseClassic
	.getInstance()
	.add({ name: 'Elias', age: 4 });

DatabaseClassic
	.getInstance()
	.add({ name: 'Jeff', age: 39 });

/**
 * Showing all users
 */

DatabaseClassic.getInstance().show();
