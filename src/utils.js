export const getRandom = () => (Math.floor(Math.random() * 10) + 1)

export const getRndFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export const start = [2,3]