import type {DataCategorized} from "~/types";

export const dataCategorized: DataCategorized[] = [
  {
    Action: [
      {
        id: 1,
        title: "Show 1",
        url: "/shows/1",
        image: "image1.jpg",
        metaList: [
          { name: "Rating", value: "4.5" },
          { name: "Genres", value: "Action, Drama" },
        ],
      },
      {
        id: 3,
        title: "Show 3",
        url: "/shows/3",
        image: "image3.jpg",
        metaList: [
          { name: "Rating", value: "5.0" },
          { name: "Genres", value: "Comedy, Action" },
        ],
      },
    ],
  },
  {
    Drama: [
      {
        id: 1,
        title: "Show 1",
        url: "/shows/1",
        image: "image1.jpg",
        metaList: [
          { name: "Rating", value: "4.5" },
          { name: "Genres", value: "Action, Drama" },
        ],
      },
      {
        id: 2,
        title: "Show 2",
        url: "/shows/2",
        image: "image2.jpg",
        metaList: [
          { name: "Rating", value: "3.2" },
          { name: "Genres", value: "Drama, Comedy" },
        ],
      },
    ],
  },
  {
    Comedy: [
      {
        id: 2,
        title: "Show 2",
        url: "/shows/2",
        image: "image2.jpg",
        metaList: [
          { name: "Rating", value: "3.2" },
          { name: "Genres", value: "Drama, Comedy" },
        ],
      },
      {
        id: 3,
        title: "Show 3",
        url: "/shows/3",
        image: "image3.jpg",
        metaList: [
          { name: "Rating", value: "5.0" },
          { name: "Genres", value: "Comedy, Action" },
        ],
      },
    ],
  },
];
