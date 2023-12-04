/*
 * index - get to list multiple records.
 * show - get to display a specific record.
 * create - post to create a record.
 * update - put to update a record.
 * delete - delete to delete a record.
 */
class UsersController {
  create(request, response) {
    const { name, email, password } = req.body;
    res.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
