const Quote = require('../models/quote.model'); //import Model

module.exports.fingAllQuotes = (req, res) => {
    Quote.find()
        .then(allquotes=>{
            res.json({results: allquotes})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.createQuote = (req, res)=>{
    Quote.create(req.body)
        .then(newQuote=>{
            res.json({results: newQuote})
        }) //put new quote in a variable newQuote
        .catch(err =>{
            console.log(err)
            res.json(err)
        }) // otherwise throw err 
}

module.exports.findOneQuote = (req, res)=>{
    Quote.findOne({_id: req.params.id })
        .then(oneQuote=>{
            res.json({results: oneQuote})
        })
        .catch(err =>{
            console.log(err)
            res.json(err)
        })

}


module.exports.updateOneQuote = (req, res)=>{
    Quote.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body
    )
        .then(updatedQuote =>{
            res.json({results: updatedQuote})
        })
        .catch(err =>{
            console.log(err)
            res.json(err)
        })

}
