/**
 * @module repositories/user
 * @description This module serves as an example of repository files.
 */
import userData from '../../public/user.json' with {type: "json"};

export const getUsers = () => {
    return userData;
}