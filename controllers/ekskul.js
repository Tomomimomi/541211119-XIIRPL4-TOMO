const Ekskul = require('../models/Ekskul')

module.exports = {
    //semua user
    index: async (req, res) => {
        try{
            const ekskuls = await Ekskul.find()
            res.json(ekskuls);
            // if(users.length > 0){
            //     res.status(200).json({
            //         status: true,
            //         data: users,
            //         method: req.method,
            //         url: req.url
            //     })
            // } else{
            //     res.json({
            //         status: false,
            //         message: "Datanya Gak Ada (?)"
            //     })
            // }
        } catch(error){
            res.status(400).json({success: false})
        }
    },

    // user berdasar id 
    show:  async (req, res) => {
        try {
            const ekskul = await Ekskul.findById(req.params.id)
            res.json({
                status: true,
                data: ekskul,
                method: req.method,
                url: req.url,
                message: "Data didapatkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
       
    },
    
    store: async (req, res) => {
        try {
            const ekskul = await Ekskul.create(req.body)
            res.status(200).json({
                status: true,
                data: ekskul,
                method: req.method,
                url: req.url,
                message: "Data Udah Ditambahin"
            }) 
        } catch (error) {
            res.status(400).json({success: false, message: error.message})
        }
    },
    update:  async (req, res) => {
        try {
            const ekskul = await Ekskul.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
                runValidators:true
            })
            res.json({
                status: true,
                data: ekskul,
                method: req.method,
                url: req.url,
                message: "Data Udah Berubah"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
       
    },
    delete: async (req, res) => {
        try {
            await Ekskul.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data Udah Diilangin"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    }

} 