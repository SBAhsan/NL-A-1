# `Pick` and `Omit` Utility Types in TypeScript

## Introduction

In TypeScript, rewriting the same object type again and again for different use cases is unnecessary and messy. The `Pick` and `Omit` utility types solve this problem by letting you create new types from existing ones keeping only what we need.


## The `Pick` Utility Type

This type allows us to create new object type with particular properties to use from an existing object type based on our need. As example:

type Product = {
    id: number:
    name: string;
    price: string;
    stock: number;
    color?: string;
}

If we want pick some particular properties id, name and price:

type ProductPick = Pick<Product, 'id' | 'name' | 'price'>;



## The `Omit` Utility Type

`Omit` allows us to eliminate properties from an existing object type that have no use in particular cases. If we see an example:

type Product = {
    id: number:
    name: string;
    price: string;
    stock: number;
    color?: string;
}

If we want to remove the properties stock and color:

type ProductOmit = Omit<Product, 'stock' | 'color'>;


## Conclusion

So, here we see that 'Pick' and 'Omit' help us to avoid re-writing of the same object type with all its properties again and again. That means using these type reflects the DRY(Don't Repeat Yourself) term which is crucial for a developer to write a clean code.