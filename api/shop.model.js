const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    shopName: {
        type: String,        
        required: true
    },
    shopType: {
        type: String,        
        required: true
    },
    shopOwner: {
        type: String,        
        required: true,
    },
    shopAddress: {
        address: {
            type: String,            
            required: true            
        },
        location: {
            lat: {
                type: Number,                
                required: true
            },
            lng: {
                type: Number,                
                required: true
            }
        }
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Shop', shopSchema);