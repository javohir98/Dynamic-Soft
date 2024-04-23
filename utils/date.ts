import dayjs from 'dayjs';

// import en from "dayjs/locale/en";
import ru from 'dayjs/locale/ru';
// import uz from "dayjs/locale/uz-latn";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeDate from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeDate);
dayjs.locale(ru);
dayjs.extend(customParseFormat);

// const locales = { ru, uz, en };

// const getLocale = () => {
//   const language = getCurrentLanguage();
//   return locales[language as keyof typeof locales];
// };

// dayjs.locale(getLocale());

const dateFormats = {
  displayDate: 'MMM DD, YYYY',
  displayDateTime: 'MMM DD, YYYY HH:mm',
  time: 'HH:mm',
};

const formatDate = (date: Date | null, formatString: string) => {
  return dayjs(date).format(formatString);
};

const formatDateToDistance = (date: Date, compareDate: Date = new Date()) => {
  return dayjs(date).from(compareDate);
};

const addDate = (date: Date, number: number, unit: dayjs.ManipulateType) => {
  return dayjs(date).add(number, unit).toDate();
};

const subtractDate = (date: Date, number: number, unit: dayjs.ManipulateType) => {
  return dayjs(date).subtract(number, unit).toDate();
};

const parseDate = (date: string, format: string) => {
  return dayjs(date, format).toDate();
};

export {
  /*  getLocale, */ dateFormats,
  formatDate,
  formatDateToDistance,
  addDate,
  subtractDate,
  parseDate,
};
