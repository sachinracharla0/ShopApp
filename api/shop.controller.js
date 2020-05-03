const Shop = require('./shop.model');

const msgStatus = {
    success: 'SUCCESS',
    error: 'ERROR'
}

exports.createShop = (req, res) => {
    const shop = new Shop({
        shopName: req.body.shopName,
        shopType: req.body.shopType,
        shopOwner: req.body.shopOwner,
        shopAddress: {
            address: req.body.shopAddress,
            location: {
                lat: req.body.shopLocationLat,
                lng: req.body.shopLocationLng
            }
        }
    });

    shop.save().then(data => {
        return res.status(200).send({
            data: data,
            message: 'Shop is created successfully',
            status: msgStatus.success
        });
    }).catch(err => {
        return res.status(500).send({
            message: err.message || 'Some error occurred while creating the Shop.',
            status: msgStatus.error
        });
    });
}

exports.getAllShops = (req, res) => {
    Shop.find().then(data => {
        return res.status(200).send({
            data: data,
            message: 'Shops fetched successfully',
            status: msgStatus.success
        });
    }).catch(err => {
        return res.status(500).send({
            message: err.message || 'Some error occurred while fetching the Shops.',
            status: msgStatus.error
        });
    });
}

exports.getShopById = (req, res) => {
    Shop.findById(req.params.shopId).then(data => {
        return res.status(200).send({
            data: data,
            message: 'Shops fetched successfully',
            status: msgStatus.success
        });
    }).catch(err => {
        return res.status(500).send({
            message: err.message || 'Some error occurred while fetching the Shops.',
            status: msgStatus.error
        });
    });
}
exports.updateShop = (req, res) => {
    if (!req.params.shopId) {
        return res.status(400).send({
            message: 'Shop Id cannot be empty',
            status: msgStatus.error
        });
    }

    Shop.findByIdAndUpdate(req.params.shopId, {
        shopName: req.body.shopName,
        shopType: req.body.shopType,
        shopOwner: req.body.shopOwner,
        shopAddress: {
            address: req.body.shopAddress,
            location: {
                lat: req.body.shopLocationLat,
                lng: req.body.shopLocationLng
            }
        }
    }, { new: true }).then(data => {
        if (!data) {
            return res.status(404).send({
                message: `Shop with ID: ${req.params.shopId} is Not Found`,
                status: msgStatus.error
            });
        }
        return res.status(200).send({
            data: data,
            message: 'Shop updated successfully',
            status: msgStatus.success
        });
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Shop with ID: ${req.params.shopId} is Not Found`,
                status: msgStatus.error
            });
        }
        return res.status(500).send({
            data: shop,
            message: err.message || 'Some error occurred while updating the Shop.',
            status: msgStatus.error
        });
    });
}

exports.deleteShop = (req, res) => {
    if (!req.params.shopId) {
        return res.status(400).send({
            message: 'Shop Id cannot be empty',
            status: msgStatus.error
        });
    }

    Shop.findByIdAndRemove(req.params.shopId).then(data => {
        if (!data) {
            return res.status(404).send({
                message: `Shop with ID: ${req.params.shopId} is Not Found`,
                status: msgStatus.error
            });
        }
        return res.status(200).send({
            message: 'Shop deleted successfully',
            status: msgStatus.success
        });
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `Shop with ID: ${req.params.shopId} is Not Found`,
                status: msgStatus.error
            });
        }
        return res.status(500).send({
            data: shop,
            message: err.message || 'Some error occurred while updating the Shop.',
            status: msgStatus.error
        });
    });
}