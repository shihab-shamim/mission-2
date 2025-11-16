// utility types

type Product ={
    id:number,
    name:string,
    price:string,
    stock:number,
    color?:string,

}

type ProductSummary = Pick<Product, "id" | "name" | "price">;


// type ProductSummery={
//     id:number,
//     name:string,
//     price:string,
// }

type ProductWithOutStock=Omit <Product,"stock">

type ProductWithColor= Required <Product>

const Product:ProductWithColor={
    id:22,
    name:"jdk",
    price:"300",
    stock:100,
    color:"74"
}
type OptionalProduct =Partial<Product>

type ProductReadonly =Readonly<Product>


const emptyObj:Record<string,unknown>={}

const product1={
     id:22,
    name:"jdk",
    price:"300",
}