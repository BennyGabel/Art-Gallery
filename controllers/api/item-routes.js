const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Item, User, Comment } = require('../../models');

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
      'linkResource',
      'title',
      'endBy',
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE item.id = vote.post_id)'), 'vote_count']
    ],
    // order: [['created_at', 'DESC']],
    order: [['endBy', 'DESC']]  // ,
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
  Item.findOne({
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