const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: '1600',
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_799242-MLA44698671854_012021-O.webp',
        stock: 20,
        description: 'Iphone 12',
    },
    {
        id: '2',
        name: 'Samsung S23 ',
        price: '1000',
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_799242-MLA44698671854_012021-O.webp',
        stock: 20,
        description: 'Samsung S23',
    },
    {
        id: '3',
        name: 'Morotola Moto G32',
        price: '1000',
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_799242-MLA44698671854_012021-O.webp',
        stock: 33,
        description: 'Morotola Moto G32',
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}