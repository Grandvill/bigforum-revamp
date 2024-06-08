import React, { useState } from 'react';
import styles from './sidebar.module.css';
import UmumSidebar from './umumSidebar';
import MenuSidebar from './menuSidebar';

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState('home'); // State untuk mengelola menu aktif

  // Fungsi untuk mengubah menu aktif
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="animate__animated animate__bounceInLeft">
      {activeMenu === 'home' ? (
        <div className={styles.frameParent2}>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('home')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/homeIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Home</div>
          </button>
          <div className={styles.frameParent3}>
            <button className={styles.rectangleWrapper}>
              <img className={styles.frameChild3} alt="" src="/images/avatars/avatar.jpg" />
            </button>
            <div style={{ fontWeight: 'bold' }}>Username</div>
          </div>
          <div className={styles.lineDiv} />
          <button className={styles.frameParent3} onClick={() => handleMenuClick('menu')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/menuIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Menu</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('sdm')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/sdmIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>SDM</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('umum')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/umumIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Umum</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('hukum')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/hukumIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Hukum</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('simo')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/simoIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>SIMO</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('keuangan')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/keuanganIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Keuangan</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('akunting')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/akuntingIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Akunting</div>
          </button>
          <div className={styles.privacyParent}>
            <div>Privacy</div>
            <div>•</div>
            <div>Terms</div>
            <div>•</div>
            <div>Language</div>
          </div>
          <div className={styles.copyright2022Container}>
            <p className={styles.allRightReserved}>Copyright © 2022</p>
            <p className={styles.allRightReserved}>All Right Reserved by Bisnis Indonesia Group</p>
          </div>
        </div>
      ) : activeMenu === 'umum' ? (
        <UmumSidebar />
      ) : null}
      ,
      {activeMenu === 'home' ? (
        <div className={styles.frameParent2}>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('home')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/homeIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Home</div>
          </button>
          <div className={styles.frameParent3}>
            <button className={styles.rectangleWrapper}>
              <img className={styles.frameChild3} alt="" src="/images/avatars/avatar.jpg" />
            </button>
            <div style={{ fontWeight: 'bold' }}>Username</div>
          </div>
          <div className={styles.lineDiv} />
          <button className={styles.frameParent3} onClick={() => handleMenuClick('menu')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/menuIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Menu</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('sdm')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/sdmIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>SDM</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('umum')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/umumIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Umum</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('hukum')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/hukumIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Hukum</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('simo')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/simoIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>SIMO</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('keuangan')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/keuanganIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Keuangan</div>
          </button>
          <button className={styles.frameParent3} onClick={() => handleMenuClick('akunting')}>
            <img className={styles.rectangleWrapper} alt="" src="/images/dasboardImages/akuntingIcon.svg" />
            <div style={{ fontWeight: 'bold' }}>Akunting</div>
          </button>
          <div className={styles.privacyParent}>
            <div className={styles.whatsOnYour}>Privacy</div>
            <div className={styles.whatsOnYour}>•</div>
            <div className={styles.whatsOnYour}>Terms</div>
            <div className={styles.whatsOnYour}>•</div>
            <div className={styles.whatsOnYour}>Language</div>
          </div>
          <div className={styles.copyright2022Container}>
            <p className={styles.allRightReserved}>Copyright © 2022</p>
            <p className={styles.allRightReserved}>All Right Reserved by Bisnis Indonesia Group</p>
          </div>
        </div>
      ) : activeMenu === 'menu' ? (
        <MenuSidebar />
      ) : null}
      ,
    </div>
  );
};

export default SidebarMenu;
