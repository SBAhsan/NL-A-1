When we use 'any' in typescript, it allows anything as a value. Receiving anything as a value is not a good idea. Because if there is any error it won't show it before compiling while typescript shows show it before runtime. For example:

const value: any = 'Shanda';

If we use value.toFixed(), it won't throw any error but will crash in runtime because toFixed() can not be used for string type.

On the other hand, 'unknown' requires an specific type of value where its type must be declared explicitly. So, it can show error before runtime if there any. If we take the earlier example with unknown:

const value: unknown = 'Shanda';

It will show error instantly while writing the code as toFixed() can not be used for string type.


Type narrowing refers to the process where a block checks the value type of the received input and implements the code in it when the condition meets. As example:

if(typeof input === 'string'){
    return 'String';
}