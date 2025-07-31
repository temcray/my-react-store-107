const products = [
    {
        _id: 1, //the id most Eq
        title: "Headphone",
        price: 60.00,
        image: "Headphone.jpeg",
        category: "Electronics"
    },

    {
        _id: 2, //the id most Eq
        title: "Cellphone",
        price: 160.00,
        image: "Cellphone.jpeg",
        category: "Electronics"
    },

    {
        _id: 3, //the id most Eq
        title: "Tablet",
        price: 90.00,
        image: "Tablet.jpeg",
        category: "Electronics"
    },

    {
        _id: 4, //the id most Eq
        title: "Computer",
        price: 689.00,
        image: "Computer.jpeg",
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