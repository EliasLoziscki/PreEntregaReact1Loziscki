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
    {
        id: '4',
        name: 'Galaxy Tab A7 Lite',
        price: '900',
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_604632-MLU70025572563_062023-F.webp',
        stock: 33,
        description: 'Galaxy Tab A7 Lite',
    },
    {
        id: '5',
        name: 'Samsung Galaxy Tab A A8',
        price: '1200',
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_805875-MLA52222806805_102022-F.webp',
        stock: 30,
        description: 'Samsung Galaxy Tab A A8',
    },
    {
        id: '6',
        name: 'Notebook Huawei MateBook D14',
        price: '2200',
        category: 'notbook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_933750-MLA45057868424_032021-F.webp',
        stock: 10,
        description: 'Notebook Huawei MateBook D14',
    },
    {
        id: '7',
        name: 'Ebook',
        price: '1000',
        category: 'notbook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_933750-MLA45057868424_032021-F.webp',
        stock: 33,
        description: 'Ebook',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 1500)
    })
}