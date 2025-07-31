const products = [
    {
        _id: 1, //the id most Eq
        title: "Headphone",
        price: 60.00,
        image: "https://th.bing.com/th/id/OIP.1lGKhbTN9MvGsH5AmQrSawHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
        category: "Electronics"
    },

    {
        _id: 2, //the id most Eq
        title: "Cellphone",
        price: 160.00,
        image: "https://th.bing.com/th/id/OIP.HxCUDuhXiUIYR73NuIvIvQHaEp?w=243&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
        category: "Electronics"
    },

    {
        _id: 3, //the id most Eq
        title: "Tablet",
        price: 90.00,
        image: "https://th.bing.com/th/id/OIP.fRGEyXvRKAEi7Y0a5rf1LQHaEo?w=271&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
        category: "Electronics"
    },

    {
        _id: 4, //the id most Eq
        title: "Computer",
        price: 689.00,
        image: "https://th.bing.com/th/id/OIP.SN51uhQK2XJr3po6hRgDhQHaEi?w=280&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
        category: "Electronics"
    },


];





class DataService {
    static getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            },
                500);
        }
        );
    }
    // get products by id
    static getProductsByID9(_id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = products.find((P) => p._id === _id);
                resolve(product);
            },
                300);
        }
        );
    }
}

export default DataService