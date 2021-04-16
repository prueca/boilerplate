import BaseController from './BaseController'

export default class MainController extends BaseController {
  constructor() {
    super()
  }

  main(request, response) {
    response.send('Hello World!')
  }
}
