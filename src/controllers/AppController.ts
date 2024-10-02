import { Request, Response } from "express";
import { createMenuObject } from "../helpers/activeMenu";
import { Pet } from "../models/Pet";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    res.render("pages/page", {
        menu: createMenuObject("all"),
        banner: {
            title: "Todos os animais",
            image: "allanimals.jpg"
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType("dog");
    res.render("pages/page", {
        menu: createMenuObject("dog"),
        banner: {
            title: "Cachorros",
            image: "banner_dog.jpg"
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType("cat");
    res.render("pages/page", {
        menu: createMenuObject("cat"),
        banner: {
            title: "Gatos",
            image: "banner_cat.jpg"
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType("fish");
    res.render("pages/page", {
        menu: createMenuObject("fish"),
        banner: {
            title: "Peixes",
            image: "banner_fish.jpg"
        },
        list
    });
}

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string;
    let list = Pet.getFromName(query);
    
    if (!query) {
        res.redirect("/");
        return;
    }

    res.render("pages/page", {
        menu: createMenuObject(""),
        list
    });
}