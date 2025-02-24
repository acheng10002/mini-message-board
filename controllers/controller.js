const db = require("../models/queries");

async function messagesListGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

async function messagesFindGet(req, res) {
  const messages = await db.getAllMessages();
  const user = req.params.user;
  const userMessage = messages.find((msg) => msg.user === user);

  if (!userMessage) {
    return res.status(404).send("User not found or no messages available.");
  }

  res.render("messageDetails", {
    title: `${user}'s Message`,
    message: userMessage,
  });
}

async function messagesInsertGet(req, res) {
  res.render("form");
}

async function messagesInsertPost(req, res) {
  if (!req.body.message || !req.body.user) {
    return res
      .status(400)
      .send("User Name and Message Text fields are required");
  }
  await db.insertMessage(req.body.message, req.body.user);
  res.redirect("/");
}

async function messageDeletePost(req, res) {
  const messageId = req.params.id;

  try {
    await db.deleteMessage(messageId);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  messagesListGet,
  messagesFindGet,
  messagesInsertGet,
  messagesInsertPost,
  messageDeletePost,
};
