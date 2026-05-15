// Controller handling the general application routes
export default class AppController {
  // Returns a 200 status and the welcome message
  static getHomepage(request, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}
