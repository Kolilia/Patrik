import React, { memo, useCallback, useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { ReactComponent as ArrowDown } from "../Icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../Icons/arrow-up.svg";
import styles from "./index.module.css";

const Options = ({ options, setValue, name, setOpenMenu }) => {
  const mapOptions = options.map((item) => {
    return (
      <div
        className={styles.option}
        key={item?.value}
        onClick={() => {
          setTimeout(() => setValue(name, item?.value), 0);
          setOpenMenu(false);
        }}
      >
        {item?.label}
      </div>
    );
  });

  return <div className={styles.menuOptions}>{mapOptions}</div>;
};

const Menu = memo(({ name, control, rules, label, options, setValue }) => {
  const { field } = useController({
    name: name,
    control: control,
    rules: rules,
  });

  const [openMenu, setOpenMenu] = useState(false);

  const onClickOpenMenu = () => {
    setOpenMenu(true);
  };

  const onClickCloseMenu = () => {
    setOpenMenu(false);
  };

  const handlerMenu = useCallback(
    (e) => {
      const element = document.getElementById("menu");

      if (openMenu && !element?.contains(e.target)) {
        setOpenMenu(false);
      }
    },
    [openMenu]
  );

  useEffect(() => {
    document.addEventListener("click", handlerMenu);

    return () => {
      document.removeEventListener("click", handlerMenu);
    };
  }, [handlerMenu, openMenu]);

  return (
    <div className={styles.block} id="menu">
      <label htmlFor={label + name}>{label}</label>

      <input
        {...field}
        onChange={() => {
          return;
        }}
        className={styles.menuMain}
        type="text"
        autoComplete="off"
        id={label + name}
        onClick={openMenu ? onClickCloseMenu : onClickOpenMenu}
      />

      {openMenu ? (
        <ArrowUp onClick={onClickCloseMenu} className={styles.icon} />
      ) : (
        <ArrowDown onClick={onClickOpenMenu} className={styles.icon} />
      )}

      {openMenu ? (
        <Options
          options={options}
          setValue={setValue}
          name={name}
          setOpenMenu={setOpenMenu}
        />
      ) : null}
    </div>
  );
});

export default Menu;
