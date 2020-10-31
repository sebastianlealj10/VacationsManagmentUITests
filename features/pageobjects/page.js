export default class Page {

    open (path) {
        return browser.url(`https://vacations-management.herokuapp.com//${path}`)
    }
}

