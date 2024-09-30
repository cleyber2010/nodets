import { Request, Response } from "express";
import { createMenuObject } from "../helpers/activeMenu";

export const home = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject("all"),
        banner: {
            title: "Todos os animais",
            image: "allanimals.jpg"
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject("dog"),
        banner: {
            title: "Cachorros",
            image: "banner_dog.jpg"
        }
    });
}

export const cats = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject("cat"),
        banner: {
            title: "Gatos",
            image: "banner_cat.jpg"
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject("fish"),
        banner: {
            title: "Peixes",
            image: "banner_fish.jpg"
        }
    });
}

export const search = (req: Request, res: Response) => {

}