import credentials from '../credentials.json';

export default function getPassword(userRequired)
{
    const user = credentials;
    const username = user.username.toString();
    const password = user.password.toString();
    if (userRequired === username) {
        return password;
    }
    else{
        throw "user not found";
    }
}
