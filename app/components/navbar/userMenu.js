// UserMenu.jsx
import styles from "./userMenu.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/pages/login";
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.tagName !== "BUTTON"
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="ghost"
            style={{
              borderRadius: 7,
              border: "none",
              backgroundColor: "transparent",
            }}
            disableRipple
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
          >
            <div
              className="bxchevronDownIcon"
              style={{
                transition: "transform 0.3s ease",
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <img
                alt="dropdown"
                src="/images/dasboardImages/bxchevrondown.svg"
              />
            </div>
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          open={isDropdownOpen}
          onClose={() => {
            setIsDropdownOpen(false);
          }}
          ref={dropdownRef}
          className={styles.dropdownMenu}
          dropup
          offset={{ x: -10, y: 10 }}
          transition
          showAnimation="slideInUp"
          hideAnimation="slideOutDown"
          onCloseAuto
        >
          <DropdownSection className={styles.dropdownSection}>
            <DropdownItem
              key="dashboard"
              className={styles.dropdownItem}
              onClick={() => console.log("Dashboard clicked")}
            >
              <img
                alt="dashboard"
                src="/images/dashboard.png"
                className={styles.dropdownIcon}
              />
              <span>Dashboard</span>
            </DropdownItem>
            <DropdownItem
              key="settings"
              className={styles.dropdownItem}
              onClick={() => console.log("Settings clicked")}
            >
              <img
                alt="settings"
                src="/images/settings.png"
                className={styles.dropdownIcon}
              />
              <span>Settings</span>
            </DropdownItem>
            <DropdownItem
              key="logout"
              className={styles.dropdownItem}
              onClick={handleLogout}
            >
              <img
                alt="logout"
                src="/images/logout.png"
                className={styles.dropdownIcon}
              />
              <span>Logout</span>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
