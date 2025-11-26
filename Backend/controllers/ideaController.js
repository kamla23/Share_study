import Idea from "../models/Idea.js";


export const addIdea = async (req, res) => {
  const { title, desc, tags } = req.body;

  const idea = await Idea.create({
    uid: req.uid,
    title,
    desc,
    tags
  });

  res.json({ msg: "Idea added", idea });
};


export const getIdeas = async (req, res) => {
  const list = await Idea.find({});
  res.json(list);
};


export const updateIdea = async (req, res) => {
  const { id } = req.params;

  await Idea.findByIdAndUpdate(id, req.body);

  res.json({ msg: "Idea updated" });
};


export const deleteIdea = async (req, res) => {
  const { id } = req.params;

  await Idea.findByIdAndDelete(id);

  res.json({ msg: "Idea deleted" });
};

export const likeIdea = async (req, res) => {
  const { id } = req.params;

  await Idea.findByIdAndUpdate(id, { $inc: { likes: 1 } });

  res.json({ msg: "Liked" });
};
