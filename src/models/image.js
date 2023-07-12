const mongoes = require('mongoose');
const { Schema } = mongoes;
const path = require('path');

const imageSchema =new Schema({
    title:{ type: String },
    description: { type: String},
    filename: { type: String},
    vews: { type: Number, default: 0},
    likes: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now}
     
});



imageSchema.virtual('uniqueId')
    .get(function(){
        return this.filename.replace(path.extname(this.filename), '')
    });

module.exports = mongoes.model('Image', imageSchema);