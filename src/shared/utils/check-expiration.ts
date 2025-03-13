export const checkExpiration = (date: Date): boolean => {
    return date.getTime() > new Date().getTime();
};