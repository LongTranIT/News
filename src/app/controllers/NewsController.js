const News = require('../models/News');

class NewsController {
    // [GET] /home
    showHome(req, res, next) {
        Promise.all([
            News.find({})
                .sort({ '_id': -1 })
                .limit(5)
                .lean(),
            News.find({ catelogy: "sports" })
                .lean(),
            News.find({ catelogy: "technology" })
                .lean(),
            News.find({ catelogy: "business" })
                .lean(),
            News.find({ catelogy: "entertainment" })
                .lean(),
        ])
            .then(([news, sports, technology, business, entertainment]) => {
                res.render('home', { news, sports, technology, business, entertainment });
            });
    }

    // [GET] /search:q
    search(req, res, next) {
        News.find({title: {$regex: req.query.q, $options: 'i'}})
            .lean()
            .then(news => {
                res.render('search', { news});
            })
            .catch(next);
    }

    // [GET] /:catelogy
    showCatelogy(req, res, next) {
        News.find({ catelogy: req.params.catelogy })
            .lean()
            .then(news => {
                res.render('catelogy', { news });
            })
            .catch(next);
    }
    // [GET] /contact
    contact(req, res, next) {
        News.find({})
            .lean()
            .then(news => {
                res.render('contact', { news });
            })
            .catch(next);
    }
    // [GET] /:catelogy/:slug
    showDetail(req, res, next) {
        News.findOne({ slug: req.params.slug})
            .lean()
            .then(news => {
                news.text = news.text.replace(/(?:\r\n|\r|\n)/g, '<br>');
                res.render('detail', { news});
            })
            .catch(next);
    }
    
}

module.exports = new NewsController;