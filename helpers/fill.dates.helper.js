export default function getKeys(date)
{
    if (date === 2015) {
        return ['Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Enter'];
    }
    if (date === 1) {
        return ['Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow' , 'Enter']
    }
    if (date === 21) {
        return ['Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow', 'Up arrow' , 'Enter']
    }
    else{
        throw "year not found";
    }
}
