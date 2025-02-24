const { Router } = require("express");

const router = Router();

const controller = require("../controllers/controller");

router.get("/", controller.messagesListGet);

router.get("/message/:user", controller.messagesFindGet);

router.get("/new", controller.messagesInsertGet);

router.post("/new", controller.messagesInsertPost);

router.post("/message/:id/delete", controller.messageDeletePost);

module.exports = router;

/*
const { Router } = require("express");
const router = Router();

// initializes couple sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* route handler for root, listens for get request
renders index view template and sends it as a response 
res.render locals object makes title and messages available to index.ejs 
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

/* route handler for '/message/:user', listens for get request
defines a route parameter, /message/:user, that's used to capture the 
user value at its URL position 
router.get("/message/:user", (req, res) => {
  const user = req.params.user;
  // finds the message object with a user key. msg.user, that matches user
  const userMessage = messages.find((msg) => msg.user === user);

  // if no matching object exists,
  if (!userMessage) {
    // sets up status code manually and don't end req-res cycle
    return res.status(404).send("User not found or no messages available.");
  }

  /* renders messageDetails view template and sends it as a response
  res. render locals obejct maktes title and message available to messageDetails.ejs 
  res.render("messageDetails", {
    title: `${user}'s Message`,
    message: userMessage,
  });
});

/* route handler for "/new", listens for get request 
that renders form view template and sends it as response 
router.get("/new", (req, res) => {
  res.render("form");
});

// route handler for "/new", listens for post request
router.post("/new", (req, res) => {
  // if req.body object does not have values from message and user fields
  if (!req.body.message || !req.body.user) {
    /* sets up status code manually, return response to client, and ends
    request-response cycle 
    res.status(400).send("User Name and Message Text fields are required");
  }
  // pushes req.body object values into messges array with value for added key
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  // redirects client to the root
  res.redirect("/");
});

// exports this local module
module.exports = router;
*/
