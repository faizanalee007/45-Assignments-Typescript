// 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface tShirts{ Fabric: string, size:string, color:string, code: any, quantity: number, price: number }


let poloShirt: tShirts = {Fabric:'cotton', size:'Medium', color:'Blue', code: 7001, quantity: 250, price: 700 }


console.log(`\nPolo shirt's complete Description:\n\nFabric: ${poloShirt.Fabric}\nColor: ${poloShirt.color}\nSize: ${poloShirt.size}\nProduct Code: ${poloShirt.code}\nRetail Price: ${poloShirt.price} Rupees\nStock Available: ${poloShirt.quantity}\n`)