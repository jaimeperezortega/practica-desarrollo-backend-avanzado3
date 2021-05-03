var express = require('express');
var router = express.Router();
const cote = require('cote');

const requester = new cote.Requester({name:'cliente de moneda'}) 

/* GET /monedas. */
router.get('/:cantidad/:desde/:hacia', function(req, res, next) {
    const {desde, hacia, cantidad } = req.params;
    requester.send({
        type:'convertir moneda',
        desde: desde,
        hacia: hacia,
        cantidad: cantidad
    }, resultado =>  {
        res.send(`cambiamos ${cantidad} ${desde} = ${resultado} ${hacia}`);
    });

});

module.exports = router;