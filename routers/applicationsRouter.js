const express = require("express");
const router = express.Router();

class ApplicationsRouter {
  constructor(
    applicationsController,
    notesController,
    interviewController,
    remindersController,
    verifyToken
  ) {
    this.applicationsController = applicationsController;
    this.remindersController = remindersController;
    this.notesController = notesController;
    this.interviewController = interviewController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    // Routes for Applications
    router.get("/", this.verifyToken, this.applicationsController.test);
    router.get("/:id", this.verifyToken, this.applicationsController.getOne);
    router.post(
      "/create",
      this.verifyToken,
      this.applicationsController.createOneApplication
    );
    router.put(
      "/edit/:id",
      this.verifyToken,
      this.applicationsController.editOne
    );
    router.delete(
      "/delete/:id",
      this.verifyToken,
      this.applicationsController.deleteOne
    );

    // Routes for Notes
    router.post(
      "/notes/create",
      this.verifyToken,
      this.notesController.createOneNote
    );
    router.put(
      "/notes/edit/:id",
      this.verifyToken,
      this.notesController.editOne
    );
    router.delete(
      "/notes/delete/:id",
      this.verifyToken,
      this.notesController.deleteOne
    );

    // Routes for Interviews
    router.post(
      "/interviews/create",
      this.verifyToken,
      this.interviewController.createOneInterview
    );
    router.put(
      "/interviews/edit/:id",
      this.verifyToken,
      this.interviewController.editOne
    );
    router.delete(
      "/interviews/delete/:id",
      this.verifyToken,
      this.interviewController.deleteOne
    );

    // Routes for Reminders

    router.get(
      "/reminders/getAll",
      this.verifyToken,
      this.remindersController.getAllReminders
    );
    router.post(
      "/reminders/create",
      this.verifyToken,
      this.remindersController.createOneReminder
    );
    router.put(
      "/reminders/edit/:id",
      this.verifyToken,
      this.remindersController.editOne
    );
    router.delete(
      "/reminders/delete/:id",
      this.verifyToken,
      this.remindersController.deleteOne
    );

    return router;
  };
}

module.exports = ApplicationsRouter;
