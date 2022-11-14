const router = require('express').Router()
const sequelize = require('../config/connection');
const { Art, Item, User, Comment } = require('../models');


router.get('/', (req,res) => {
    res.render('homepage')
})


router.get('/museum', (req, res) => {
    // res.render('homepage', data )
    // res.render('homepage')
        Item.findAll({

        
        attributes: [
        'id',
        'cobjid',
        'title',
        'department',
        'culture',
        'artistnation',
        'endby',
        'linkresource'
        ] ,
        order: [['endby', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'item_id', 'user_id', 'created_at'],
                include: {
                model: User,
                attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
            ]      
    })
            .then(dbItemData => {
                //Serializing the data for reading
                let dataItems = dbItemData.map((item) => item.get({ plain: true }))
                //rendering the homepage handler bars -- also sending the data for all items (dataItems) to the homepage handlerbars
               console.log(dataItems)
                res.render("museum", {
                    dataItems  // Array
                })
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

  

// router.get('/museum', (req, res) => {

// res.render("musuem")

// })


module.exports = router