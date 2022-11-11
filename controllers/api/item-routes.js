const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Art, Item, User, Comment } = require('../../models');


// Add sorting for-when showing  All - BEG
router.get('/sort/:sort', (req, res) => {

  // Evaluate SORT Selection - BEG 
  // Will receive Sort Parameter
  evalSortParam = req.params.sort

  fDirection = evalSortParam

  sortfDir = 'ASC'
  lastLetter = fDirection.slice(-1)

  // console.log("Last ", lastLetter)
  // console.log("2nd last", fDirection[fDirection.length - 2])

  if ((fDirection[fDirection.length - 2]) == '*') {
    lastLetter = fDirection.slice(-1)

    evalSortParam = fDirection.substr(0,fDirection.length-2)
  }
// console.log(evalSortParam)
  fSortBy = `endby`
//    switch (LOWER(evalSortParam))  {    "LOWER" DOESN'T WORK
  switch (evalSortParam)  {
    case 'title':
      fSortBy = `title`
      break 
    case 'department':
      fSortBy = `department`
      break 
    fSortBy = `culture`
      break 
    case 'artistnation':
      fSortBy = `artistnation`
      break 
    // case 'endby':
    //   fSortBy = `endby`
    //   break 

  }  
  
  // Will assigned SORT-direction based on if second Last character is "*" and last character "A" or "D" 
  if ((fDirection[fDirection.length - 2]) == '*') {
    lastLetter = fDirection.slice(-1)
// console.log(1,evalSortParam)
    evalSortParam = fDirection.substr(0,fDirection.length-2)
// console.log(2,evalSortParam)

    if (lastLetter=='D') {
      sortfDir = 'DESC'
    } else if (fSortBy=='endby' && lastLetter=='D') {
      sortfDir = 'DESC'
    } else {
      sortfDir = 'ASC'
    }
  }
///

  
  // Evaluate SORT Selection - END

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
    // order: [['endby', 'DESC']],
    // order: [[`${fSortBy}`, 'DESC']],   // Assign Sort-by by parameter
    order: [[`${fSortBy}`, `${sortfDir}`]],
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

// Add sorting - END

// get all users
router.get('/', (req, res) => {
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
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/:id&:culture', (req, res) => {
router.get('/:id', (req, res) => {
  // console.log('Id parameter')
  // console.log(req.params, req.params('id'))
  // console.log(req.params, req.params('culture'))
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

// Two Searches - BEG
router.get('/culture/:culture/endby/:endby', (req, res) => {
  // console.log('Culture parameter')
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
       }yes
       res.json(dbItemData);
     })
     .catch(err => {
       console.log(err);
      res.status(500).json(err);
     });
 });

// Two Searches - END


// Will try to get Sort - BEG
router.get('/culture/:culture/sort/:sort', (req, res) => {

  // Evaluate SORT Selection
  // Will receive Sort Parameter
  evalSortParam = req.params.sort

//
fDirection = evalSortParam
// console.log(fDirection[fDirection.length - 2])

  // CVouldnt get it to work
  sortfDir = 'ASC'
  lastLetter = fDirection.slice(-1)

  // console.log("Last ", lastLetter)
  // console.log("2nd last", fDirection[fDirection.length - 2])

  // Will assigned SORT-direction based on if second Last character is "*" and last character "A" or "D" 
  if ((fDirection[fDirection.length - 2]) == '*') {
    lastLetter = fDirection.slice(-1)
// console.log(1,evalSortParam)
    evalSortParam = fDirection.substr(0,fDirection.length-2)
// console.log(2,evalSortParam)

    if (lastLetter=='D') {
      sortfDir = 'DESC'
    } else if (fSortBy=='endby' && lastLetter=='D') {
      sortfDir = 'DESC'
    } else {
      sortfDir = 'ASC'
    }
  }
  //


  fSortBy = `endby`
//    switch (LOWER(evalSortParam))  {    "LOWER" DOESN'T WORK
  switch (evalSortParam)  {
    case 'title':
      fSortBy = `title`
      break 
    case 'department':
      fSortBy = `department`
      break 
      // case 'culture':     It is selected by Culture
      //   fSortBy = `culture`
      //   break 
    case 'artistnation':
      fSortBy = `artistnation`
      break 
    case 'endby':
      fSortBy = `endby`
      break 

  }

  // console.log(lastLetter, fDirection, evalSortParam, sortfDir)
  // Evaluate SORT Selection


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
     //  order: `${fSortBy}`,
//    order: [[`${fSortBy}`, 'DESC']],
     order: [[`${fSortBy}`, `${sortfDir}`]],    //Couldnt get it to work
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
// Will try to get Sort - END


// Culture search is now working
router.get('/culture/:culture', (req, res) => {
  //  console.log('Culture parameter')
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


module.exports = router;