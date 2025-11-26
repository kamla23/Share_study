const errorMid = (err, req, res, next) => {
    console.log("Error:", err);
    res.status(500).json({ msg: "Server error" });
    next(err); 
};
