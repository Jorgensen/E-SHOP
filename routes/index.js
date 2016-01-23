var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
    phones: [
      {
        _id: 1,
        name: "Mate8",
        url: "/images/mate8.jpg",
        description: "vmall独家首发64G版、128G版，下次销售时间1月6日 10:08 （年度旗舰新品，搭载麒麟950芯片，高性能与长续航的结合！成功下单后，参照支付顺序15天内发货）疯狂22小时活动，全国招募进行中。",
        price: 3699,
        ship: "满 99 免运费"
      },
      {
        _id: 2,
        name: "Honor7",
        url: "/images/honor7.jpg",
        description: "vmall独家首发64G版、128G版，下次销售时间1月6日 10:08 （年度旗舰新品，搭载麒麟950芯片，高性能与长续航的结合！成功下单后，参照支付顺序15天内发货）疯狂22小时活动，全国招募进行中。",
        price: 3699,
        ship: "满 99 免运费"
      },
      {
        _id: 3,
        name: "G7 plus",
        url: "/images/g7plus.jpg",
        description: "vmall独家首发64G版、128G版，下次销售时间1月6日 10:08 （年度旗舰新品，搭载麒麟950芯片，高性能与长续航的结合！成功下单后，参照支付顺序15天内发货）疯狂22小时活动，全国招募进行中。",
        price: 3699,
        ship: "满 99 免运费"
      },
      {
        _id: 4,
        name: "P8",
        url: "/images/p8.jpg",
        description: "vmall独家首发64G版、128G版，下次销售时间1月6日 10:08 （年度旗舰新品，搭载麒麟950芯片，高性能与长续航的结合！成功下单后，参照支付顺序15天内发货）疯狂22小时活动，全国招募进行中。",
        price: 3699,
        ship: "满 99 免运费"
      },
    ]
  });
});

module.exports = router;
