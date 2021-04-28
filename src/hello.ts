const a = [1, 2, 3, 4].map(it => it * 2)
    .filter((it) => it > 2);

// supported in new version now
let b: string | undefined = undefined;
b ??= "default";

// supported in new version now
type Pair = [name: string, value: string];
