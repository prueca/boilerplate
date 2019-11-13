export default class IndexController {
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
