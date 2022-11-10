const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Art, Item, User, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Item.findAll({

    // attributes: [
    //   'id',
    //   'item_url',
    //   'title',
    //   'created_at',
    //   // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE item.id = vote.post_id)'), 'vote_count']
    // ],
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
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'cobjid',
      'title',
      'department',
      'culture',
      'artistnation',
      'endby',
      'linkresource'
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE item.id = vote.post_id)'), 'vote_count']
    ],
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
      if (!dbItemData) {
        res.status(404).json({ message: 'No item found with this id' });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Add Searches
// Two Searches - BEG
router.get('/culture/:culture/endby/:endby', (req, res) => {
  console.log('Culture parameter')
  Item.findAll({
     where: {
       culture: req.params.culture,
       endby: req.params.endby
     },
     attributes: [
       'id',
       'cobjid',
       'title',
       'department',
       'culture',
       'artistnation',
       'endby',
       'linkresource'
       //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE item.id = vote.post_id)'), 'vote_count']
     ],
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
       if (!dbItemData) {
         res.status(404).json({ message: 'No item found with this id' });
         return;
       }
       res.json(dbItemData);
     })
     .catch(err => {
       console.log(err);
      res.status(500).json(err);
     });
 });

// Two Searches - END




// Culture search is now working
router.get('/culture/:culture', (req, res) => {
   console.log('Culture parameter')
   Item.findAll({
      where: {
        culture: req.params.culture
      },
      attributes: [
        'id',
        'cobjid',
        'title',
        'department',
        'culture',
        'artistnation',
        'endby',
        'linkresource'
        //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE item.id = vote.post_id)'), 'vote_count']
      ],
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
        if (!dbItemData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
        res.json(dbItemData);
      })
      .catch(err => {
        console.log(err);
       res.status(500).json(err);
      });
  });

// by culture - END - 22.11.09 
// Add Searches

router.put('/:id', (req, res) => {
  Item.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: 'No item found with this id' });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Item.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: 'No item found with this id' });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;