import {videoin} from "../db";
export const home =(req, res)=> {res.render("Home", {pageTitle: "HOME", videoin});
}

export const search = (req, res) => {
    const {
      query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videoin });
  };
  

export const videos =(req,res) =>res.render("Videos", {pageTitle: "Videos"});


export const upload =(req,res) =>res.render("Upload", {pageTitle: "Upload"});


export const videoDetail =(req,res) =>res.render("Video Detail", {pageTitle: "videoDetail"});


export const editVideo =(req,res) =>res.render("Edit Video", {pageTitle: "editVideo"});


export const deleteVideo =(req,res) =>res.render("Delete Video", {pageTitle: "deleteVideo"});

