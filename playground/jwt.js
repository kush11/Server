const jwt=require('jsonwebtoken');

let payload={
    _id='Kush',
};

let secret='1234567';


let token =jwt.sign(payload,secret);
console.log(token)

let decode=jwt.verify(token,secret);
console.log(decode);