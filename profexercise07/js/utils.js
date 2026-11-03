export function greet(name) {
    return `Hello, ${name}!`;
}

export const MODULE_OATMEAL = "Module Oatmeal";

export function processFullName(fullName) {
    fullName = fullName.trim();
    fullName = fullName || "Guest";
    const spaceIndex = fullName.indexOf(" ");
    if(spaceIndex != -1) {
        const first = fullName.slice(0,spaceIndex);
        const last = fullName.slice(spaceIndex+1).trim();
        fullName = `${first} of House ${last}`;
    }
    return fullName;
}

export function calculateBirthYear(age) {
    const currentYear = new Date().getFullYear();
    age = Number(age);
    return (currentYear - age);
}

export function checkInRenaissance(year) {
    return (year >= 1300 && year <= 1600);
}