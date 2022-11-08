const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Art, Item, User, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('=========  Art  =============');
  Art.findAll({

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
      'linkresource',
      'title',
      'endby'
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE item.id = vote.post_id)'), 'vote_count']
    ] //,
    // // // order: [['created_at', 'DESC']],
    // order: [['endby', 'DESC']]  // ,
    // order: [['endby', 'DESC']]  // ,
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'item_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Art.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'item_url',
      'title',
      'created_at',
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


router.put('/:id', (req, res) => {
  Art.update(
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
  Art.destroy({
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