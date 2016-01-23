var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:_id', function(req, res, next) {
  res.render('phone', { title: 'Express',
    phone: {
      _id: 1,
      name: "Mate8",
      url: "/images/honor7.jpg",
      description: "vmall独家首发64G版、128G版，下次销售时间1月6日 10:08 （年度旗舰新品，搭载麒麟950芯片，高性能与长续航的结合！成功下单后，参照支付顺序15天内发货）疯狂22小时活动，全国招募进行中。",
      price: 3699,
      ship: "满 99 免运费"
    }
  })
});

module.exports = router;