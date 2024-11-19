let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let extension = [".com", ".ve"];

for(let p of pronoun) {

  for(let a of adj){

    for(let n of noun){

      for(let e of extension){

        let dominio = p + a + n + e;

        console.log(dominio);

      }
    }
  }
}