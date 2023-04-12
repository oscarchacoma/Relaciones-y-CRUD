const db = require("../database/models");
const Op = db.Sequelize.Op;
module.exports = {
      list: (req, res) => {
            db.Actors.findAll()
                  .then((actors) => {
                        res.render("actorsList", { actors });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
      recommended: (req, res) => {
            db.Actors.findAll({
                  where: {
                        rating: { [Op.gte]: 7 },
                  },
                  order: [["rating", "DESC"]],
                  limit: 10,
            })
                  .then((actors) => {
                        res.render("actorsRecommended", { actors });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
      detail: (req, res) => {
            db.Actors.findByPk(req.params.id)
                  .then((actor) => {
                        res.render("actorsDetail", { actor });
                  })
                  .catch((error) => {
                        res.send(error);
                  });
      },
};
