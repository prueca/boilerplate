export default class IndexController {
  /**
   * For API testing
   *
   * @param {Object} req
   * @param {Object} res
   */
  ping(req, res) {
    res.json({ status: 200 });
  }

  /**
   * Renders home page
   *
   * @param {Object} req
   * @param {Object} res
   */
  index(req, res) {
    res.render('index');
  }
}
