import data from '@/mock/characters.json';

const characters: Array<COMMON.ICharacter> = data.results;

const tableHeaders = [
    {
        title: 'Номер',
        value: 'id',
        width: '10%'
    },
    {
        title: 'Фото',
        value: 'image',
        width: '20%'
    },
    {
        title: 'Имя',
        value: 'name',
        width: '30%'
    },
    {
        title: 'Статус',
        value: 'status',
        width: '15%'
    },
    {
        title: 'Пол',
        value: 'gender',
        width: '15%'
    },
];

const filterArray = (arr: Array<any>, offset: number): Array<any> => {
    return arr.slice(offset, offset + 10);
}

const range = (from: number, to: number): number[] => {
    const range = [];
    from = from > 0 ? from : 1;
    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range;
}

const paginationItems = (value: number, length: number, total: number): Array<number | string> => {
    let first;
    let current = value;
    let last;
    
    if (value !== 1 && value !== length) {
        first = value - 1;
        last = value + 1;
    } else {
        value === 1 ? last = value + 1 : first = value - 1;
    }

    const result: Array<number> = [];
    first && result.push(first);
    result.push(current);
    last && result.push(last);

    return result;
    // const totalVisible = value <= 3 || value >= length - 2 ? 5 : total;
    // const maxLength = Math.min(Math.max(0, totalVisible) || length, length);

    // if (length <= maxLength) {
    //     return range(1, length);
    // }

    // const even = maxLength % 2 === 0 ? 1 : 0;
    // const left = Math.floor(maxLength / 2);
    // const right = length - left + 1 + even;

    // if (value > left && value < right) {
    //     console.log(1);
    //     const firstItem = 1;
    //     const lastItem = length;
    //     const start = value - left + 2;
    //     const end = value + left - 2 - even;
    //     const secondItem = start - 1 === firstItem + 1 ? 2 : '...';
    //     const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...';

    //     return [1, secondItem, ...range(start, end), beforeLastItem, length];
    // } else if (value === left) {
    //     console.log(1);
    //     const end = value + left - 1 - even;
    //     return [...range(1, end), '...', length];
    // } else if (value === right) {
    //     console.log(1);
    //     const start = value - left + 1;
    //     return [1, '...', ...range(start, length)];
    // } else {
    //     console.log(1);
    //     return [...range(1, left), '...', ...range(right, length)];
    // }
}

export { characters, tableHeaders, filterArray, paginationItems };