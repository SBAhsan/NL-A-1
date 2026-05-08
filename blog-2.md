'Pick' utility type: This type allows us to create new object type with particular properties to use from an existing object type based on our need. As example:

type Product = {
    id: number:
    name: string;
    price: string;
    stock: number;
    color?: string;
}

If we want pick some particular properties id, name and price:

type ProductPick = Pick<Product, 'id' | 'name' | 'price'>;


'Omit' utility type: Omit allows us to eliminate properties from an existing object type that have no use in particular cases. If we see an example:

type Product = {
    id: number:
    name: string;
    price: string;
    stock: number;
    color?: string;
}

If we want to remove the properties stock and color:

type ProductOmit = Omit<Product, 'stock' | 'color'>;


So, here we see that 'Pick' and 'Omit' helps us to avoid re-writing of the same object type with all its properties again and again. That means using these type reflects the DRY(Don't Repeat Yourself) term which is crucial for a developer to write a clean code.