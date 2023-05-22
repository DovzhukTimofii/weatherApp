
export const FirstDay = () => {
    const getNextDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const nextDayIndex = (date.getDay() + 1) % 7; 
        return daysOfWeek[nextDayIndex];
    };

    return (
        <span className='weather__future-day'>{getNextDayOfWeek(new Date())}</span>
    )
}

export const SecondDay = () => {
    const getNextDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const nextDayIndex = (date.getDay() + 2) % 7; 
        return daysOfWeek[nextDayIndex];
    };

    return (
        <span className='weather__future-day'>{getNextDayOfWeek(new Date())}</span>
    )
}

export const ThirdDay = () => {
    const getNextDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const nextDayIndex = (date.getDay() + 3) % 7; 
        return daysOfWeek[nextDayIndex];
    };

    return (
        <span className='weather__future-day'>{getNextDayOfWeek(new Date())}</span>
    )
}

export const FourthDay = () => {
    const getNextDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const nextDayIndex = (date.getDay() + 4) % 7; 
        return daysOfWeek[nextDayIndex];
    };

    return (
        <span className='weather__future-day'>{getNextDayOfWeek(new Date())}</span>
    )
}

export const FifthDay = () => {
    const getNextDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const nextDayIndex = (date.getDay() + 5) % 7; 
        return daysOfWeek[nextDayIndex];
    };

    return (
        <span className='weather__future-day'>{getNextDayOfWeek(new Date())}</span>
    )
}

export const SixthDay = () => {
    const getNextDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const nextDayIndex = (date.getDay() + 6) % 7; 
        return daysOfWeek[nextDayIndex];
    };

    return (
        <span className='weather__future-day'>{getNextDayOfWeek(new Date())}</span>
    )
}
