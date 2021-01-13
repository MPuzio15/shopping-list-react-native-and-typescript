interface Item {
    id: number;
    name: string;
    quantity: number;
    bought: boolean;
    onPress?: () => Item;
}

const Items: Item[]|null = [
    {
        id: 0,
        name: 'Mleko',
        quantity: 1,
        bought: false,
    },
    {
        id: 1,
        name: 'Chleb',
        quantity: 1,
        bought: false,
    },
    {
        id: 2,
        name: 'Orzechy',
        quantity: 50,
        bought: false,
    },
    {
        id: 3,
        name: 'Masło',
        quantity: 1,
        bought: false,
    },
    {
        id: 4,
        name: 'Miód',
        quantity: 1,
        bought: false,
    },
]

export { Item, Items };