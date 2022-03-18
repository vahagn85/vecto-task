import React, { useState } from "react";
import SearchIcon from "./icons/ICON-Search.png";
import HomeIcon from "./icons/Group-46.png";
import WatchLaterIcon from "./icons/Group-47.png";
import MoviesIcon from "./icons/Group-54.png";
import TVShowsIcon from "./icons/Group-56.png";
import GenresIcon from "./icons/Group-53.png";
import styles from "./Menu.module.css";
import cn from "classnames";
import { Nav } from "react-bootstrap";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mList = [
    {
      id: 1,
      icon: SearchIcon,
      name: "Search",
    },
    {
      id: 2,
      icon: HomeIcon,
      name: "Home",
    },
    {
      id: 3,
      icon: TVShowsIcon,
      name: "TV Shows",
    },
    {
      id: 4,
      icon: MoviesIcon,
      name: "Movies",
    },
    {
      id: 5,
      icon: GenresIcon,
      name: "Genres",
    },
    {
      id: 6,
      icon: WatchLaterIcon,
      name: "Watch Later",
    },
  ];
  return (
    <div
      className={cn(styles.menu_wrapper, {
        [styles.hovered]: isOpen,
      })}
    >
      <div
        className={cn(styles.bg_dark, {
          [styles.bg_show]: isOpen,
        })}
      />
      <ul
        className={cn("list-unstyled", styles.first_list, {
          [styles.first_list_open]: isOpen,
        })}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
      >
        {mList.map((m, idx) => (
          <li key={m.id} className={styles.list_item}>
            <Nav.Link href="/" className={styles.list_link}>
              <div className={styles.list_icon}>
                <img src={m.icon} alt={m.name} />
              </div>
            </Nav.Link>
          </li>
        ))}
      </ul>
      <div
        className={cn(styles.main_menu_wrap, {
          [styles.main_menu_wrap_active]: isOpen,
        })}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <ul className={cn("list-unstyled", styles.menu_hover_list)}>
          <li className={styles.user_item}>
            <div className={styles.user_photo}>
              <img
                src={process.env.PUBLIC_URL + "/assets/Sung-Gi-Hoon.png"}
                alt="user"
              />
            </div>

            <span className={styles.user_name}>Daniel</span>
          </li>
          {mList.map((m, idx) => (
            <li
              key={m.id}
              className={cn(styles.list_item, {
                [styles.active]: m.id === 2,
              })}
            >
              <Nav.Link
                href="/"
                className={cn(styles.list_link, {
                  [styles.active]: m.id === 2,
                })}
              >
                <div className={styles.list_icon}>
                  <img src={m.icon} alt={m.name} />
                </div>

                <span className={styles.list_name}>{m.name}</span>
              </Nav.Link>
            </li>
          ))}
        </ul>
        <ul className={styles.second_list}>
          {["LENGUAGE", "GET HELP", "EXIT"].map((item) => (
            <li key={item}>
              <Nav.Link href="/" className={styles.second_list_item_link}>
                {item}
              </Nav.Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
