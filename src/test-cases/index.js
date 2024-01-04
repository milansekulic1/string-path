const map1 = `
@--A-+
     |
     B-x`;

const map2 = `
@---A---+
        |
x-B-+   C
    |   |
    +---+`;

const map3 = `  
@
| +-C--+
A |    |
+---B--+
  |      x
  |      |
  +---D--+`;

const map4 = `
@---A---+
        |
x-B-+   |
    |   |
    +---C`;

const map5 = `
    +-O-N-+
    |     |
    |   +-I-+
@-G-O-+ | | |
    | | +-+ E
    +-+     S
            |
            x`;

const map6 = ` 
 +-L-+
 |  +A-+
@B+ ++ H
 ++    x`;

const map7 = ` 
 @-A--+
      |
      +-B--x-C--D`;

const map8 = ` 
   -A---+
        |
x-B-+   C
    |   |
    +---+`;

const map9 = `  
@--A---+
       |
 B-+   C
   |   |
   +---+`;

const map10 = `
@-A-+-B-x`;

const map11 = `
@x`;

const map13 = `
x-B-@-C-D`;

const convertStringToMatrix = (str) =>
  str
    .split('\n')
    .slice(1)
    .map((s) => s.split(''));

const matrix1 = convertStringToMatrix(map1);
const matrix2 = convertStringToMatrix(map2);
const matrix3 = convertStringToMatrix(map3);
const matrix4 = convertStringToMatrix(map4);
const matrix5 = convertStringToMatrix(map5);
const matrix6 = convertStringToMatrix(map6);
const matrix7 = convertStringToMatrix(map7);
const matrix8 = convertStringToMatrix(map8);
const matrix9 = convertStringToMatrix(map9);
const matrix10 = convertStringToMatrix(map10);
const matrix11 = convertStringToMatrix(map11);
const matrix12 = null;
const matrix13 = convertStringToMatrix(map13);
module.exports = {
  matrix1,
  matrix2,
  matrix3,
  matrix4,
  matrix5,
  matrix6,
  matrix7,
  matrix8,
  matrix9,
  matrix10,
  matrix11,
  matrix12,
  matrix13,
};
