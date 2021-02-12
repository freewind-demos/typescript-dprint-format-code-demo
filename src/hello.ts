const a = [1, 2, 3, 4].map(it => it * 2)
    .filter((it) => it > 2);

// can't handle
let b: string | undefined = undefined;
b ??= 'default';

// can't handle
type Pair = [name: string, value: string]
