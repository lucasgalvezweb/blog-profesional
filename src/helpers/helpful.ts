import { Month, monthText } from '../data/time.data';

const dateTime = new Date();

export const time = {
    dateTime: dateTime,
    day: dateTime.getDate(),
    month: dateTime.getMonth() + 1,
    year: dateTime.getFullYear(),
    hour: dateTime.getHours(),
    minutes: dateTime.getMinutes(),
    seconds: dateTime.getSeconds(),
}

const getMonthName = (monthNumber: number, lang: "es" | "en") => {
    const month = monthText.find(item => item.number === monthNumber)
    return month ? month[`name_${lang}` as keyof Month] : undefined;
}

export const customTimeText = {
    // Formatear la fecha y la hora como texto
    currentDateTime: `${time.year}-${time.month}-${time.day} ${time.hour}:${time.minutes}:${time.seconds}`,
    currentDateES: `${time.day}-${time.month}-${time.year}`, // Month in number
    currentDateMonthNameES: `${time.day} de ${getMonthName(time.month, 'es')}, ${time.year}`, // Month in text spanish
    currentDateMonthNameEN: `${getMonthName(time.month, 'en')} ${time.day}, ${time.year}`, // Month in text english
    currentTime: `${time.hour}:${time.minutes}:${time.seconds}`
}

export const getAge = (birthyear: number) => {
    const age = (time.year - birthyear)-1;
    return age
}
