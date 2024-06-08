import styles from "./navbar.module.css";
import Property1Blue from "./property1-blue";
import UserMenu from "./userMenu";

const NavbarMenu = () => {
  return (
    <>
      <div className={styles.rectangleParent}>
        <div className="animate__animated animate__bounceInDown">
          <div className={styles.groupChild} />
          <div className={styles.groupWrapper}>
            <div className={styles.bigParent}>
              <b className={styles.big}>BIG</b>
              <div className={styles.forum} style={{ marginLeft: "8px" }}>
                FORUM
              </div>
            </div>
          </div>
          <Property1Blue
            dimensionDetails="/images/dasboardImages/logo-big-karier-1.svg"
            property1BlueIconWidth="152.6px"
            property1BlueIconHeight="40px"
            property1BlueIconPosition="absolute"
            property1BlueIconTop="42px"
            property1BlueIconLeft="680px"
          />
          <div className={styles.frameParent}>
            <div className={styles.carbonnotificationParent}>
              <img
                className={styles.carbonnotificationIcon}
                alt=""
                src="/images/dasboardImages/carbonnotification.svg"
              />
              <div className={styles.notification}>Notification</div>
            </div>
            <div className={styles.carbonnotificationParent}>
              <img
                className={styles.carbonnotificationIcon}
                alt=""
                src="/images/dasboardImages/bichatlefttext.svg"
              />
              <div className={styles.notification}>Message</div>
            </div>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.frameChild}
                alt=""
                src="/images/avatars/avatar.jpg"
              />
              <div className={styles.fullName}>Full Name</div>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
