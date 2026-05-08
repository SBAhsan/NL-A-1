# Why `any` is Unsafe and `unknown` is Better in TypeScript

## Introduction:

In TypeScript, the `any` and `unknown` types both accept any value, but they behave very differently when it comes to safety. So understanding the difference and knowing how to use type narrowing, is essential for writing reliable TypeScript code.


## The Problem with `any`

When we use 'any' in typescript, it allows anything as a value. Receiving anything as a value is not a good idea. Because if there is any error it won't show it before compiling while typescript shows show it before runtime. For example:

const value: any = 'Shanda';

If we use value.toFixed(), it won't throw any error but will crash in runtime because toFixed() can not be used for string type.


## Why `unknown` is the Safer Choice

On the other hand, 'unknown' requires an specific type of value where its type must be declared explicitly. So, it can show error before runtime if there any. If we take the earlier example with unknown:

const value: unknown = 'Shanda';

It will show error instantly while writing the code as toFixed() can not be used for string type.


## Type Narrowing

Type narrowing refers to the process where a block checks the value type of the received input and implements the code in it when the condition meets. As example:

if(typeof input === 'string'){
    return 'String';
}


## Conclusion

Using `any` silences TypeScript's safety checks, while `unknown` enforces them. Type narrowing is the mechanism that lets us safely work with `unknown` values by verifying their type before use.
