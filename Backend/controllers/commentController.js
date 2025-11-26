import Comment from "../models/Comment.js";


export const addComment = async (req, res) => {
  const { ideaId, txt } = req.body;

  const com = await Comment.create({
    ideaId,
    uid: req.uid,
    txt
  });

  res.json({ msg: "Comment added", com });
};


export const getComments = async (req, res) => {
  const { id } = req.params;

  const list = await Comment.find({ ideaId: id });

  res.json(list);
};
