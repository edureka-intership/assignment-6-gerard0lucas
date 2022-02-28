const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lucas:lucas@cluster0.746rb.mongodb.net/restaurant?retryWrites=true&w=majority', 
                {useNewUrlParser: true , useUnifiedTopology : true}
            ).then(client => {
                
                    console.log(`connectedto db`)
            
            }).catch(err => {
                console.log(err);
            });