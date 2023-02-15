
export const to = (p: any) => p.then((data: any) => [null, data]).catch((err: any) => [err, null]);